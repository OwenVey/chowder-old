import { Button, TextInput } from '@/components';
import type { NewIngredient } from '@/types/chowder';
import ingredientFromString from '@/utils/ingredient-from-string';
import type {
  DragEndEvent} from '@dnd-kit/core';
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MeasuringStrategy,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { useRef, useState } from 'react';
import { SortableIngredientListItem } from '.';

interface Props {
  name?: string;
  controlled?: boolean;
  value?: NewIngredient[];
  onChange?: (ingredients: NewIngredient[]) => void;
  error?: string;
}

export default function IngredientsInput({
  value: ingredients = [],
  onChange = () => null,
  error: overallError,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const newIngredientInputRef = useRef<HTMLInputElement>(null);
  const [newIngredient, setNewIngredient] = useState('');
  const [note, setNote] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };

  const addIngredient = () => {
    if (!newIngredient) {
      setError('Ingredient cannot be empty');
      return;
    }

    const ingredient = ingredientFromString(newIngredient, note);

    if (ingredient === null) {
      setError('Error parsing ingredient');
      return;
    }

    if (ingredients.some((i) => i.name === ingredient.name)) {
      setError('There is already an ingredient with that name');
      return;
    }

    onChange([...ingredients, ingredient]);
    setNewIngredient('');
    setNote('');
    newIngredientInputRef.current?.focus();
  };

  const deleteIngredient = (ingredient: NewIngredient) => {
    const newIngredients = ingredients.filter((i) => i.name !== ingredient.name);
    onChange(newIngredients);
  };

  return (
    <div>
      <label htmlFor="" className="mb-1 inline-block select-none text-sm font-medium text-gray-11">
        Ingredients
      </label>
      {ingredients.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        >
          <div className="flex flex-col space-y-1 rounded-lg border border-gray-7 bg-gray-4 p-1">
            <SortableContext
              items={ingredients.map((i) => i.name)}
              strategy={verticalListSortingStrategy}
            >
              {ingredients.map((ingredient) => (
                <SortableIngredientListItem
                  onDelete={deleteIngredient}
                  key={ingredient.name}
                  ingredient={ingredient}
                />
              ))}
            </SortableContext>
          </div>
        </DndContext>
      )}

      <div className="mt-1">
        {showInput ? (
          <div className="flex space-x-1">
            <TextInput
              ref={newIngredientInputRef}
              value={newIngredient}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setNewIngredient(e.target.value);
                setError(undefined);
              }}
              className="flex-1"
              placeholder="2 slices bacon"
              onBlur={() => {
                setError(undefined);
              }}
              error={error}
              clearable
              onClear={(e) => {
                setNewIngredient('');
                setNote('');
                setShowInput(false);
              }}
            />
            <TextInput
              value={note}
              onKeyDown={handleKeyDown}
              onChange={(e) => setNote(e.target.value)}
              className="w-32"
              inputClass="placeholder:italic"
              placeholder="chopped"
            />
            <Button
              className="self-start"
              onClick={addIngredient}
              icon={<PlusCircleIcon />}
              variant="subtle"
            />
          </div>
        ) : (
          <Button
            onClick={() => setShowInput(true)}
            className="w-full"
            variant="default"
            leftIcon={<PlusCircleIcon />}
          >
            Add Ingredient
          </Button>
        )}
      </div>

      <p>{overallError}</p>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = ingredients.findIndex((i) => i.name === active.id);
      const newIndex = ingredients.findIndex((i) => i.name === over?.id);

      const newIngredients = arrayMove(ingredients, oldIndex, newIndex);
      onChange(newIngredients);
    }
  }
}
