import { PhotoIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useEffect, useId, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  name?: string;
  controlled?: boolean;
  label?: string;
  labelNote?: string;
  description?: string;
  showAsterisk?: boolean;
  error?: string;
  onChange?: (file: File) => void;
}

type PreviewFile = File & { preview: string };

export default function FileInput({
  label,
  labelNote,
  description,
  showAsterisk,
  error,
  onChange,
}: Props) {
  const id = useId();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const acceptedFile = acceptedFiles[0];

      if (acceptedFile) {
        const previewFile = Object.assign(acceptedFile, {
          preview: URL.createObjectURL(acceptedFile),
        });

        setPreviewFile(previewFile);
        onChange && onChange(acceptedFile);
      }
    },
    [onChange],
  );

  const [previewFile, setPreviewFile] = useState<PreviewFile | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': [],
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      previewFile && URL.revokeObjectURL(previewFile.preview);
    };
  }, [previewFile]);

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={clsx('block select-none space-x-1 text-sm', !description && 'mb-1')}
        >
          <span className="font-medium text-gray-11">{label}</span>
          {labelNote && <span className="italic text-gray-9">{labelNote}</span>}
          {showAsterisk && <span className="text-red-9">*</span>}
        </label>
      )}

      {previewFile ? (
        <button
          onClick={() => setPreviewFile(null)}
          type="button"
          className="group relative block overflow-hidden rounded-lg bg-gray-5"
        >
          <div className="absolute inset-0 hidden items-center justify-center bg-gray-4/25 group-hover:flex">
            <XMarkIcon className="h-6 w-6 rounded-full bg-gray-11 p-1 text-white" />
          </div>
          <Image
            className="h-44 w-44 object-cover"
            alt="Image of recipe"
            src={previewFile.preview}
            height={176}
            width={176}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(previewFile.preview);
            }}
          />
        </button>
      ) : (
        <div
          {...getRootProps()}
          className={clsx(
            'flex h-44 w-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white shadow-sm hover:border-gray-8 hover:bg-gray-1 focus:outline-none focus-visible:border-primary-9 dark:bg-gray-1 dark:hover:bg-gray-2',
            isDragActive ? 'border-primary-9' : 'border-gray-7',
            error && 'border-red-7 hover:border-red-8',
          )}
        >
          <input id={id} {...getInputProps()} />
          <PhotoIcon
            className={clsx(
              'h-10 w-10 opacity-60',
              isDragActive ? 'text-primary-9' : 'text-gray-8',
            )}
          />
          <span className={clsx('mt-2', isDragActive ? 'text-primary-9' : 'text-gray-11')}>
            Select a photo
          </span>
          <span className="text-sm text-gray-9">or drag and drop here</span>
        </div>
      )}
      {/* Error Message */}
      {error && <p className="mt-1 text-xs text-red-9">{error}</p>}
    </div>
  );
}
