import { FC } from 'react';
import cn from 'classnames';

import VerticalPhotoStyles from './VerticalPhoto.module.css';

type Props = {
  src: string;
  children: JSX.Element;
  photoDescription: string;
};

const VerticalPhoto: FC<Props> = ({ src, children, photoDescription }) => {
  return (
    <div className={cn(VerticalPhotoStyles.vertical_photo_and_text, 'mb-2')}>
      <div className="text-box">
        <div className="image-description-paragraph">{children}</div>
      </div>
      <figure className={VerticalPhotoStyles.image_box}>
        <img
          className={cn(
            VerticalPhotoStyles.image_for_text,
            'reversed-shadow box-radius'
          )}
          src={src}
          alt=""
        />
        <figcaption className="caption text-type-caption">
          {photoDescription}
        </figcaption>
      </figure>
    </div>
  );
};

export { VerticalPhoto };
