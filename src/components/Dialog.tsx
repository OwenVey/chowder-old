import { Button } from '@/components';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  confirmText?: string;
  children?: React.ReactNode;
  hidden?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
};

export default function AlertDialog({
  trigger,
  title,
  description,
  children,
  hidden,
  open,
  onOpenChange,
}: Props) {
  const [_open, _setOpen] = useState(false);

  const isOpen = () => {
    return open === undefined ? _open : open;
  };

  return (
    <DialogPrimitive.Root
      open={isOpen()}
      onOpenChange={onOpenChange === undefined ? _setOpen : onOpenChange}
    >
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <AnimatePresence>
        {isOpen() ? (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-10 bg-gray-8/50"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { ease: 'easeOut', duration: 0.3 },
                }}
                exit={{ opacity: 0, transition: { ease: 'easeIn', duration: 0.2 } }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild hidden={hidden}>
              <div className="fixed inset-0 z-10 overflow-y-auto">
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
                    <DialogPrimitive.Title className="font-medium text-gray-12">
                      {title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-11">
                      {description}
                    </DialogPrimitive.Description>
                    {children}
                    <div className="mt-4 flex justify-end space-x-2">
                      <DialogPrimitive.Close asChild>
                        <Button variant="default">Cancel</Button>
                      </DialogPrimitive.Close>
                    </div>
                  </motion.div>
                </div>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
