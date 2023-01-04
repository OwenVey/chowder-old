'use client';

import type { RecipeWithIngredients } from '@/types/chowder';
import { useSelectedLayoutSegment } from 'next/navigation';
import RecipeCard from './RecipeCard';

type Props = {
  recipes: RecipeWithIngredients[];
};

export default function RecipeCardList({ recipes }: Props) {
  const segment = useSelectedLayoutSegment();

  if (recipes.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} isActive={segment === recipe.id} />
      ))}
    </div>
  );
}
