import { Ingredient } from '@/types/chowder';
import numberToFraction from '@/utils/number-to-fraction';

type Props = {
  ingredient: Ingredient;
};

export default function ingredient({ ingredient }: Props) {
  return (
    <div>
      {/* quantity */}
      {ingredient.quantity && (
        <span className="font-bold diagonal-fractions text-primary-10">
          {numberToFraction(ingredient.quantity)}{' '}
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
    </div>
  );
}
