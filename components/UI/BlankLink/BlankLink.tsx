import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

type Props = {
  path: string;
  className?: string | Array<string>;
};

const BlankLink: FC<PropsWithChildren<Props>> = ({
  path,
  className,
  children,
}) => {
  return (
    <a href={path} className={cn(className)} target="_blank">
      {children}
    </a>
  );
};

export { BlankLink };
