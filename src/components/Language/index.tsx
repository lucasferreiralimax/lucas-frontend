import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

function Language() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language)
      document.documentElement.lang = language;
    };
  }, []);

  const changeLanguages = (e: any) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
    document.documentElement.lang = e.target.value;
  }

  return (
    <select
      name="language"
      className="app-language"
      value={i18n.language}
      onChange={changeLanguages}
    >
      <option value="pt">{t('languages.pt')}</option>
      <option value="en">{t('languages.en')}</option>
      <option value="es">{t('languages.es')}</option>
    </select>
  )
}

export default Language
