import { Recipe } from '@/types/chowder';
import {
  Bars4Icon,
  CalendarDaysIcon,
  HomeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Recipes', href: '/recipes', icon: Bars4Icon },
  { name: 'Meal Plan', href: '/meal-plan', icon: CalendarDaysIcon },
  { name: 'Groceries', href: '/groceries', icon: ShoppingCartIcon },
];

export const tags = [
  { name: 'Breakfast', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Sweets', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Salads', href: '#', bgColorClass: 'bg-yellow-500' },
  { name: 'Soups', href: '#', bgColorClass: 'bg-red-500' },
];

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Tuscan Chicken Skillet',
    description: 'Creamy, cheesy chicken and fettuccine',
    servings: 4,
    prepTime: 10,
    cookTime: 30,
    ingredients: [
      { name: 'Kosher salt and freshly ground black pepper' },
      { name: 'Fettuccine', quantity: 12, unit: 'ounce' },
      { name: 'Bacon', quantity: 4, unit: 'slice' },
      { name: 'Chicken Tenders', quantity: 1, unit: 'pound', note: 'cut into 1-inch pieces' },
      { name: 'Garlic', quantity: 2, unit: 'clove', note: 'minced' },
      { name: 'Plum Tomatoes', quantity: 4, note: 'chopped' },
      { name: 'Heavy Cream', quantity: 1, unit: 'cup' },
      { name: 'Baby Spinach', quantity: 5, unit: 'ounce' },
      { name: 'Grated Parmesan', quantity: 0.75, unit: 'cup' },
      { name: 'Fresh Basil', quantity: 3, unit: 'tablespoon', note: 'chopped' },
    ],
    directions: [
      'Bring a large pot of salted water to a boil. Cook the fettuccine according to package directions; drain.',
      'Meanwhile, put the bacon in a large, cold skillet, then cook over medium-high heat, stirring occasionally, until crispy, about 8 minutes; transfer to a plate with a slotted spoon',
      'Sprinkle the chicken lightly with salt and pepper and add to the skillet in a single layer. Let cook, undisturbed, until golden brown on the underside, 2 to 3 minutes. Continue to cook, stirring occasionally, until cooked through, about 4 minutes more. Transfer to the plate with the bacon.',
      'Reduce the heat to medium and add the garlic, stirring, until fragrant, about 30 seconds. Add the tomatoes and cream and bring to a simmer, then add the spinach and stir until just wilted. Add the bacon, chicken, fettuccine and Parmesan and toss with tongs until well coated; season to taste with salt and pepper. Sprinkle with basil and serve.',
    ],
    photos: [
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    ],
  },
  {
    id: '2',
    name: 'Baked Feta Pasta',
    description: 'Easy weeknight pasta dish that’s fuss free and flavorful',
    servings: 3,
    prepTime: 0,
    cookTime: 0,
    ingredients: [
      { name: 'Cherry or grape tomatoes', quantity: 2, unit: 'pint' },
      { name: 'Shallot', quantity: 1, note: 'quartered' },
      { name: 'Garlic', quantity: 3, unit: 'clove', note: 'smashed' },
      { name: 'Extra-virgin olive oil', quantity: 0.5, unit: 'cup', note: 'divided' },
      { name: 'Kosher salt' },
      { name: 'Pinch crushed red pepper flakes' },
      { name: 'Feta', quantity: 1, unit: '(8-oz.) block' },
      { name: 'Fresh Thyme', quantity: 3, unit: 'sprig' },
      { name: 'Pasta', quantity: 10, unit: 'ounce' },
      { name: 'Lemon', quantity: 1, note: 'zested (optional)' },
      { name: 'Fresh basil', note: 'for garnish' },
    ],
    directions: [
      'Preheat oven to 400°. In a large ovenproof skillet or medium baking dish, combine tomatoes, shallot, garlic, and all but 1 tablespoon oil. Season with salt and red pepper flakes and toss to combine',
      'Place feta into center of tomato mixture and drizzle with remaining 1 tablespoon oil. Scatter thyme sprigs over tomatoes. Bake for 40 to 45 minutes, until tomatoes are bursting and feta is golden on top.',
      'Meanwhile, in a large pot of boiling salted water, cook pasta until al dente according to package directions. Reserve ½ cup pasta water before draining.',
      'To skillet with tomatoes and feta, add cooked pasta, reserved pasta water, and lemon zest (if using) and stir until combined. Garnish with basil.',
    ],
    photos: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210212-feta-pasta-007-ab-1613747029.jpg?crop=0.668xw:1.00xh;0.138xw,0&resize=768:*',
    ],
  },
  {
    id: '3',
    name: 'Tuscan Chicken Skillet',
    description: 'Creamy, cheesy chicken and fettuccine',
    servings: 4,
    prepTime: 10,
    cookTime: 30,
    ingredients: [
      { name: 'Kosher salt and freshly ground black pepper' },
      { name: 'Fettuccine', quantity: 12, unit: 'ounce' },
      { name: 'Bacon', quantity: 4, unit: 'slice' },
      { name: 'Chicken Tenders', quantity: 1, unit: 'pound', note: 'cut into 1-inch pieces' },
      { name: 'Garlic', quantity: 2, unit: 'clove', note: 'minced' },
      { name: 'Plum Tomatoes', quantity: 4, note: 'chopped' },
      { name: 'Heavy Cream', quantity: 1, unit: 'cup' },
      { name: 'Baby Spinach', quantity: 5, unit: 'ounce' },
      { name: 'Grated Parmesan', quantity: 0.75, unit: 'cup' },
      { name: 'Fresh Basil', quantity: 3, unit: 'tablespoon', note: 'chopped' },
    ],
    directions: [
      'Bring a large pot of salted water to a boil. Cook the fettuccine according to package directions; drain.',
      'Meanwhile, put the bacon in a large, cold skillet, then cook over medium-high heat, stirring occasionally, until crispy, about 8 minutes; transfer to a plate with a slotted spoon',
      'Sprinkle the chicken lightly with salt and pepper and add to the skillet in a single layer. Let cook, undisturbed, until golden brown on the underside, 2 to 3 minutes. Continue to cook, stirring occasionally, until cooked through, about 4 minutes more. Transfer to the plate with the bacon.',
      'Reduce the heat to medium and add the garlic, stirring, until fragrant, about 30 seconds. Add the tomatoes and cream and bring to a simmer, then add the spinach and stir until just wilted. Add the bacon, chicken, fettuccine and Parmesan and toss with tongs until well coated; season to taste with salt and pepper. Sprinkle with basil and serve.',
    ],
    photos: [
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    ],
  },
];
