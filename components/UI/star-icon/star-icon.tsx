import React, { FC } from 'react';
import cn from 'classnames';

import SvgStyles from './star-icon.module.css';

type Props = {
  className?: string;
};

const Star: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="87"
      height="99"
      fill="none"
      className={cn(SvgStyles.svg, SvgStyles.svg_star, className)}
    >
      <path
        stroke="var(--accent-color)"
        strokeLinecap="round"
        strokeWidth="3"
        d="M76 76c-1.7105-7.7654-6.6596-21.5432-9.6976-29.0001-6.4688-15.878-10.8154-25.3556-19.2882-40.18295-.1909-.33401-2.4508-4.76326-2.6927-4.817-2.7429-.60954-11.4387 40.77895-11.822 43.49995-2.0804 14.771-4.0044 36.5545-2.7894 51.3061.0342.4155 13.4785-15.6216 17.3041-20.806C55.5 64.5 69 46.9999 84.5 33.5c1.3594-1.184-21.5-2.5-38.5-6-19.5739-4.0299-34-6.0001-42.00048-6.0001-1.73766 0-2.89863 1.0086-1.27665 3.094C7.59364 30.8564 13.1776 35.6096 19 41c6.187 5.728 14.2293 12.446 21.5 18 10.3817 7.9304 24 16 37 23"
      />
    </svg>
  );
};

export { Star };
