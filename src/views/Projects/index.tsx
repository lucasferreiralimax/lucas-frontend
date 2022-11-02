import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectType } from '@/components/Project/types';
import Project from '@/components/Project';
import projects from './data';
import './style.scss';

const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.projects')}`;
  }, [t]);

  return (
    <>
      <h2>🌿 { t<string>('navigation.projects') }</h2>
      <div className='app-projects' data-testid='app-projects'>
        {projects.map((item: ProjectType, index: number) => {
          return (
            <Project
              dataTestid={`app-project-${++index}`}
              data={item}
              key={`project-${++index}`}
            />
          )
        })}
      </div>
    </>
  )
}

export default Projects;
