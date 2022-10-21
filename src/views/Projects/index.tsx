import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Project from '../../components/Project';

import './style.scss';

import SOS from '../../../src/assets/projects/sos.png';
import ProjetoCriar from '../../../src/assets/projects/projeto-criar-curriculo.png';
import Detran from '../../../src/assets/projects/detran-simulador.png';
import Keep from '../../../src/assets/projects/keep-cybernetically.png';
import AngularBook from '../../../src/assets/projects/angularbook.png';
import AngularBookNew from '../../../src/assets/projects/angularbook-new.png';
import Google from '../../../src/assets/projects/google-interface.png';
import SlideReact from '../../../src/assets/projects/slide-content-react.png';
import SlideVue from '../../../src/assets/projects/slide-content-vue.png';
import SlideAngular from '../../../src/assets/projects/slide-content-angular.png';
import SlideEmber from '../../../src/assets/projects/slide-content-ember.png';

const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.projects')}`;
  }, []);

  const projects = [
    {
      title: t('pageProjects.listSOS'),
      url: "lucasferreiralimax.github.io/save-our-soul",
      repo: "github.com/lucasferreiralimax/save-our-soul",
      photo: SOS
    },
    {
      title: t('pageProjects.createCurriculum'),
      url: "criar-curriculo.web.app",
      repo: "github.com/lucasferreiralimax/criarcurriculo",
      photo: ProjetoCriar
    },
    {
      title: t('pageProjects.detran'),
      url: "detran-simulador.web.app",
      repo: "github.com/lucasferreiralimax/detran-simulador",
      photo: Detran
    },
    {
      title: t('pageProjects.notes'),
      url: "keep-cybernetically.web.app",
      repo: "https://github.com/lucasferreiralimax/keep_cybernetically",
      photo: Keep
    },
    {
      title: t('pageProjects.facebook.old'),
      url: "angular-facebook.web.app",
      repo: "https://github.com/lucasferreiralimax/angularbook",
      photo: AngularBook
    },
    {
      title: t('pageProjects.facebook.new'),
      url: "angular-facebook-new.web.app",
      repo: "https://github.com/lucasferreiralimax/angularbook-new",
      photo: AngularBookNew
    },
    {
      title: t('pageProjects.slide.react'),
      url: "slidecontent-reactjs.web.app",
      repo: "https://github.com/lucasferreiralimax/slidecontent-react",
      photo: SlideReact
    },
    {
      title: t('pageProjects.slide.vue'),
      url: "slidecontent-vue.web.app",
      repo: "https://github.com/lucasferreiralimax/slidecontent-vue",
      photo: SlideVue
    },
    {
      title: t('pageProjects.slide.angular'),
      url: "slidecontent-angular.web.app",
      repo: "https://github.com/lucasferreiralimax/slidecontent-angular",
      photo: SlideAngular
    },
    {
      title: t('pageProjects.slide.ember'),
      url: "slidecontent-ember.web.app",
      repo: "https://github.com/lucasferreiralimax/slidecontent-ember",
      photo: SlideEmber
    },
    {
      title: t('pageProjects.google.react'),
      url: "g00gle-reactjs.web.app",
      repo: "https://github.com/lucasferreiralimax/google-react",
      photo: Google
    },
    {
      title: t('pageProjects.google.angular'),
      url: "g00gle-angular.web.app",
      repo: "https://github.com/lucasferreiralimax/google-angular",
      photo: Google
    },
    {
      title: t('pageProjects.google.vue'),
      url: "g00gle-vue.web.app",
      repo: "https://github.com/lucasferreiralimax/google-vue",
      photo: Google
    },
    {
      title: t('pageProjects.google.svelte'),
      url: "g00gle-svelte.web.app",
      repo: "https://github.com/lucasferreiralimax/google-svelte",
      photo: Google
    }
  ];

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
