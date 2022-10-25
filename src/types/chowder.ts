export type Recipe = {
  id: string;
  name: string;
  link?: string;
  description?: string;
  servings: number;
  prepTime: number;
  cookTime: number;
  ingredients: Ingredient[];
  directions: string[];
  notes?: string;
  nutrition?: string;
  photos: string[];
};

export type Ingredient = {
  id: string;
  name: string;
  quantity?: number;
  unit?: string;
  note?: string;
};
