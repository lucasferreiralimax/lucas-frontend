import { useTranslation } from 'react-i18next';
import './style.scss';

function Loading() {
  const { t } = useTranslation();

  return (
    <div data-testid="app-loading" className="App-loading">
      <div data-testid="app-loading-loader" className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
      <span>{t('text.loading')}...</span>
    </div>
  );
}

export default Loading;
