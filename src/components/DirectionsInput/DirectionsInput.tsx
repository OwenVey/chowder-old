import { Button, TextInput } from '@/components';
import type { DragEndEvent } from '@dnd-kit/core';
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
import { SortableDirection } from '.';

interface Props {
  name?: string;
  controlled?: boolean;
  value?: string[];
  onChange?: (directions: string[]) => void;
  error?: string;
}

export default function DirectionsInput({
  value: directions = [],
  onChange = () => null,
  error: overallError,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const newDirectionInputRef = useRef<HTMLInputElement>(null);
  const [newDirection, setNewDirection] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addDirection();
    }
  };

  const addDirection = () => {
    if (!newDirection) {
      setError('Direction cannot be empty');
      return;
    }

    if (directions.some((i) => i === newDirection)) {
      setError('That direction already exists');
      return;
    }

    onChange([...directions, newDirection]);
    setNewDirection('');
    newDirectionInputRef.current?.focus();
  };

  const deleteDirection = (direction: string) => {
    const newDirections = directions.filter((d) => d !== direction);
    onChange(newDirections);
  };

  return (
    <div>
      <label htmlFor="" className="mb-1 inline-block select-none text-sm font-medium text-gray-11">
        Directions
      </label>
      {directions.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        >
          <div className="flex flex-col space-y-1 rounded-lg border border-gray-7 bg-gray-4 p-1">
            <SortableContext items={directions} strategy={verticalListSortingStrategy}>
              {directions.map((direction) => (
                <SortableDirection
                  onDelete={deleteDirection}
                  key={direction}
                  direction={direction}
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
              ref={newDirectionInputRef}
              value={newDirection}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setNewDirection(e.target.value);
                setError(undefined);
              }}
              className="flex-1"
              placeholder="Add a direction"
              onBlur={() => {
                setError(undefined);
              }}
              error={error}
              clearable
              onClear={() => {
                setNewDirection('');
                setShowInput(false);
              }}
            />
            <Button
              className="self-start"
              onClick={addDirection}
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
            Add Direction
          </Button>
        )}
      </div>

      <p>{overallError}</p>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = directions.indexOf(active.id.toString());
      const newIndex = directions.indexOf(over?.id.toString() ?? '');

      const newDirections = arrayMove(directions, oldIndex, newIndex);
      onChange(newDirections);
    }
  }
}
