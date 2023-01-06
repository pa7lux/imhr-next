import { FC } from 'react';
import cn from 'classnames';
import { Children, cloneElement } from 'react';

import ImageGridStyles from './ImageGrid.module.css';

type Props = {
  children: JSX.Element[];
};

const ImageGrid: FC<Props> = ({ children }) => {
  return (
    <ul className={cn(ImageGridStyles.image_grid, 'mt-2')}>
      {Children.map(children, (child, i) => {
        return (
          <li className={cn(ImageGridStyles.image_grid_item)} key={i}>
            {cloneElement(child)}
          </li>
        );
      })}
    </ul>
  );
};

export { ImageGrid };
