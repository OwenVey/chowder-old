import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [modifierKey, setModifierKey] = useState('');

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ');
  }, []);

  return (
    <>
      <button
        type="button"
        className="group flex h-6 w-6 items-center justify-center bg-gray-1 sm:h-auto sm:w-80 sm:flex-none sm:rounded-lg sm:border sm:border-gray-7 sm:py-2.5 sm:pl-4 sm:pr-3.5 sm:text-sm sm:ring-gray-7 sm:hover:border-gray-8 lg:w-full"
        onClick={onOpen}
      >
        <MagnifyingGlassIcon className="h-6 w-6 flex-none text-gray-9 group-hover:text-gray-10 sm:h-5 sm:w-5" />
        <span className="sr-only sm:not-sr-only sm:ml-2 sm:text-gray-10">Search recipes</span>
        {modifierKey && (
          <kbd className="ml-auto hidden font-medium text-gray-9 sm:block">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        )}
      </button>

      {/* {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl)
              },
            }}
          />,
          document.body
        )} */}
    </>
  );
}
