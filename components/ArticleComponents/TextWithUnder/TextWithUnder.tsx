import React, { FC, PropsWithChildren } from "react";
import cn from "classnames";

import TextStyles from "./TextWithUnder.module.css";

const TextWithUnder: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={cn(TextStyles.big_heading_and_text, "content-section")}>
      {children}
    </section>
  );
};

export { TextWithUnder };
