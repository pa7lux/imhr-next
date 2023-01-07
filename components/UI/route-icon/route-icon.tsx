import React, { FC } from 'react';
import cn from 'classnames';

import SvgStyles from './route-icon.module.css';

type Props = {
  className?: string;
};

const Route: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 140 147"
      className={cn(SvgStyles.svg, SvgStyles.svg_route, className)}
    >
      <path
        stroke="var(--accent-color)"
        strokeWidth="3"
        strokeLinecap="round"
        d="M81.6885 145.5c8.5-10.5 7.9011-26.339 6.765-33.399-.962-5.979-3.4199-12.1823-4.765-18.101-2.5-11-1.3267-23.6176 8-31.308 6.875-5.6689 19.2325-6.2925 22.9995 1.808 3.819 8.2091-5.246 17.9623-12 21.5-4.035 2.1138-10.1331 3.0002-14.7406 3.1993-7.0457.3045-14.5677-2.6241-20.2589-6.1993-9.1172-5.7274-15.5-17.5-13.7768-31.0628C56.2341 33.6587 70.6885 21.5618 87.9474 19.5 115.27 16.2359 141.859 35.1793 137.23 62.692c-2.832 16.8266-11.556 29.8241-24.578 40.742-13.1803 11.049-34.4941 18.976-51.7497 15.879C25.1885 115.5 3.38692 87.8541 2.03578 55.7646 1.13501 34.3713 17.3614 13.8121 37.2735 7.5896"
      />
      <path
        stroke="var(--accent-color)"
        strokeWidth="3"
        strokeLinecap="round"
        d="M33.6885 22.5c0-4.8653 4.0189-11.2513 6-15.5.3865-.82905-14.4346-4.47961-21-5.5"
      />
    </svg>
  );
};

export { Route };
