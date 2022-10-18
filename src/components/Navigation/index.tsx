import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import Language from '../Language';

import './style.scss';

function Navigation() {
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
        <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <div className="app-nav-content">
        <Link to="/" className="app-nav-item">
          <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <span>{t('navigation.home')}</span>
        </Link>
        <Link to="/projects" className="app-nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="var(--main-color)" width="25px" viewBox="0 0 460.8 460.8">
            <path d="M230.432 0c-65.829 0-119.641 53.812-119.641 119.641s53.812 119.641 119.641 119.641 119.641-53.812 119.641-119.641S296.261 0 230.432 0zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z"/>
          </svg>
          <span>{t('navigation.projects')}</span>
        </Link>
        <Language />
      </div>
      <div className={ `overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Navigation;
