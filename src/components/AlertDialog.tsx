import { Button } from '@/components';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type AlertDialogVariant = 'primary' | 'warning' | 'danger' | 'success' | 'info';

type Props = {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  confirmText?: string;
  variant?: AlertDialogVariant;
};

const variantToColor: Record<AlertDialogVariant, 'primary' | 'yellow' | 'red' | 'green' | 'blue'> =
  {
    primary: 'primary',
    warning: 'yellow',
    danger: 'red',
    success: 'green',
    info: 'blue',
  };

export default function AlertDialog({
  trigger,
  title,
  description,
  confirmText = 'Confirm',
  variant = 'primary',
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>

      <AnimatePresence>
        {open ? (
          <AlertDialogPrimitive.Portal forceMount>
            <AlertDialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-10 bg-gray-8/50"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { ease: 'easeOut', duration: 0.3 },
                }}
                exit={{ opacity: 0, transition: { ease: 'easeIn', duration: 0.2 } }}
              />
            </AlertDialogPrimitive.Overlay>
            <AlertDialogPrimitive.Content asChild>
              <div className="fixed inset-0 z-10 overflow-y-auto focus:outline-none">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <motion.div
                    className="w-full rounded-lg bg-gray-1 px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:max-w-md sm:p-6"
                    initial={{
                      y: 16,
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { ease: 'easeInOut', duration: 0.2 },
                    }}
                    exit={{
                      y: 16,
                      opacity: 0,
                      scale: 0.95,
                      transition: { ease: 'easeIn', duration: 0.1 },
                    }}
                  >
                    <AlertDialogPrimitive.Title className="text-lg font-medium leading-6 text-gray-12">
                      {title}
                    </AlertDialogPrimitive.Title>
                    <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-11">
                      {description}
                    </AlertDialogPrimitive.Description>
                    <div className="mt-4 flex justify-end space-x-2">
                      <AlertDialogPrimitive.Cancel asChild>
                        <Button variant="default">Cancel</Button>
                      </AlertDialogPrimitive.Cancel>
                      <AlertDialogPrimitive.Action asChild>
                        <Button color={variantToColor[variant]}>{confirmText}</Button>
                      </AlertDialogPrimitive.Action>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </AlertDialogPrimitive.Root>
  );
}
