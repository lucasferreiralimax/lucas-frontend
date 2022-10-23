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
    translate: 'pageProjects.listSOS',
    url: "https://lucasferreiralimax.github.io/save-our-soul",
    repo: "https://github.com/lucasferreiralimax/save-our-soul",
    photo: SOS
  },
  {
    translate: 'pageProjects.createCurriculum',
    url: "https://criar-curriculo.web.app",
    repo: "https://github.com/lucasferreiralimax/criarcurriculo",
    photo: ProjetoCriar
  },
  {
    translate: 'pageProjects.detran',
    url: "https://detran-simulador.web.app",
    repo: "https://github.com/lucasferreiralimax/detran-simulador",
    photo: Detran
  },
  {
    translate: 'pageProjects.notes',
    url: "https://keep-cybernetically.web.app",
    repo: "https://github.com/lucasferreiralimax/keep_cybernetically",
    photo: Keep
  },
  {
    translate: 'pageProjects.facebook.old',
    url: "https://angular-facebook.web.app",
    repo: "https://github.com/lucasferreiralimax/angularbook",
    photo: AngularBook
  },
  {
    translate: 'pageProjects.facebook.new',
    url: "https://angular-facebook-new.web.app",
    repo: "https://github.com/lucasferreiralimax/angularbook-new",
    photo: AngularBookNew
  },
  {
    translate: 'pageProjects.slide.react',
    url: "https://slidecontent-reactjs.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-react",
    photo: SlideReact
  },
  {
    translate: 'pageProjects.slide.vue',
    url: "https://slidecontent-vuejs.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-vue",
    photo: SlideVue
  },
  {
    translate: 'pageProjects.slide.angular',
    url: "https://angular-slidecontent.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-angular",
    photo: SlideAngular
  },
  {
    translate: 'pageProjects.slide.ember',
    url: "https://slidecontent-ember.web.app",
    repo: "https://github.com/lucasferreiralimax/slidecontent-ember",
    photo: SlideEmber
  },
  {
    translate: 'pageProjects.google.react',
    url: "https://g00gle-reactjs.web.app",
    repo: "https://github.com/lucasferreiralimax/google-react",
    photo: Google
  },
  {
    translate: 'pageProjects.google.angular',
    url: "https://g00gle-angular.web.app",
    repo: "https://github.com/lucasferreiralimax/google-angular",
    photo: Google
  },
  {
    translate: 'pageProjects.google.vue',
    url: "https://g00gle-vue.web.app",
    repo: "https://github.com/lucasferreiralimax/google-vue",
    photo: Google
  },
  {
    translate: 'pageProjects.google.svelte',
    url: "https://g00gle-svelte.web.app",
    repo: "https://github.com/lucasferreiralimax/google-svelte",
    photo: Google
  }
];

export default projects;
