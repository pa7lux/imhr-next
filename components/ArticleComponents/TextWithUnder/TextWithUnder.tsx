import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import TextStyles from './TextWithUnder.module.css';
import { useTranslation } from 'react-i18next';

type Props = {
  author: string;
};

const TextWithUnder: FC<PropsWithChildren<Props>> = ({ children, author }) => {
  const { t } = useTranslation('components');

  return (
    <section className={cn(TextStyles.big_heading_and_text, 'content-section')}>
      {children}
      <p
        className={cn(
          TextStyles.big_heading_and_text_paragraph,
          'text-type-p mt-2'
        )}
      >
        {t('heading')} {author}
      </p>
    </section>
  );
};

export { TextWithUnder };
