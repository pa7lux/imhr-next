import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import AuthorStyles from '../AuthorCard/AuthorCard.module.css';
import useIsChild from '../../../lib/hooks/useIsChild';

const LinkListItem: FC<PropsWithChildren> = ({ children }) => {
  const { isChild, ref } = useIsChild<HTMLLIElement>(
    AuthorStyles.author_content
  );

  return (
    <li
      ref={ref}
      className={cn({
        [AuthorStyles.author_media]: isChild,
      })}
    >
      {children}
    </li>
  );
};

export { LinkListItem };
