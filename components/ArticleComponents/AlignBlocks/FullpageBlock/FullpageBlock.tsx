import React, { FC, PropsWithChildren } from "react";

import BlockStyles from "./FullpageBlock.module.css";

const FullpageBlock: FC<PropsWithChildren> = ({ children }) => {
  return <div className={BlockStyles.block_fullpage}>{children}</div>;
};

export { FullpageBlock };
