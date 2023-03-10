import { FC } from 'react';
import classNames from 'classnames/bind';

import HeadingStyles from './HeadingCustomSubtitle.module.css';

type Props = {
  photoLeft: boolean;
  subtitle: string;
  title: string;
  img: string;
  theme: 'theme-purple' | 'theme-turquoise' | 'theme-green' | 'theme-blue';
};

let cx = classNames.bind(HeadingStyles);

const HeadingCustomSubtitle: FC<Props> = ({
  photoLeft = false,
  subtitle,
  title,
  img,
}) => {
  return (
    <section
      className={cx({
        article_cover_two_columns: !photoLeft,
        article_cover_two_columns__reversed: photoLeft,
      })}
    >
      <div className={cx(HeadingStyles.heading_box)}>
        <h1 className={cx(HeadingStyles.heading_large, 'text-type-h1')}>
          {title}
        </h1>
        <p className={cx(HeadingStyles.subheading, 'text-type-p', 'mt-1')}>
          {subtitle}
        </p>
      </div>
      <img
        className={cx(HeadingStyles.cover_image, 'box-radius')}
        src={img}
        alt=""
      />
    </section>
  );
};

export { HeadingCustomSubtitle };
