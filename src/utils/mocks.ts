import { Bars4Icon, CalendarDaysIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Recipes', href: '/', icon: Bars4Icon },
  { name: 'Meal Plan', href: '/meal-plan', icon: CalendarDaysIcon },
  { name: 'Groceries', href: '/groceries', icon: ShoppingCartIcon },
];

export const tags = [
  { name: 'Breakfast', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Sweets', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Salads', href: '#', bgColorClass: 'bg-yellow-500' },
  { name: 'Soups', href: '#', bgColorClass: 'bg-red-500' },
];
