import { Button } from '@/app/components';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const dialogClasses = cva(
  'relative w-full rounded-lg bg-gray-1 px-4 pt-5 pb-4 text-left shadow-xl sm:m-8 sm:p-6',
  {
    variants: {
      size: {
        xs: 'sm:max-w-xs',
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
        '4xl': 'sm:max-w-4xl',
        '5xl': 'sm:max-w-5xl',
        '6xl': 'sm:max-w-6xl',
        '7xl': 'sm:max-w-7xl',
        full: 'sm:max-w-full',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface Props extends VariantProps<typeof dialogClasses> {
  trigger: React.ReactNode;
  title?: string;
  confirmText?: string;
  children?: React.ReactNode;
  hidden?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

export default function AlertDialog({
  trigger,
  title,
  children,
  hidden,
  open,
  onOpenChange,
  size,
}: Props) {
  const [_open, _setOpen] = useState(false);

  const isOpen = () => {
    return open === undefined ? _open : open;
  };

  return (
    <DialogPrimitive.Root
      open={isOpen()}
      onOpenChange={(isOpen) => {
        onOpenChange !== undefined && onOpenChange(isOpen);
        _setOpen(isOpen);
      }}
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
              <div className="fixed inset-0 z-10 overflow-y-auto focus:outline-none">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <motion.div
                    className={dialogClasses({ size })}
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
                    <div className="absolute top-0 right-0 pt-2 pr-2">
                      <DialogPrimitive.Close asChild>
                        <Button icon={<XMarkIcon />} variant="subtle" color="gray" />
                      </DialogPrimitive.Close>
                    </div>
                    <DialogPrimitive.Title className="mb-4 text-lg font-medium leading-6 text-gray-12">
                      {title}
                    </DialogPrimitive.Title>
                    {children}
                    {/* <div className="mt-4 flex justify-end space-x-2">
                      <DialogPrimitive.Close asChild>
                        <Button variant="default">Cancel</Button>
                      </DialogPrimitive.Close>
                    </div> */}
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
