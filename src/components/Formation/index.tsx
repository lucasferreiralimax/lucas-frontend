import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkIcon } from '@/assets/icons/link-icon.svg';

import { FormationProps } from './types';

import './style.scss';

const Formation = ({ dataTestid, data }: FormationProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid={dataTestid} className="App-formation">
      <h3 className="title">{t(`${data.translate}.title`)}</h3>
      <div className='detail'>
        <a href={`http://${data.url}`} target="_blank">
          <img width="70" src={data.photo} alt={t(`${data.translate}.title`)} />
        </a>
        <div className="description">
          {data.date.start} - {data.date.end}<br/>
          <hr></hr>
          {t(`${data.translate}.description`)}
        </div>
      </div>
      {data.url && (
        <div className="actions">
          <a href={`http://${data.url}`} target="_blank">
            <LinkIcon className="icon link" />
            <span>Site</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Formation;
