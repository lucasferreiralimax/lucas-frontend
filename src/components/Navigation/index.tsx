import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import pkg from '../../../package.json';

import listNavigation from './data';
import { ReactComponent as MenuIcon } from '@/assets/icons/menu-icon.svg';
import Language from '@/components/Language';
import Theme from '@/components/Theme';

import { NavigationTypes } from './types';
import './style.scss';

const Navigation = () => {
  const appVersion: string = pkg.version;
  const { t } = useTranslation();
  const [nav, setNav] = useState<boolean>(false);
  const menu: VoidFunction = () => setNav(!nav);
  const menuEvent = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setNav(false);
  }

  useEffect(() => {
    let links = document.querySelectorAll('.app-nav__item')
    for(let link of links) { link.addEventListener('click', menu) }
    document.addEventListener('keyup', menuEvent);

    return () => {
      for(let link of links) { link.removeEventListener('click', menu) }
      document.removeEventListener('keyup', menuEvent);
    }
  })

  return (
    <nav
      data-testid='app-nav'
      className={ `app-nav${nav ? ' active' : '' }`}
      role='navigation'
      aria-label={t('navigation.aria.description')}
    >
      <button
        className='app-nav__menu'
        aria-label={t('menu.arial_label.menu_button')}
        onClick={menu}
        type='button'
      >
        <MenuIcon />
      </button>
      <div className='app-nav__content'>
        <h4 className='app-nav__title'>{t<string>('navigation.title')}</h4>
        {listNavigation.map((item: NavigationTypes) => (
          <NavLink
            className={({ isActive }: any) => (isActive ? 'app-nav__item active' : 'app-nav__item')}
            to={item.url}
            key={item.name}
            end
            role='link'
            aria-label={`Link ${t<string>(`navigation.${item.name}`)}`}
          >
            <item.icon />
            <span>{t<string>(`navigation.${item.name}`)}</span>
          </NavLink>
        ))}
        <div className='app-nav__footer'>
          <Language />
          <Theme />
          <p className='app-nav__version'>{t<string>('version')} {appVersion}</p>
        </div>
      </div>
      <div  className={`app-nav__overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Navigation;
