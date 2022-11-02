import { Button } from '@/components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Bars3Icon, TrashIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

interface Props {
  direction: string;
  onDelete: (direction: string) => void;
}

export default function SortableDirection({ direction, onDelete }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: direction,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        'z-10 flex items-center justify-between rounded-lg bg-gray-1 px-2 py-1 text-sm',
        isDragging && 'z-20 shadow-lg',
      )}
    >
      <p>{direction}</p>

      <div className="flex items-center">
        <Button
          onClick={() => onDelete(direction)}
          icon={<TrashIcon />}
          variant="subtle"
          color="gray"
          size="sm"
        />
        <Button
          {...attributes}
          {...listeners}
          className={clsx(isDragging ? 'cursor-grabbing shadow' : 'cursor-grab')}
          icon={<Bars3Icon />}
          variant="subtle"
          color="gray"
          size="sm"
        />
      </div>
    </div>
  );
}
