import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

import pkg from '../../../package.json';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as BookIcon } from '../../assets/icons/book-icon.svg';
import { ReactComponent as ProjectIcon } from '../../assets/icons/project-icon.svg';

import Language from '../Language';
import Theme from '../Theme';

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
    let links = document.querySelectorAll('.app-nav-item')
    for(let link of links) { link.addEventListener('click', menu) }
    document.addEventListener('keyup', menuEvent);

    return () => {
      for(let link of links) { link.removeEventListener('click', menu) }
      document.removeEventListener('keyup', menuEvent);
    }
  })

  return (
    <nav
      data-testid="app-nav"
      className={ `app-nav${nav ? ' active' : '' }`}
    >
      <button
        className="app-nav-menu"
        aria-label={t('menu.arial_label.menu_button')}
        onClick={menu}
        type="button"
      >
        <MenuIcon />
      </button>
      <div className="app-nav-content">
        <h4 className='app-nav-title'>{t('navigation.title')}</h4>
        <NavLink
          className={({ isActive }: any) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/"
          end
        >
          <HomeIcon />
          <span>{t('navigation.home')}</span>
        </NavLink>
        <NavLink
          className={({ isActive }: any) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/projects"
          end
        >
          <ProjectIcon />
          <span>{t('navigation.projects')}</span>
        </NavLink>
        <NavLink
          className={({ isActive }: any) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/formation"
          end
        >
          <BookIcon />
          <span>{t('navigation.formation')}</span>
        </NavLink>
        <NavLink
          className={({ isActive }: any) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/contact"
          end
        >
          <EmailIcon />
          <span>{t('navigation.contact')}</span>
        </NavLink>
        <div className='nav-footer'>
          <Language />
          <Theme />
          <p className="version">{t('version')} {appVersion}</p>
        </div>
      </div>
      <div  className={`overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Navigation;
