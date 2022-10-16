import { Recipe } from '@/types/chowder';
import { recipes } from '@/utils/mocks';
import { GetServerSideProps } from 'next';
import { RecipesPageLayout } from '.';

type Props = {
  recipe: Recipe;
};

export default function RecipePage({ recipe }: Props) {
  return (
    <div>
      <div>{JSON.stringify(recipe, null, 2)}</div>
    </div>
  );
}

RecipePage.getLayout = RecipesPageLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      recipe: recipes.find((recipe) => recipe.id === context.query.id),
    },
  };
};
