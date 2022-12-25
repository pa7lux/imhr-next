import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import AuthorStyles from '../AuthorCard/AuthorCard.module.css';

const LinkList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul
      style={{ listStyle: 'none' }}
      className={cn(AuthorStyles.author_links, 'mt-1')}
    >
      {children}
    </ul>
  );
};

export { LinkList };
