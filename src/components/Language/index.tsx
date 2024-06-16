import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

const Language = () => {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(localStorage.getItem('language') || 'pt');
  const languages = ['pt-BR', 'en-US', 'es-ES', 'ru-RU', 'zh-CN'];

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language)
      document.documentElement.lang = language;
    };
  }, []);

  const changeLanguages = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem('language', value);
    document.documentElement.lang = value;
    setCurrent(value)
  }

  return (
    <section className='app-language'>
      <h4 className='app-language__title'>{t('languages.title')}</h4>
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => changeLanguages(language.slice(0, 2))}
          className={`app-language-flag ${current === language.slice(0, 2) && 'active'}`}
        >
          <img width="30px" src={`./src/assets/flags/${language}.svg`} alt={language} />
          {language}
        </button>
      ))}
    </section>
  )
}

export default Language;
