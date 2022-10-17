import { AlertDialog, Button } from '@/components';
import { Recipe } from '@/types/chowder';
import { trpc } from '@/utils/trpc';
import {
  LinkIcon,
  PencilSquareIcon,
  PlayIcon,
  ShareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { RecipesPageLayout } from '.';

type Props = {
  recipe: Recipe;
};

export default function RecipePage({}: Props) {
  const { query } = useRouter();
  const { data: recipe } = trpc.example.getRecipeById.useQuery(query.id as string);

  return (
    <div>
      <div className="flex h-16 items-center justify-end border-b border-gray-6 bg-gray-3 px-4">
        <div className="flex items-center gap-3">
          <Button icon={<LinkIcon />} variant="subtle" color="gray" tooltip="Copy link" />
          <Button icon={<PlayIcon />} variant="subtle" color="gray" tooltip="Start recipe" />
          <Button icon={<ShareIcon />} variant="subtle" color="gray" tooltip="Share" />
          <Button icon={<PencilSquareIcon />} variant="subtle" color="gray" tooltip="Edit recipe" />
          <Button icon={<LinkIcon />} variant="subtle" color="gray" tooltip="Copy link" />
          <AlertDialog
            title={`Are you sure you want to delete "${recipe?.name}"?`}
            description="This action cannot be undone."
            confirmText="Delete"
            variant="danger"
            trigger={
              <Button icon={<TrashIcon />} variant="subtle" color="red" tooltip="Delete recipe" />
            }
          />
        </div>
      </div>
      <div>{JSON.stringify(recipe, null, 2)}</div>
    </div>
  );
}

RecipePage.getLayout = RecipesPageLayout;
