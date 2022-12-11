import { FC } from 'react';
import cn from 'classnames';

import HorizontalStyles from './HorizontalPhoto.module.css';

type Props = {
  src: string;
  children: JSX.Element;
  photoDescription: string;
};

const HorizontalPhoto: FC<Props> = ({ src, children, photoDescription }) => {
  return (
    <div className={cn(HorizontalStyles.horizontal_photo_and_text, 'mb-2')}>
      <div className="text-box">
        <p className="image-description-paragraph text-type-p">{children}</p>
      </div>
      <figure className={HorizontalStyles.image_box}>
        <img
          className={cn(
            HorizontalStyles.image_for_text,
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

export { HorizontalPhoto };
