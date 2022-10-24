import { useTranslation } from 'react-i18next';
import { ReactComponent as Github } from '@/assets/icons/github-logo.svg';
import { ReactComponent as LinkIcon } from '@/assets/icons/link-icon.svg';
import Tech from '@/components/Tech';
import Zoom from '@/components/Zoom';

import { ProjectProps } from './types';

import './style.scss';

const Project = ({ dataTestid, data }: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid={dataTestid} className="App-project">
      <h3 className="title">{t(`${data.translate}.title`)}</h3>
      <Zoom size={{ width: '300px' }} img={data.photo} alt={t(`${data.translate}.title`)} />
      <div className='description'>
        {t(`${data.translate}.description`)}
      </div>
      <div className='footer'>
        {data.techs && (
          <>
            <strong>{t('pageProjects.techUsage')}</strong>
            <Tech show={data.techs} />
          </>
        )}
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
