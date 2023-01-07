import React, { FC } from 'react';
import cn from 'classnames';

import SvgStyles from './fire-icon.module.css';

type Props = {
  className?: string;
};

const Fire: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 70 122"
      className={cn(SvgStyles.svg, SvgStyles.svg_fire, className)}
    >
      <path
        stroke="var(--accent-color)"
        strokeWidth="3"
        strokeLinecap="round"
        d="M49.0006 120.28c5.7935-.975 15.1079-11.78 15.1079-22.0085 0-29.2715-25.5439-48.7101-21.367-71.6829C26.6116 35.4906 20.5006 53.0953 20.5006 70.5c0 4.5 1.5405 13.4505 1.064 13.1782-5.2324-2.9899-9.7662-12.7934-10.0774-18.396-.0739-1.3306-4.03704 5.2191-5.48663 9.2178-3.58771 9.8966-4.98325 20.8222-3.00053 31 1.50006 7.7 6.81504 14.78 14.90436 14.78 7.5956 0 1-12.509 13.5956-22.0085C31 103.771 30.5 113.186 36 115c2.5-5.814 6.3392-9.836 6.3392-9.836C45 108 47 111.5 46 116"
      />
      <path
        stroke="var(--accent-color)"
        strokeWidth="3"
        strokeLinecap="round"
        d="M41.0044 62C42.5 69 49 76 51 90M64.0005 48.5c3.4995-3 3.9192-8.171 4.4995-9M8 45c-1.09542-2.6633-3.07853-8.1857-4-10M25.1318 1.69226l2.6577 11.24114"
      />
    </svg>
  );
};

export { Fire };
