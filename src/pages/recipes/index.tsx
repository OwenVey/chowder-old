import { FunnelIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Dropdown, DropdownItem, IconButton } from '@/components';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/utils/mocks';
import React from 'react';
import { useRouter } from 'next/router';
import { PencilSquareIcon, GlobeAltIcon } from '@heroicons/react/20/solid';

type Props = {
  children: React.ReactNode;
};

function RecipesLayout({ children }: Props) {
  const { query } = useRouter();

  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      {/* Start first column (hidden on smaller screens) */}
      <aside className="flex w-full flex-shrink-0 flex-col overflow-y-auto border-r border-gray-6 sm:w-96">
        <div className="flex h-16 items-center justify-between border-b border-gray-6 bg-gray-3 px-4">
          <div>
            <h1 className="font-medium text-gray-12">Recipes</h1>
            <div className="text-sm text-gray-11">5 Recipes</div>
          </div>
          <div className="flex items-center gap-3">
            <IconButton icon={<MagnifyingGlassIcon />} tooltip="Search" />
            <IconButton icon={<FunnelIcon />} tooltip="Filter" />

            <Dropdown trigger={<IconButton showDownArrow icon={<PlusIcon />} tooltip="Add new" />}>
              <DropdownItem icon={<PencilSquareIcon />}>Create New</DropdownItem>
              <DropdownItem icon={<GlobeAltIcon />}>Import from URL</DropdownItem>
            </Dropdown>
          </div>
        </div>
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isActive={query.id === recipe.id} />
          ))}
        </div>
      </aside>
      {/* End first column */}

      {/* Start second column*/}
      <main className="relative z-0 hidden flex-1 overflow-y-auto focus:outline-none sm:block">
        {children}
      </main>
      {/* End second column */}
    </div>
  );
}

export default function DefaultRecipePage() {
  return (
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>
    </div>
  );
}

export const RecipesPageLayout = (page: React.ReactElement) => (
  <RecipesLayout>{page}</RecipesLayout>
);

DefaultRecipePage.getLayout = RecipesPageLayout;
