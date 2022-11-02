import type { NextPage } from 'next';
import Link from 'next/link';

import cn from 'classnames';
import HeaderStyles from './Header.module.css';

type Props = {
  title: string;
};

export const Header: NextPage<Props> = ({ title }) => {
  return (
    <header className={cn(HeaderStyles.header)}>
      <Link href="/" className={cn(HeaderStyles.logo)}>
        {title}
      </Link>
    </header>
  );
};
