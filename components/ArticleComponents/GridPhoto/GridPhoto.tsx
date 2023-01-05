import React, { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import GridPhotoStyles from './GridPhoto.module.css';

type Props = {
  src: string;
  alt: string;
};

const GridPhoto: FC<PropsWithChildren<Props>> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 760px) 310px,
                (max-width: 1080px) 540px,
                780px"
      width={40}
      height={40}
      className={cn(GridPhotoStyles.grid_image, 'box-radius')}
    />
  );
};

export { GridPhoto };
