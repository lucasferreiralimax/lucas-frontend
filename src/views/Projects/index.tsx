import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Project from '../../components/Project';
import './style.scss';
import projects from './data';

const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.projects')}`;
  }, []);

  return (
    <>
      <h2>🌿 { t('navigation.projects') }</h2>
      <div className='projects'>
        {projects.map((item, index) => {
          return <>
            <Project
              dataTestid={`app-project-${++index}`}
              data={item}
              key={`project-${index}`}
            />
          </>
        })}
      </div>
    </>
  )
}

export default Projects;
