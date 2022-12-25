import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import ItemStyles from './LinkListItem.module.css';

const LinkListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className={cn(ItemStyles.item)}>{children}</li>;
};

export { LinkListItem };
