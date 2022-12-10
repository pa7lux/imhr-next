import type { NextPage } from 'next';
import Link from 'next/link';

import cn from 'classnames';
import FooterStyles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

type Props = {};

const Footer: NextPage<Props> = () => {
  const { t } = useTranslation('footer');

  return (
    <footer
      className={cn(FooterStyles.footer, FooterStyles.footer__inner)}
    >
      <p className={cn(FooterStyles.copy)}>© IMHR 2022</p>
      <p className={cn(FooterStyles.thanks)}>{t('footer')}</p>
    </footer>
  );
};

export { Footer };
