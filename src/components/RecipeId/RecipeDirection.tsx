import { Popover } from '@/components';
import { Ingredient } from '@/components/RecipeId';
import { Recipe } from '@/types/chowder';
import { Fragment } from 'react';

type Props = {
  stepNumber: number;
  direction: string;
  recipe: Recipe;
};

export default function RecipeDirection({ stepNumber, direction, recipe }: Props) {
  const words = direction.split(/([\s,]+)/).map((text) => {
    const ingredients = recipe.ingredients.filter((ingredient) =>
      ingredient.name
        .split(' ')
        .map((i) => i.toLowerCase())
        .includes(text.toLowerCase()),
    );
    return { text, ingredients };
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
              trigger={
                <span
                  key={i}
                  className="cursor-pointer rounded border border-gray-5 bg-gray-4 px-1 py-0.5 font-medium leading-none text-gray-12 hover:border-gray-6 hover:bg-gray-5 active:bg-gray-6"
                >
                  {word.text}
                </span>
              }
            >
              <ul>
                {word.ingredients.map((ingredient) => (
                  <Ingredient key={ingredient.name} ingredient={ingredient} />
                ))}
              </ul>
            </Popover>
          );
        })}
      </p>
    </li>
  );
}
