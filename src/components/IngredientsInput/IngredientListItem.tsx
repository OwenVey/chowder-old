import { Ingredient } from '@/types/chowder';
import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { Bars3Icon, TrashIcon } from '@heroicons/react/20/solid';
import { forwardRef, LiHTMLAttributes } from 'react';
import Button from '../Button';
import { default as IngredientComponent } from '../RecipeId/Ingredient';

interface Props extends LiHTMLAttributes<HTMLDivElement> {
  ingredient: Ingredient;
  attributes?: DraggableAttributes;
  listeners?: SyntheticListenerMap | undefined;
}

export const IngredientListItem = forwardRef<HTMLDivElement, Props>(
  ({ ingredient, attributes, listeners, ...restProps }, ref) => {
    return (
      <div
        ref={ref}
        {...restProps}
        className="flex items-center justify-between rounded-lg bg-gray-1 px-2 py-1 text-sm"
      >
        <IngredientComponent ingredient={ingredient} />

        <div className="flex items-center">
          <Button icon={<TrashIcon />} variant="subtle" color="gray" size="sm" />
          <Button
            {...attributes}
            {...listeners}
            icon={<Bars3Icon />}
            variant="subtle"
            color="gray"
            size="sm"
          />
        </div>
      </div>
    );
  },
);

export default IngredientListItem;
