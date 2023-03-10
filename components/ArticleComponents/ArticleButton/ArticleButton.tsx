import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import ButtonStyles from './ArticleButton.module.css';

const ArticleButton: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const [innerText, setInnerText] = useState<string | undefined>('');

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.open('/pdf/comic-book.pdf');
  };
  useEffect(() => {
    setInnerText(ref.current?.innerText);
  }, []);
  return (
    <button
      onClick={clickHandler}
      className={cn(ButtonStyles['article-button'])}
    >
      <span ref={ref}>{!innerText ? children : innerText}</span>
    </button>
  );
};

export { ArticleButton };
