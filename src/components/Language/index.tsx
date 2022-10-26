import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

const Language = () => {
  const { t, i18n } = useTranslation();

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
  }

  return (
    <>
      <h4 className='app-language__title'>{t<string>('languages.title')}</h4>
      <select
        name='language'
        className='app-language'
        data-testid='app-language'
        value={i18n.language}
        onChange={({ target: { value }}) => changeLanguages(value)}
      >
        <option value='pt'>{t<string>('languages.pt')}</option>
        <option value='en'>{t<string>('languages.en')}</option>
        <option value='es'>{t<string>('languages.es')}</option>
      </select>
    </>
  )
}

export default Language;
