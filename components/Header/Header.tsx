import { FC } from 'react'
import Link from 'next/link';
import { withTheme } from '../../store/context/context';
import { useRouter } from 'next/router';
import cn from 'classnames';

import HeaderStyles from './Header.module.css';

let cx = cn.bind(HeaderStyles);

export const Header = withTheme(({ theme }) => {

  const { pathname } = useRouter()

  const { menu_list_item, menu_list_item__active } = HeaderStyles

  return (
    <header className={cn(HeaderStyles.header, theme)}>
      <div className={cn(HeaderStyles.header_logo)}>
        <Link href='/' legacyBehavior>
          <a className={cn(HeaderStyles.logo_link)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 59 18">
              <path fill="#001D3D" d="M2.528 4.632h.24L4.928.119998H.368L2.528 4.632ZM.968 18h3.336V6H.968v12Zm7.26563 0h3.33597v-6.264c0-1.656 1.104-2.904 2.544-2.904 1.464 0 2.424 1.104 2.448 2.76V18h3.336v-6.264c0-1.656 1.104-2.904 2.568-2.904 1.44 0 2.424 1.104 2.424 2.76V18h3.36v-6.936c0-3.216-2.112-5.304-5.328-5.304-1.656 0-3.096.72-4.056 1.896-.864-1.2-2.256-1.896-3.96-1.896-1.464 0-2.736.6-3.624 1.632V6H8.23363v12Zm23.71877 0h3.336v-6.264c0-1.656 1.224-2.88 2.88-2.88 1.56 0 2.544 1.104 2.568 2.88V18h3.36v-6.792c0-3.288-2.112-5.448-5.232-5.448-1.44 0-2.664.48-3.576 1.344V.959999h-3.336V18Zm15.8437 0h3.336v-6.48c0-1.488 1.08-2.64 2.448-2.64 1.152 0 1.944.6 1.944 1.776v.48h3.336v-.816c0-2.856-1.896-4.56-4.464-4.56-1.416 0-2.688.6-3.552 1.608V6h-3.048v12Z"/>
            </svg>
          </a>
        </Link>
        
      </div>
      <nav className={cn(HeaderStyles.header_menu, HeaderStyles.main_menu)}>
        <ul className={cn(HeaderStyles.menu_list)}>
          <li className={cx({
              [menu_list_item]: true,
              [menu_list_item__active]: pathname === '/' || pathname === '/posts/[slug]',
            })}>
            <Link href='/' legacyBehavior>
              <a className={cn(HeaderStyles.menu_link)}>Історії</a>
            </Link>
          </li>
          <li className={cx({
              [menu_list_item]: true,
              [menu_list_item__active]: pathname === '/about',
            })}>
            <Link href='/about' legacyBehavior>
              <a className={cn(HeaderStyles.menu_link)}>Про проект</a>
            </Link>
          </li>
          <li className={cn(HeaderStyles.menu_list_item)}><a href="https://t.me/+tiiH3XpLUB03YWFi" target="_blank" className={cn(HeaderStyles.menu_link, HeaderStyles.menu_link)}>У мене є історія</a></li>
        </ul>
      </nav>
      <nav className={cn(HeaderStyles.header_lang, HeaderStyles.lang_menu)}>
        <ul className={cn(HeaderStyles.lang_list)}>
          <li><a  className={cn(HeaderStyles.lang_link, HeaderStyles.lang_link__active)}>UA</a></li>
          <li className={cn(HeaderStyles.divider)} aria-hidden="true">|</li>
          <li><a className={cn(HeaderStyles.lang_link)}>RU</a></li>
        </ul>
      </nav>
    </header>
  );
});
