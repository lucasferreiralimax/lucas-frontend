import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

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
  const menuEvent = (e: any) => {
    if (e.keyCode === 27 || e.key === 'Escape') {
      setNav(false)
    }
  }

  useEffect(() => {
    let links = document.querySelectorAll('.app-nav-item')
    for(let link of links) { link.addEventListener('click', menu) }
    document.addEventListener('keyup', menuEvent)

    return () => {
      for(let link of links) { link.removeEventListener('click', menu) }
      document.removeEventListener('keyup', menuEvent)
    }
  })

  return (
    <nav data-testid="app-nav" className={ `app-nav${nav ? ' active' : '' }`}>
      <button type="button" className="app-nav-menu" onClick={menu} aria-label={t('menu.arial_label.menu_button')}>
        <HomeIcon />
      </button>
      <div className="app-nav-content">
        <Language />
        <NavLink to="/" className={({ isActive }) => (isActive ? 'app-nav-item active' : 'app-nav-item')} end>
          <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <span>{t('navigation.home')}</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'app-nav-item active' : 'app-nav-item')} end>
          <ProjectIcon />
          <span>{t('navigation.projects')}</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'app-nav-item active' : 'app-nav-item')} end>
          <EmailIcon />
          <span>{t('navigation.contact')}</span>
        </NavLink>
        <Theme />
      </div>
      <div className={ `overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Navigation;
