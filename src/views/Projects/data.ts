import { ProjectType } from '@/components/Project/types';

import SOS from '@/assets/projects/sos.png';
import ProjetoCriar from '@/assets/projects/projeto-criar-curriculo.png';
import Detran from '@/assets/projects/detran-simulador.png';
import Keep from '@/assets/projects/keep-cybernetically.png';
import AngularBook from '@/assets/projects/angularbook.png';
import AngularBookNew from '@/assets/projects/angularbook-new.png';
import Google from '@/assets/projects/google-interface.png';
import SlideReact from '@/assets/projects/slide-content-react.png';
import SlideVue from '@/assets/projects/slide-content-vue.png';
import SlideAngular from '@/assets/projects/slide-content-angular.png';
import SlideEmber from '@/assets/projects/slide-content-ember.png';

const projects: ProjectType[] = [
  {
    title: 'pageProjects.listSOS.title',
    url: "https://lucasferreiralimax.github.io/save-our-soul",
    repo: "https://github.com/lucasferreiralimax/save-our-soul",
    photo: SOS,
    description: "pageProjects.listSOS.description"
  },
  {
    title: 'pageProjects.createCurriculum.title',
    url: "https://criar-curriculo.web.app",
    repo: "https://github.com/lucasferreiralimax/criarcurriculo",
    photo: ProjetoCriar,
    description: "pageProjects.createCurriculum.description"
  },
  {
    title: 'pageProjects.detran.title',
    url: "https://detran-simulador.web.app",
    repo: "https://github.com/lucasferreiralimax/detran-simulador",
    photo: Detran,
    description: "pageProjects.detran.description"
  },
  {
    title: 'pageProjects.notes.title',
    url: "https://keep-cybernetically.web.app",
    repo: "https://github.com/lucasferreiralimax/keep_cybernetically",
    photo: Keep,
    description: "pageProjects.notes.description"
  },
  {
    title: 'pageProjects.facebook.old.title',
    url: "https://angular-facebook.web.app",
    repo: "https://github.com/lucasferreiralimax/angularbook",
    photo: AngularBook,
    description: "pageProjects.facebook.old.description"
  },
  {
    title: 'pageProjects.facebook.new.title',
    url: "https://angular-facebook-new.web.app",
    repo: "https://github.com/lucasferreiralimax/angularbook-new",
    photo: AngularBookNew,
    description: "pageProjects.facebook.new.description"
  },
  {
    title: 'pageProjects.slide.react.title',
    url: "https://slidecontent-reactjs.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-react",
    photo: SlideReact,
    description: "pageProjects.slide.react.description"
  },
  {
    title: 'pageProjects.slide.vue.title',
    url: "https://slidecontent-vuejs.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-vue",
    photo: SlideVue,
    description: "pageProjects.slide.vue.description"
  },
  {
    title: 'pageProjects.slide.angular.title',
    url: "https://angular-slidecontent.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-angular",
    photo: SlideAngular,
    description: "pageProjects.slide.angular.description"
  },
  {
    title: 'pageProjects.slide.ember.title',
    url: "https://slidecontent-ember.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-ember",
    photo: SlideEmber,
    description: "pageProjects.slide.ember.description"
  },
  {
    title: 'pageProjects.google.react.title',
    url: "https://g00gle-reactjs.web.app",
    repo: "https://github.com/lucasferreiralimax/google-react",
    photo: Google,
    description: "pageProjects.google.react.description"
  },
  {
    title: 'pageProjects.google.angular.title',
    url: "https://g00gle-angular.web.app",
    repo: "https://github.com/lucasferreiralimax/google-angular",
    photo: Google,
    description: "pageProjects.google.angular.description"
  },
  {
    title: 'pageProjects.google.vue.title',
    url: "https://g00gle-vue.web.app",
    repo: "https://github.com/lucasferreiralimax/google-vue",
    photo: Google,
    description: "pageProjects.google.vue.description"
  },
  {
    title: 'pageProjects.google.svelte.title',
    url: "https://g00gle-svelte.web.app",
    repo: "https://github.com/lucasferreiralimax/google-svelte",
    photo: Google,
    description: "pageProjects.google.svelte.description"
  }
];

export default projects;
