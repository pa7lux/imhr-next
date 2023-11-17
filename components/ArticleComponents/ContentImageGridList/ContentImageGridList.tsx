import { FC } from 'react';
import cn from 'classnames';
import { Children, cloneElement } from 'react';

import styles from './ContentImageGridList.module.css';

type Props = {
  children: JSX.Element[];
  className?: string;
};

const ContentImageGridList: FC<Props> = ({ children, className }) => {
  return (
    <ul className={cn(styles.image_grid, className)}>
      {Children.map(children, (child, i) => {
        return (
          <li className={cn(styles.image_grid_item)} key={i}>
            {cloneElement(child)}
          </li>
        );
      })}
    </ul>
  );
};

export { ContentImageGridList };
