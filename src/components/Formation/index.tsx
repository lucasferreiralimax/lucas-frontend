import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkIcon } from '../../assets/icons/link-icon.svg';

import './style.scss';

type FormationDate = {
  start: string;
  end?: string;
}

type FormationType = {
  title: string;
  description: string;
  url?: string;
  photo: string;
  date: FormationDate
}

type FormationProps = {
  dataTestid: string;
  data: FormationType;
}

const Formation = ({ dataTestid, data }: FormationProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid={dataTestid} className="App-formation">
      <h3 className="title">{t(data.title)}</h3>
      <div className='detail'>
        <a href={`http://${data.url}`} target="_blank">
          <img width="70" src={data.photo} alt={t(data.title)} />
        </a>
        <p className="description">
          {data.date.start} - {data.date.end}<br/>
          <hr />
          {t(data.description)}
        </p>
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
