import {
  BlockquoteHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import QuoteStyles from './Blockquote.module.css';

type Props = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

const Blockquote: FC<PropsWithChildren<Props>> = ({ children }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [innerText, setInnerText] = useState<string | undefined>('');

  useEffect(() => {
    setInnerText(ref.current?.innerText);
  }, []);

  return (
    <blockquote className={cn(QuoteStyles.quote, 'text-type-quote')}>
      <p ref={ref}>{!innerText ? children : innerText}</p>
    </blockquote>
  );
};

export { Blockquote };
