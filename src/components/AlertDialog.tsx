import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  trigger: React.ReactNode;
  title: string;
  description: string;
};

export default function AlertDialog({ trigger, title, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>

      <AnimatePresence>
        {open ? (
          <AlertDialogPrimitive.Portal forceMount>
            <AlertDialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-20 bg-gray-8/50"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { ease: 'easeOut', duration: 0.3 },
                }}
                exit={{ opacity: 0, transition: { ease: 'easeIn', duration: 0.2 } }}
              />
            </AlertDialogPrimitive.Overlay>
            <AlertDialogPrimitive.Content asChild>
              <motion.div
                className="fixed bottom-0 z-50 m-4 rounded-lg border border-gray-6 bg-gray-1 p-8 shadow-2xl sm:left-1/2 sm:bottom-auto sm:top-1/2 sm:m-0 sm:w-full sm:max-w-md sm:!-translate-x-1/2 sm:!-translate-y-1/2"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { ease: 'easeOut', duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { ease: 'easeIn', duration: 0.1 },
                }}
              >
                <AlertDialogPrimitive.Title className="font-medium text-gray-12">
                  {title}
                </AlertDialogPrimitive.Title>
                <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-11">
                  {description}
                </AlertDialogPrimitive.Description>
                <div className="mt-4 flex justify-end space-x-2">
                  <AlertDialogPrimitive.Cancel className="inline-flex select-none justify-center rounded-md border border-gray-7 bg-white px-4 py-2 text-sm font-medium text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6">
                    Cancel
                  </AlertDialogPrimitive.Cancel>
                  <AlertDialogPrimitive.Action className="inline-flex select-none justify-center rounded-md border border-transparent bg-primary-9 px-4 py-2 text-sm font-medium text-white hover:bg-primary-10">
                    Confirm
                  </AlertDialogPrimitive.Action>
                </div>
              </motion.div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </AlertDialogPrimitive.Root>
  );
}
