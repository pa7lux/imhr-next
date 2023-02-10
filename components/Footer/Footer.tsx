import type { NextPage } from 'next';
import Link from 'next/link';

import cn from 'classnames';
import FooterStyles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

type Props = {};

const Footer: NextPage<Props> = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className={cn(FooterStyles.footer, FooterStyles.footer__inner)}>
      <div className={cn(FooterStyles.copy)}>
        <p>© IMHR 2022-2023</p>
        <ul className={cn(FooterStyles.social_links)}>
          <li>
            <a href="https://t.me/+tiiH3XpLUB03YWFi" target="_blank">
              Telegram
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/imhr.top" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <p className={cn(FooterStyles.thanks)}>{t('footer')}</p>
    </footer>
  );
};

export { Footer };
