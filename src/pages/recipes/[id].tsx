import { Recipe } from '@/types/chowder';
import { recipes } from '@/utils/mocks';
import { trpc } from '@/utils/trpc';
import { GetServerSideProps } from 'next';
import { RecipesPageLayout } from '.';
import { useRouter } from 'next/router';

type Props = {
  recipe: Recipe;
};

export default function RecipePage({}: Props) {
  const { query } = useRouter();
  const { data: recipe } = trpc.auth.getRecipeById.useQuery(query.id as string);
  console.log(recipe);

  return (
    <div>
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
