import { AlertDialog, Button } from '@/components';
import { Recipe } from '@/types/chowder';
import {
  ArrowTopRightOnSquareIcon,
  PencilSquareIcon,
  PlayIcon,
  ShareIcon,
  ShoppingCartIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

type Props = {
  recipe: Recipe;
};

export default function ActionsHeader({ recipe }: Props) {
  return (
    <div className="flex h-16 items-center justify-end border-b border-gray-6 bg-gray-3 px-4">
      <div className="flex items-center gap-3">
        <Button icon={<PlayIcon />} variant="subtle" color="gray" tooltip="Start recipe" />
        <Button
          icon={<ShoppingCartIcon />}
          variant="subtle"
          color="gray"
          tooltip="Add to groceries"
        />
        <Button icon={<ShareIcon />} variant="subtle" color="gray" tooltip="Share" />
        {recipe.link && (
          <Button
            as="a"
            href={recipe.link}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowTopRightOnSquareIcon />}
            variant="subtle"
            color="gray"
            tooltip="Open link"
          />
        )}
        <Button icon={<PencilSquareIcon />} variant="subtle" color="gray" tooltip="Edit recipe" />
        <AlertDialog
          title={`Are you sure you want to delete "${recipe.name}"?`}
          description="This action cannot be undone."
          confirmText="Delete"
          variant="danger"
          trigger={
            <Button icon={<TrashIcon />} variant="subtle" color="red" tooltip="Delete recipe" />
          }
        />
      </div>
    </div>
  );
}
