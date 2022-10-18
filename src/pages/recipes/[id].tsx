import { Link, Loader } from '@/components';
import { ActionsHeader, IngredientsSidebar } from '@/components/RecipeId';
import { Recipe } from '@/types/chowder';
import { trpc } from '@/utils/trpc';
import { ChevronLeftIcon, LinkIcon, UsersIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { RecipesPageLayout } from '.';

type Props = {
  recipe: Recipe;
};

export default function RecipePage({}: Props) {
  const { query } = useRouter();
  const { data: recipe, isLoading } = trpc.example.getRecipeById.useQuery(query.id as string);

  if (isLoading) return <Loader className="h-10 w-10 text-primary-9" />;

  if (!recipe) return <div>No Recipe Found</div>;

  return (
    <>
      <ActionsHeader recipe={recipe} />

      <nav className="flex items-start border-b border-gray-6 px-4 py-3 sm:hidden">
        <Link
          href="/recipes"
          className="inline-flex items-center space-x-3 text-sm font-medium text-gray-12"
        >
          <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-9" aria-hidden="true" />
          <span>Recipes</span>
        </Link>
      </nav>

      {recipe ? (
        <div className="flex min-h-0 flex-1">
          <div className="flex-1 overflow-y-auto p-10">
            <h1 className="text-3xl font-bold text-gray-12">{recipe.name}</h1>
            <div className="mt-2 flex gap-8">
              {recipe.link && (
                <a
                  className="flex items-center text-gray-11 hover:underline"
                  href={recipe.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="mr-1 h-5 w-5" />
                  {new URL(recipe.link).hostname}
                </a>
              )}

              <div className="flex items-center text-gray-11">
                <UsersIcon className="mr-1 h-5 w-5" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
          <IngredientsSidebar recipe={recipe} />
        </div>
      ) : (
        <div>Recipe does not exist</div>
      )}
    </>
  );
}

RecipePage.getLayout = RecipesPageLayout;
