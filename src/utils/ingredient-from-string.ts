import { Ingredient } from '@/types/chowder';
import { parseIngredient, UnitOfMeasureDefinitions, unitsOfMeasure } from 'parse-ingredient';

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
): Ingredient | null {
  const ing = parseIngredient(ingredientString, { additionalUOMs })[0];

  if (ing === undefined) {
    return null;
  }

  const ingredient: Ingredient = {
    name: ing.description,
    quantity: ing.quantity || ing.quantity2 || undefined,
    unit: ing.unitOfMeasureID || ing.unitOfMeasure || undefined,
    note,
  };

  return ingredient;
}

export const getShortUnit = (unitOfMeasureID: string): string | undefined => {
  return allUnitsOfMeasure[unitOfMeasureID]?.short;
};

export const getPluralUnit = (unitOfMeasureID: string): string | undefined => {
  return allUnitsOfMeasure[unitOfMeasureID]?.plural;
};
