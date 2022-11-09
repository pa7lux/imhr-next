import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import cn from 'classnames';
import LayoutStyles from './Layout.module.css';

import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
