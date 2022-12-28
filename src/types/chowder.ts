import type { Ingredient, Prisma } from '@prisma/client';

export type RecipeWithIngredients = Prisma.RecipeGetPayload<{
  include: { ingredients: true };
}>;

export type NewIngredient = Omit<Ingredient, 'id' | 'recipeId'>;
