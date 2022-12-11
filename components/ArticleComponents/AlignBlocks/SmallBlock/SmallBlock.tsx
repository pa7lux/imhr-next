import React, { FC, PropsWithChildren } from "react";

import BlockStyles from "./SmallBlock.module.css";

const SmallBlock: FC<PropsWithChildren> = ({ children }) => {
  return <div className={BlockStyles.block_small}>{children}</div>;
};

export { SmallBlock };
