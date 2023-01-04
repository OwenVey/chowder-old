import { Button, Dropdown, DropdownItem } from '@/app/components';
import { getServerAuthSession } from '@/server/common/get-server-auth-session';
import { prisma } from '@/server/db/client';
import {
  ChevronDownIcon,
  FunnelIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import RecipeCardList from './RecipeCardList';
// import { useSearchParams } from 'next/navigation';

async function getRecipes() {
  console.log('----------------- getRecipes -----------------');

  const session = await getServerAuthSession();
  const recipes = await prisma.recipe.findMany({
    where: {
      userId: session?.user?.id,
    },
    include: {
      ingredients: true,
    },
  });
  return recipes;
}

type Props = {
  children: React.ReactNode;
  params: { id: string };
};

export default async function RecipesLayout(props: Props) {
  // const searchParams = useSearchParams();
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  const recipes = await getRecipes();

  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      {/* Start first column (hidden on smaller screens) */}
      <aside
        className={clsx(
          'flex w-full flex-shrink-0 flex-col border-r border-gray-6 sm:w-96',
          true ? 'hidden sm:flex' : '',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-6 bg-gray-3 px-4">
          <div>
            <h1 className="font-medium text-gray-12">Recipes</h1>
            <div className="text-sm text-gray-11">{recipes?.length} Recipes</div>
          </div>
          <div className="flex items-center gap-3">
            <Button icon={<MagnifyingGlassIcon />} variant="subtle" color="gray" tooltip="Search" />
            <Button icon={<FunnelIcon />} variant="subtle" color="gray" tooltip="Filter" />

            <Dropdown
              // hidden={isDialogOpen}
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
              {/* <NewRecipeModal
                // open={isDialogOpen}
                // onOpenChange={setIsDialogOpen}
                trigger={
                  <DropdownItem
                    onSelect={(event) => event.preventDefault()}
                    icon={<PencilSquareIcon />}
                  >
                    Create New
                  </DropdownItem>
                }
              /> */}

              <DropdownItem icon={<GlobeAltIcon />}>Import from URL</DropdownItem>
            </Dropdown>
          </div>
        </div>

        <RecipeCardList recipes={recipes} />
      </aside>
      {/* End first column */}
      {/* Start second column*/}
      <main className={clsx('flex min-w-0 flex-1 flex-col')}>{props.children}</main>
      {/* End second column */}
    </div>
  );
}
