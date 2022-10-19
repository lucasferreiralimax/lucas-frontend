import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg';
import { ReactComponent as ProjectIcon } from '../../assets/project-icon.svg';

import Language from '../Language';
import Theme from '../Theme';

import './style.scss';

const Navigation = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false)
  const menu = () => setNav(!nav)
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
        <Language />
        <NavLink
          className={({ isActive }) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/"
          end
        >
          <HomeIcon />
          <span>{t('navigation.home')}</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/projects"
          end
        >
          <ProjectIcon />
          <span>{t('navigation.projects')}</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'app-nav-item active' : 'app-nav-item')}
          to="/contact"
          end
        >
          <EmailIcon />
          <span>{t('navigation.contact')}</span>
        </NavLink>
        <Theme />
      </div>
      <div  className={`overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Navigation;
