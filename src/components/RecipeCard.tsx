import { Recipe } from '@/types/chowder';
import { ClockIcon, ListBulletIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/future/image';
import Link from './Link';

type Props = {
  recipe: Recipe;
  isActive: boolean;
};

export default function RecipeCard({ recipe, isActive }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className={clsx(
        'group flex rounded-lg p-3',
        isActive ? 'bg-primary-9' : 'hover:bg-primary-9',
      )}
    >
      {recipe.photos[0] && (
        <Image
          className="h-24 w-24 rounded-lg object-cover"
          width={96}
          height={96}
          alt="food"
          src={recipe.photos[0]}
        />
      )}
      <div className="ml-2 flex flex-col justify-center gap-0.5">
        <div
          className={clsx(
            'text-lg font-semibold',
            isActive ? 'text-white' : 'text-gray-12 group-hover:text-white',
          )}
        >
          {recipe.name}
        </div>
        <div className="flex space-x-4">
          {recipe.prepTime + recipe.cookTime > 0 && (
            <div className="flex items-center">
              <ClockIcon
                className={clsx(
                  'h-4 w-4',
                  isActive ? 'text-white' : 'text-gray-9 group-hover:text-white',
                )}
              />
              <span
                className={clsx(
                  'ml-1 text-xs font-medium',
                  isActive ? 'text-white' : 'text-gray-12 group-hover:text-white',
                )}
              >
                {recipe.prepTime + recipe.cookTime} min
              </span>
            </div>
          )}
          <div className="flex items-center">
            <ListBulletIcon
              className={clsx(
                'h-4 w-4',
                isActive ? 'text-white' : 'text-gray-9 group-hover:text-white',
              )}
            />
            <span
              className={clsx(
                'ml-1 text-xs font-medium',
                isActive ? 'text-white' : 'text-gray-12 group-hover:text-white',
              )}
            >
              {recipe.ingredients.length} ingredients
            </span>
          </div>
        </div>
        <p
          className={clsx(
            'text-sm',
            isActive ? 'text-whiteA-11' : 'text-gray-11 group-hover:text-whiteA-11',
          )}
        >
          {recipe.description}
        </p>
      </div>
    </Link>
  );
}
