import { useTranslation } from 'react-i18next';
import { ReactComponent as Github } from '@/assets/icons/github-logo.svg';
import { ReactComponent as LinkIcon } from '@/assets/icons/link-icon.svg';
import Tech from '@/components/Tech';

import { ProjectProps } from './types';

import './style.scss';

const Project = ({ dataTestid, data }: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid={dataTestid} className="App-project">
      <a className="title" href={data.url} target="_blank">
        <h3>{t(`${data.translate}.title`)}</h3>
      </a>
      <a href={data.url} target="_blank">
        <img width="300" src={data.photo} alt={t(`${data.translate}.title`)} />
      </a>
      <div className='description'>
        {t(`${data.translate}.description`)}
      </div>
      <div className='footer'>
        {data.techs && <Tech show={data.techs} />}
        <div className="actions">
          <a href={data.url} target="_blank">
            <LinkIcon className="icon link" />
            <span>Link</span>
          </a>
          <a href={data.repo} target="_blank">
            <Github className="icon github" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
