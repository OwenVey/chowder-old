import { Button } from '@/components';
import { Recipe } from '@/types/chowder';
import numberToFraction from '@/utils/number-to-fraction';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/future/image';
import { useState } from 'react';

type Props = {
  recipe: Recipe;
};

export default function IngredientsSidebar({ recipe }: Props) {
  const [servings, setServings] = useState(recipe.servings);

  return (
    <aside className="hidden w-80 flex-col border-l border-gray-6 bg-gray-2 xl:flex">
      {recipe.photos[0] && (
        <Image
          className="h-48 w-full object-cover"
          width={319}
          height={192}
          quality={100}
          alt="food"
          src={recipe.photos[0]}
        />
      )}

      <div className="p-10 pt-4">
        <div className="flex items-center justify-between border-b border-gray-6 px-6 pb-2">
          <Button
            onClick={() => servings > 1 && setServings(servings - 1)}
            icon={<MinusCircleIcon />}
            variant="subtle"
            color="gray"
          />
          <div>
            <span className="inline-block font-medium text-gray-12">{servings}</span>{' '}
            <span className="text-gray-11">serving{servings > 1 && 's'}</span>
          </div>
          <Button
            onClick={() => setServings(servings + 1)}
            icon={<PlusCircleIcon />}
            variant="subtle"
            color="gray"
          />
        </div>
        <ul className="mt-3.5 space-y-4 overflow-y-auto">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              {/* quantity */}
              {ingredient.quantity && (
                <span className="font-bold diagonal-fractions text-primary-10">
                  {numberToFraction(ingredient.quantity * (servings / recipe.servings))}{' '}
                </span>
              )}

              {/* unit */}
              {ingredient.unit && (
                <span className="font-medium text-gray-12">
                  {ingredient.unit}
                  {ingredient.quantity && ingredient.quantity > 1 ? 's ' : ' '}
                </span>
              )}

              {/* name */}
              <span className="lowercase text-gray-11">{ingredient.name}</span>

              {/* note */}
              {ingredient.note && <span className="italic text-gray-9"> {ingredient.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
