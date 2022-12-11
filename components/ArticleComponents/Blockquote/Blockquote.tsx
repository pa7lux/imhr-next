import {
  BlockquoteHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";
import cn from "classnames";

import QuoteStyles from "./Blockquote.module.css";

type Props = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

const Blockquote: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <blockquote className={cn(QuoteStyles.quote, "text-type-quote")}>
      {children}
    </blockquote>
  );
};

export { Blockquote };
