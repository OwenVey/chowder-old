import { RecipeWithIngredients } from '@/types/chowder';
import { ClockIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  recipe: RecipeWithIngredients;
  isActive: boolean;
};

export default function RecipeCard({ recipe, isActive }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className={clsx(
        'group flex rounded-lg p-3',
        isActive ? 'bg-primary-9' : 'hover:bg-gray-4 active:bg-gray-5',
      )}
    >
      {recipe.photo ? (
        <Image
          className="h-24 w-24 rounded-lg object-cover"
          width={96}
          height={96}
          alt="food"
          src={recipe.photo}
        />
      ) : (
        <div>No photo</div>
      )}
      <div className="ml-2 flex flex-col justify-center gap-1">
        <div
          className={clsx('font-semibold line-clamp-1', isActive ? 'text-white' : 'text-gray-12')}
        >
          {recipe.name}
        </div>
        <div className="flex space-x-4">
          {recipe.prepTime + recipe.cookTime > 0 && (
            <div className="flex items-center">
              <ClockIcon className={clsx('h-4 w-4', isActive ? 'text-white' : 'text-gray-9')} />
              <span
                className={clsx(
                  'ml-1 text-xs font-medium',
                  isActive ? 'text-white' : 'text-gray-12',
                )}
              >
                {recipe.prepTime + recipe.cookTime} min
              </span>
            </div>
          )}
          {/* <div className="flex items-center">
            <ListBulletIcon className={clsx('h-4 w-4', isActive ? 'text-white' : 'text-gray-9')} />
            <span
              className={clsx('ml-1 text-xs font-medium', isActive ? 'text-white' : 'text-gray-12')}
            >
              {recipe.ingredients.length} ingredients
            </span>
          </div> */}
        </div>
        <p className={clsx('text-sm line-clamp-2', isActive ? 'text-whiteA-11' : 'text-gray-11')}>
          {recipe.description}
        </p>
      </div>
    </Link>
  );
}
