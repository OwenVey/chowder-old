import { Button } from '@/app/components';
import { DocumentPlusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function RecipesPage() {
  return (
    <div className="hidden h-full flex-col items-center justify-center px-6 text-center sm:flex">
      <div className="mx-auto flex rounded-full bg-gray-3 p-3">
        <DocumentPlusIcon className="h-8 w-8 text-gray-11" />
      </div>
      <h3 className="mt-3 text-sm font-medium text-gray-12">No recipe selected</h3>
      <p className="mt-1 text-sm text-gray-11">
        Select a recipe to the left or click the button below to create a new one.
      </p>
      <div className="mt-6">
        <Button leftIcon={<PlusIcon />}>New Recipe</Button>
      </div>
    </div>
  );
}
