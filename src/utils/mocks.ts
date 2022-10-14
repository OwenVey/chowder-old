import { Bars4Icon, HomeIcon } from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Recipes', href: '/recipes', icon: Bars4Icon },
];

export const tags = [
  { name: 'Breakfast', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Sweets', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Salads', href: '#', bgColorClass: 'bg-yellow-500' },
  { name: 'Soups', href: '#', bgColorClass: 'bg-red-500' },
];
