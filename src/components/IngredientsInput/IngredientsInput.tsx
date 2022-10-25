import { Button } from '@/components';
import { Ingredient } from '@/types/chowder';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
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
import { SortableIngredientListItem } from '.';

interface Props {
  name?: string;
  ingredients: Ingredient[];
  onChange: (ingredients: Ingredient[]) => void;
}

export default function IngredientsInput({ ingredients, onChange }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const addIngredient = () => {
    const newIngredient: Ingredient = {
      id: ingredients.length.toString(),
      name: 'Garlic',
      quantity: 2,
      unit: 'clove',
    };
    onChange([...ingredients, newIngredient]);
  };

  const deleteIngredient = (ingredient: Ingredient) => {
    const newIngredients: Ingredient[] = ingredients.filter((i) => i.id !== ingredient.id);
    onChange(newIngredients);
  };

  return (
    <div>
      <label htmlFor="" className="mb-1 inline-block select-none text-sm font-medium text-gray-11">
        Ingredients
      </label>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
      >
        <div className="flex flex-col space-y-1 rounded-lg border border-gray-7 bg-gray-4 p-1">
          <SortableContext items={ingredients} strategy={verticalListSortingStrategy}>
            {ingredients.map((ingredient) => (
              <SortableIngredientListItem
                onDelete={deleteIngredient}
                key={ingredient.id}
                ingredient={ingredient}
              />
            ))}
          </SortableContext>
          <Button
            onClick={addIngredient}
            className="w-full"
            variant="default"
            leftIcon={<PlusCircleIcon />}
          >
            Add Ingredient
          </Button>
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = ingredients.findIndex((i) => i.id === active.id);
      const newIndex = ingredients.findIndex((i) => i.id === over?.id);

      const newIngredients = arrayMove(ingredients, oldIndex, newIndex);
      onChange(newIngredients);
    }
  }
}
