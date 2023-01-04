import { Popover } from '@/app/components';
import type { Ingredient } from '@prisma/client';
import { Fragment } from 'react';
import { default as IngredientComponent } from './Ingredient';

type Props = {
  stepNumber: number;
  direction: string;
  ingredients: Ingredient[];
};

export default function RecipeDirection({ stepNumber, direction, ingredients }: Props) {
  const highlightFilters = ['and', 'or'];

  const words = direction.split(/([\s,]+)/).map((text) => {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.name
        .split(' ')
        .map((i) => i.toLowerCase())
        .filter((i) => !highlightFilters.includes(i))
        .includes(text.toLowerCase()),
    );
    return { text, ingredients: filteredIngredients };
  });

  return (
    <li className="flex">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-9 text-xs font-medium text-white">
        {stepNumber}
      </div>

      <p className="ml-2 flex-1 text-gray-11">
        {words.map((word, i) => {
          return word.ingredients.length < 1 ? (
            <Fragment key={i}>{word.text}</Fragment>
          ) : (
            <Popover
              key={i}
              trigger={
                <span className="cursor-pointer rounded border border-gray-5 bg-gray-4 px-1 py-0.5 font-medium leading-none text-gray-12 hover:border-gray-6 hover:bg-gray-5 active:bg-gray-6">
                  {word.text}
                </span>
              }
            >
              <ul>
                {word.ingredients.map((ingredient) => (
                  <IngredientComponent key={ingredient.name} ingredient={ingredient} />
                ))}
              </ul>
            </Popover>
          );
        })}
      </p>
    </li>
  );
}
