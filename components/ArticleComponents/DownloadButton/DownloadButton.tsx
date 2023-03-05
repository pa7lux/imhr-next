import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import ButtonStyles from './DownloadButton.module.css';

const DownloadButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className={cn(ButtonStyles['download-button'])}>
      {children}
      <svg
        className={cn(ButtonStyles['download-button__icon'])}
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        viewBox="0 0 512 512"
      >
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M161.2799997 328.32c-12.070167-7.360918-26.321977-10.301768-40.32-8.32H85.333333v128h28.3733333v-48.853333h12.16c12.5971445 1.294244 25.2552653-1.79494 35.84-8.746667 8.9843558-7.706155 13.9379484-19.10728 13.44-30.933333.6651571-12.009827-4.496841-23.604469-13.8666666-31.146667Zm-22.8266667 46.72c-5.3591133 2.358948-11.2512949 3.242775-17.0666667 2.56h-8.32v-36.266666h8.32c6.0414627-.642157 12.1364335.547105 17.4933334 3.413333 4.9889138 3.474646 7.8160025 9.290371 7.4666666 15.36.64629 6.118965-2.473284 12.020862-7.8933333 14.933333ZM236.16 320h-35.413334v128h33.92c17.286758 1.691497 34.694376-1.641876 50.133334-9.6 16.988046-12.660871 26.063796-33.32441 23.893333-54.4 1.271644-18.055656-5.161687-35.805449-17.706667-48.853333C275.49044 322.93259 255.728635 317.473103 236.16 320Zm28.16 98.986667c-8.887704 4.995719-19.064525 7.22422-29.226667 6.4h-5.546667v-82.773333h5.12c17.92 0 24.96 1.706666 32 8.106666 8.543879 8.895422 12.956397 20.971786 12.16 33.28 1.09751 13.320485-4.305403 26.351039-14.506666 34.986667ZM339.84 448h28.8v-53.546666h58.026666V371.84H368.64v-29.226666h58.026666V320H339.84v128ZM320 42.666667H85.333333v234.666667h42.6666667V85.3333337H302.293333L384 167.04V277.333334h42.666666v-128L320 42.666667Z"
        />
      </svg>
    </button>
  );
};

export { DownloadButton };