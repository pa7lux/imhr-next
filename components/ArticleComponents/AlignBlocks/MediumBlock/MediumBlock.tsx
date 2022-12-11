import React, { FC, PropsWithChildren } from "react";

import BlockStyles from "./MediumBlock.module.css";

const MediumBlock: FC<PropsWithChildren> = ({ children }) => {
  return <div className={BlockStyles.block_medium}>{children}</div>;
};

export { MediumBlock };
