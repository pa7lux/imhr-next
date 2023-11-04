import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import BlockStyles from './LargeBlock.module.css';

type Props = {
  className?: string;
};

const LargeBlock: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <div className={cn(BlockStyles.block_large, className)}>{children}</div>
  );
};

export { LargeBlock };
