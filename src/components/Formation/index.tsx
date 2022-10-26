import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkIcon } from '@/assets/icons/link-icon.svg';

import { FormationProps } from './types';

import './style.scss';

const Formation = ({ dataTestid, data }: FormationProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid={dataTestid} className='app-formation'>
      <h3 className='app-formation__title'>{t<string>(`${data.translate}.title`)}</h3>
      <div className='app-formation__detail'>
        <a
          href={data.url}
          target='_blank'
          role="link"
          aria-label={`Link ${t<string>(`${data.translate}.title`)}`}
        >
          <img width='70' src={data.photo} alt={t<string>(`${data.translate}.title`)} />
        </a>
        <div className='app-formation__description'>
          {data.date.start} - {data.date.end}<br/>
          <hr></hr>
          {t<string>(`${data.translate}.description`)}
        </div>
      </div>
      {data.url && (
        <div className='app-formation__actions'>
          <a
            href={data.url}
            target='_blank'
            role="link"
            aria-label={`Link ${t<string>(`${data.translate}.title`)}`}
          >
            <LinkIcon className='app-formation__icon link' />
            <span>Site</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Formation;
