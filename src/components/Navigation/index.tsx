import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import Language from '../Language';
import Theme from '../Theme';

import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg';

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
        <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <div className="app-nav-content">
        <Language />
        <Link to="/" className="app-nav-item">
          <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <span>{t('navigation.home')}</span>
        </Link>
        <Link to="/projects" className="app-nav-item">
          <svg fill="var(--main-color)" height="25px" width="25px" viewBox="0 0 210.371 210.371" xmlns="http://www.w3.org/2000/svg">
            <path d="M157.597 10.629A273.136 273.136 0 0 1 191.118.423 15.784 15.784 0 0 1 194.737 0c4.788 0 9.255 2.171 12.253 5.956a15.56 15.56 0 0 1 2.959 13.297 273.164 273.164 0 0 1-10.207 33.521l-42.145-42.145zm13.037 134.713a7.5 7.5 0 0 1-1.33 5.938l-41.574 56.058a7.5 7.5 0 0 1-13.076-7.022c.097-.269 8.211-22.987 6.313-38.654a56.922 56.922 0 0 0-4.173-15.482 49.517 49.517 0 0 1-7.904.882l-4.593 15.157a7.5 7.5 0 0 1-12.481 3.128l-1.188-1.188c-3.573 7.208-9.464 16.41-18.41 23.066-14.64 10.892-43.534 11.739-52.044 11.739h-.001c-.911 0-1.411-.011-1.411-.011a7.506 7.506 0 0 1-7.343-7.343c-.078-3.753-.41-37.143 11.728-53.457 6.655-8.945 15.858-14.837 23.065-18.409l-1.188-1.189a7.5 7.5 0 0 1 3.129-12.48l15.145-4.589c.083-2.624.391-5.258.906-7.899a56.85 56.85 0 0 0-15.494-4.181 42.05 42.05 0 0 0-5.035-.281c-15.263 0-33.435 6.525-33.616 6.591a7.498 7.498 0 0 1-9.163-3.501 7.497 7.497 0 0 1 2.139-9.573L59.09 41.067a7.502 7.502 0 0 1 5.938-1.331c.767.153 3.983.92 13.211 4.347 4.526 1.681 9.319 4.011 13.248 6.08 15.556-14.662 33.769-25.446 51.115-33.316l50.921 50.92c-7.87 17.346-18.654 35.56-33.315 51.115 2.069 3.929 4.399 8.722 6.08 13.249 3.427 9.228 4.193 12.445 4.346 13.211zm-91.357 7.467-21.722-21.722c-5.62 2.26-15.899 7.317-22.374 16.019-6.07 8.158-8.125 25.454-8.639 36.716 13.455-.587 29.241-3.067 36.722-8.632 8.657-6.441 13.738-16.751 16.013-22.381zm74.85-54.98c5.554-5.554 8.612-12.938 8.612-20.793 0-7.854-3.059-15.239-8.612-20.792-5.555-5.554-12.938-8.613-20.793-8.613s-15.238 3.059-20.793 8.613c-5.554 5.554-8.612 12.938-8.612 20.792 0 7.854 3.059 15.239 8.612 20.793 5.555 5.554 12.938 8.613 20.793 8.613s15.239-3.059 20.793-8.613zm-20.792-35.198a14.314 14.314 0 0 0-10.186 4.219 14.307 14.307 0 0 0-4.22 10.186 14.31 14.31 0 0 0 4.22 10.187c2.721 2.721 6.338 4.219 10.186 4.219s7.465-1.499 10.186-4.219a14.307 14.307 0 0 0 4.22-10.187c0-3.848-1.498-7.465-4.22-10.186a14.317 14.317 0 0 0-10.186-4.219z"/>
          </svg>
          <span>{t('navigation.projects')}</span>
        </Link>
        <Link to="/contact" className="app-nav-item">
          <EmailIcon />
          <span>{t('navigation.contact')}</span>
        </Link>
        <Theme />
      </div>
      <div className={ `overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Navigation;
