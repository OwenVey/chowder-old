import { Button, Dialog, Dropdown, DropdownItem } from '@/components';
import { RecipeCard } from '@/components/Recipie';
import { recipes } from '@/utils/mocks';
import { ChevronDownIcon, GlobeAltIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import {
  DocumentPlusIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

function RecipesLayout({ children }: Props) {
  const { query } = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      {/* Start first column (hidden on smaller screens) */}
      <aside
        className={clsx(
          'flex w-full flex-shrink-0 flex-col border-r border-gray-6 sm:w-96',
          query.id ? 'hidden sm:flex' : '',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-6 bg-gray-3 px-4">
          <div>
            <h1 className="font-medium text-gray-12">Recipes</h1>
            <div className="text-sm text-gray-11">5 Recipes</div>
          </div>
          <div className="flex items-center gap-3">
            <Button icon={<MagnifyingGlassIcon />} variant="subtle" color="gray" tooltip="Search" />
            <Button icon={<FunnelIcon />} variant="subtle" color="gray" tooltip="Filter" />

            <Dropdown
              hidden={isDialogOpen}
              trigger={
                <Button
                  icon={<PlusIcon />}
                  rightIcon={<ChevronDownIcon className="!m-0 h-4 w-4" />}
                  variant="subtle"
                  color="gray"
                  tooltip="Add new"
                />
              }
            >
              <Dialog
                onOpenChange={setIsDialogOpen}
                trigger={
                  <DropdownItem
                    onSelect={(event) => event.preventDefault()}
                    icon={<PencilSquareIcon />}
                  >
                    Create New
                  </DropdownItem>
                }
              >
                test
              </Dialog>
              <DropdownItem icon={<GlobeAltIcon />}>Import from URL</DropdownItem>
            </Dropdown>
          </div>
        </div>
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isActive={query.id === recipe.id} />
          ))}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isActive={query.id === recipe.id} />
          ))}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isActive={query.id === recipe.id} />
          ))}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isActive={query.id === recipe.id} />
          ))}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isActive={query.id === recipe.id} />
          ))}
        </div>
      </aside>
      {/* End first column */}

      {/* Start second column*/}
      <main className={clsx('flex min-w-0 flex-1 flex-col')}>{children}</main>
      {/* End second column */}
    </div>
  );
}

export default function DefaultRecipePage() {
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

export const RecipesPageLayout = (page: React.ReactElement) => (
  <RecipesLayout>{page}</RecipesLayout>
);

DefaultRecipePage.getLayout = RecipesPageLayout;
