import type { NewIngredient } from '@/types/chowder';
import type { UnitOfMeasureDefinitions} from 'parse-ingredient';
import { parseIngredient, unitsOfMeasure } from 'parse-ingredient';

const additionalUOMs: UnitOfMeasureDefinitions = {
  slice: {
    short: 'slice',
    plural: 'slices',
    alternates: [],
  },
};

export const allUnitsOfMeasure = {
  ...unitsOfMeasure,
  ...additionalUOMs,
};

export default function ingredientFromString(
  ingredientString: string,
  note?: string,
): NewIngredient | null {
  const ing = parseIngredient(ingredientString, { additionalUOMs })[0];

  if (ing === undefined) {
    return null;
  }

  const ingredient: NewIngredient = {
    name: ing.description,
    quantity: ing.quantity || ing.quantity2 || null,
    unit: ing.unitOfMeasureID || ing.unitOfMeasure || null,
    note: note || null,
  };

  return ingredient;
}

export const getShortUnit = (unitOfMeasureID: string): string | undefined => {
  return allUnitsOfMeasure[unitOfMeasureID]?.short;
};

export const getPluralUnit = (unitOfMeasureID: string): string | undefined => {
  return allUnitsOfMeasure[unitOfMeasureID]?.plural;
};
