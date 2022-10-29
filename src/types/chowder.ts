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
  photo?: string;
};

export type Ingredient = {
  name: string;
  quantity?: number;
  unit?: string;
  note?: string;
};
