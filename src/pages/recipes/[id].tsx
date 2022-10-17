import { Recipe } from '@/types/chowder';
import { recipes } from '@/utils/mocks';
import { trpc } from '@/utils/trpc';
import { GetServerSideProps } from 'next';
import { RecipesPageLayout } from '.';
import { useRouter } from 'next/router';
import { IconButton, Tooltip } from '@/components';
import {
  TrashIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  PencilSquareIcon,
  ShareIcon,
  PlayIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

type Props = {
  recipe: Recipe;
};

export default function RecipePage({}: Props) {
  const { query } = useRouter();
  const { data: recipe } = trpc.auth.getRecipeById.useQuery(query.id as string);
  console.log(recipe);

  return (
    <div>
      <div className="flex h-16 items-center justify-end border-b border-gray-6 bg-gray-3 px-4">
        <div className="flex items-center gap-3">
          <IconButton icon={<LinkIcon />} tooltip="Copy link" />
          <IconButton icon={<PlayIcon />} tooltip="Start recipe" />
          <IconButton icon={<ShareIcon />} tooltip="Share" />
          <IconButton icon={<PencilSquareIcon />} tooltip="Edit recipe" />
          <IconButton icon={<TrashIcon />} tooltip="Delete recipe" color="red" />
        </div>
      </div>
      <div>{JSON.stringify(recipe, null, 2)}</div>
    </div>
  );
}

RecipePage.getLayout = RecipesPageLayout;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       recipe: recipes.find((recipe) => recipe.id === context.query.id),
//     },
//   };
// };
