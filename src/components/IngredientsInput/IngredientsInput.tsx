import { Ingredient } from '@/types/chowder';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { IngredientListItem, SortableIngredientListItem } from '.';

interface Props {
  test?: string;
  // ingredients: Ingredient[];
}

export default function IngredientsInput({}: Props) {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', name: 'Fettuccine', quantity: 12, unit: 'ounce' },
    { id: '2', name: 'Bacon', quantity: 4, unit: 'slice' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <div>
      <label htmlFor="" className="mb-1 inline-block select-none text-sm font-medium text-gray-11">
        Ingredients
      </label>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-1 rounded-lg border border-gray-7 bg-gray-4 p-1">
          <SortableContext items={ingredients} strategy={verticalListSortingStrategy}>
            {ingredients.map((ingredient) => (
              <SortableIngredientListItem key={ingredient.id} ingredient={ingredient} />
            ))}
          </SortableContext>
        </div>
        <DragOverlay>
          {activeId ? (
            <IngredientListItem
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              ingredient={ingredients.find((i) => i.id === activeId)!}
              id={activeId.toString()}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setIngredients((ingredients) => {
        const oldIndex = ingredients.findIndex((i) => i.id === active.id);
        const newIndex = ingredients.findIndex((i) => i.id === over?.id);

        return arrayMove(ingredients, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }
}
