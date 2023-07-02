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
    <div data-testid={dataTestid} className='app-project'>
      <h3 className='app-project__title'>{t(`${data.translate}.title`)}</h3>
      <Zoom size={{ width: '300px' }} img={data.photo} alt={t(`${data.translate}.title`)} />
      <div className='app-project__description'>
        {t(`${data.translate}.description`)}
      </div>
      <div className='app-project__footer'>
        {data.techs && (
          <>
            <strong>{t('pageProjects.techUsage')}</strong>
            <Tech show={data.techs} />
          </>
        )}
        <div className='app-project__actions'>
          <a
            href={data.url} target='_blank'
            role="link"
            aria-label={`Link ${t(`${data.translate}.title`)}`}
          >
            <LinkIcon className='app-project__icon link' />
            <span>Link</span>
          </a>
          <a
            href={data.repo} target='_blank'
            role="link"
            aria-label={`Github ${t(`${data.translate}.title`)}`}
          >
            <Github className='app-project__icon github' />
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
