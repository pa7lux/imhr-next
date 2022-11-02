import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import cn from 'classnames';
import LayoutStyles from './Layout.module.css';

import { Header } from '../Header/Header';

export const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header title="На главную" />
      <main className={cn(LayoutStyles.main)}>{children}</main>
    </>
  );
};
