import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

import { MdCancel } from 'react-icons/md';

type ImageThumbnailProps = {
  files: File[];
  deleteFileHandler: (fileName: string) => void;
};

export default function ImageThumbnail({ files, deleteFileHandler }: ImageThumbnailProps) {
  return files.map((file) => (
    <div className="w-[120px] h-[120px] bg-white rounded-[10px] border border-neutral-400 relative">
      <MdCancel
        color="#D9D9D9"
        onClick={() => deleteFileHandler(file.name)}
        className="cursor-grabbing absolute top-1 right-1"
      />
      <Image
        width={120}
        height={120}
        className="rounded-[10px]"
        src={URL.createObjectURL(file)}
        alt={file.name}
        placeholder="blur"
        blurDataURL={URL.createObjectURL(file)}
      />
    </div>
  ));
}
