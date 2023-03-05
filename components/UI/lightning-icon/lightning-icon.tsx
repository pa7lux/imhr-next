import React, { FC } from 'react';
import cn from 'classnames';

import SvgStyles from './lightning-icon.module.css';

type Props = {
  className?: string;
};

const Lightning: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="87"
      height="133"
      fill="none"
      stroke="var(--accent-color)"
      className={cn(SvgStyles.svg, SvgStyles.svg_lightning)}
    >
      <path
        stroke="var(--accent-color)"
        strokeLinecap="round"
        strokeWidth="3"
        d="M60.4995 4.84924c.9931.49659-30.0191 44.18216-32.1773 47.74476-3.891 6.4234-16.3223 26.2552-16.7759 33.8181-.4027 6.7149 40.4532-16.0629 34.3127-6.8853-4.9684 9.9367-7.3857 22.5342-8.5972 33.4372-.4884 4.396-.3865 8.916-1.1793 13.277-.396 2.178-1.624 5.019.7608 1.293 9.7329-15.208 16.1362-32.514 25.2971-48.1213 6.1941-10.553 13.5452-19.73 20.4278-29.7098 1.4505-2.1032 4.1748-5.5004 2.1683-5.2496-6.1528.7691-13.6982 2.8358-19.8572 4.4127-6.382 1.6341-13.6633 3.9057-19.4768 7.2278-1.4985.8562 4.0116-7.4885 6.597-15.2446 4.5-13.5 6.0325-25.5 10.8256-38.8492M47.0766 131.414c4.9233-1.065 11.3072-8.825 12.211-9.814 4.3349-4.744 8.8802-9.771 14.1511-13.505m-50.2735 20.004c-2.6653-2.75-1.1653-4.565-9.5862-16.434m-2.5399 13.629c-1-3-8.12424-4.682-9.0391-5.445"
      />
    </svg>
  );
};

export { Lightning };