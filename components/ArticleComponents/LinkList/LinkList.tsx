import React, { FC, PropsWithChildren } from "react";
import cn from "classnames";

import AuthorStyles from "../AuthorCard/AuthorCard.module.css";
import useIsChild from "../../../lib/hooks/useIsChild";

const LinkList: FC<PropsWithChildren> = ({ children }) => {
  const { isChild, ref } = useIsChild<HTMLUListElement>(
    AuthorStyles.author_content
  );

  return (
    <ul
      style={{ listStyle: "none" }}
      ref={ref}
      className={cn(
        {
          [AuthorStyles.author_links]: isChild,
        },
        "mt-1"
      )}
    >
      {children}
    </ul>
  );
};

export { LinkList };
