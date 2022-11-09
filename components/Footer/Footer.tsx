
import type { NextPage } from 'next';
import Link from 'next/link';

import cn from 'classnames';
import FooterStyles from './Footer.module.css';

type Props = {}

const Footer: NextPage<Props> = () => {
  return (
    <footer className={cn(FooterStyles.footer, FooterStyles.footer__inner)}>
      <p className={cn(FooterStyles.copy)}>© IMHR 2022</p>
      <p className={cn(FooterStyles.thanks)}>Особлива подяка прекрасній Грузії, яка прихистила всіх ❤️</p>
    </footer>
  )
}

export default Footer