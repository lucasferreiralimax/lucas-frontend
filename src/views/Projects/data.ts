import { ProjectType } from '@/components/Project/types';

import Criar from '@/assets/projects/criar-art.jpg';
import DarkModeVue from '@/assets/projects/darkmode-vue.png';
import VueTechsLogos from '@/assets/projects/vue-techs-logos.png';
import ReactTechsLogos from '@/assets/projects/react-techs-logos.png';
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
import ChatVue from '@/assets/projects/web-chat-vue.png';
import Steam from '@/assets/projects/steam-angular.png';
import WalletDigitalz from '@/assets/projects/walletdigitalz.png';

const projects: ProjectType[] = [
  {
    translate: 'pageProjects.criarArt',
    url: 'https://criar.art',
    repo: 'https://github.com/criar-art',
    photo: Criar,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Angular', 'Git']
  },
  {
    translate: 'pageProjects.darkModeVue',
    url: 'https://darkmode-vue.web.app',
    repo: 'https://github.com/livresaber/darkmode-vue',
    photo: DarkModeVue,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vite', 'Git']
  },
  {
    translate: 'pageProjects.vueTechsLogos',
    url: 'https://vue-techs-logos.web.app',
    repo: 'https://github.com/criar-art/vue-techs-logos',
    photo: VueTechsLogos,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vite', 'Git']
  },

  {
    translate: 'pageProjects.reactTechsLogos',
    url: 'https://react-techs-logos.web.app',
    repo: 'https://github.com/criar-art/react-techs-logos',
    photo: ReactTechsLogos,
    techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git']
  },
  {
    translate: 'pageProjects.listSOS',
    url: 'https://lucasferreiralimax.github.io/save-our-soul',
    repo: 'https://github.com/lucasferreiralimax/save-our-soul',
    photo: SOS,
    techs: ['HTML', 'CSS', 'JavaScript', 'Git']
  },
  {
    translate: 'pageProjects.createCurriculum',
    url: 'https://criar-curriculo.web.app',
    repo: 'https://github.com/lucasferreiralimax/criarcurriculo',
    photo: ProjetoCriar,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Stylus', 'Git', 'Cypress', 'Jest']
  },
  {
    translate: 'pageProjects.detran',
    url: 'https://detran-simulador.web.app',
    repo: 'https://github.com/criar-art/detran.simulador',
    photo: Detran,
    techs: ['HTML', 'CSS', 'Typescript', 'Angular', 'Sass', 'Git', 'Cypress', 'Karma']
  },
  {
    translate: 'pageProjects.walletdigitalz',
    url: 'https://walletdigitalz.web.app',
    repo: 'https://github.com/criar-art/wallet.digitalz',
    photo: WalletDigitalz,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Sass', 'Git', 'Jest', 'Cypress', 'Vite']
  },
  {
    translate: 'pageProjects.notes',
    url: 'https://keep-cybernetically.web.app',
    repo: 'https://github.com/lucasferreiralimax/keep_cybernetically',
    photo: Keep,
    techs: ['HTML', 'CSS', 'JavaScript', 'Svelte', 'Stylus', 'Git', 'Jest']
  },
  {
    translate: 'pageProjects.facebook.old',
    url: 'https://angular-facebook.web.app',
    repo: 'https://github.com/lucasferreiralimax/angularbook',
    photo: AngularBook,
    techs: ['HTML', 'CSS', 'Typescript', 'Angular', 'Sass', 'Git', 'Karma']
  },
  {
    translate: 'pageProjects.facebook.new',
    url: 'https://angular-facebook-new.web.app',
    repo: 'https://github.com/lucasferreiralimax/angularbook-new',
    photo: AngularBookNew,
    techs: ['HTML', 'CSS', 'Typescript', 'Angular', 'Sass', 'Git', 'Karma']
  },
  {
    translate: 'pageProjects.chatVue',
    url: 'https://web-chat-vue.web.app',
    repo: 'https://github.com/lucasferreiralimax/chat-vue',
    photo: ChatVue,
    techs: ['HTML', 'CSS', 'Typescript', 'Vue', 'Stylus', 'Git', 'Jest', 'Cypress']
  },
  {
    translate: 'pageProjects.slide.react',
    url: 'https://slidecontent-reactjs.web.app',
    repo: 'https://github.com/criar-art/slidecontent-react',
    photo: SlideReact,
    techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Jest']
  },
  {
    translate: 'pageProjects.slide.vue',
    url: 'https://slidecontent-vuejs.web.app',
    repo: 'https://github.com/criar-art/slidecontent-vue',
    photo: SlideVue,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Stylus', 'Git', 'Cypress', 'Jest']
  },
  {
    translate: 'pageProjects.slide.angular',
    url: 'https://angular-slidecontent.web.app',
    repo: 'https://github.com/criar-art/slidecontent-angular',
    photo: SlideAngular,
    techs: ['HTML', 'CSS', 'Typescript', 'Angular', 'Sass', 'Git', 'Karma']
  },
  {
    translate: 'pageProjects.slide.ember',
    url: 'https://slidecontent-ember.web.app',
    repo: 'https://github.com/lucasferreiralimax/slidecontent-ember',
    photo: SlideEmber,
    techs: ['HTML', 'CSS', 'JavaScript', 'Ember', 'Git']
  },
  {
    translate: 'pageProjects.google.react',
    url: 'https://g00gle-reactjs.web.app',
    repo: 'https://github.com/lucasferreiralimax/google-react',
    photo: Google,
    techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Git', 'Cypress', 'Jest']
  },
  {
    translate: 'pageProjects.google.angular',
    url: 'https://g00gle-angular.web.app',
    repo: 'https://github.com/lucasferreiralimax/google-angular',
    photo: Google,
    techs: ['HTML', 'CSS', 'Typescript', 'Angular', 'Sass', 'Git', 'Karma']
  },
  {
    translate: 'pageProjects.google.vue',
    url: 'https://g00gle-vue.web.app',
    repo: 'https://github.com/lucasferreiralimax/google-vue',
    photo: Google,
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Sass', 'Git', 'Cypress', 'Vitest']
  },
  {
    translate: 'pageProjects.google.svelte',
    url: 'https://g00gle-svelte.web.app',
    repo: 'https://github.com/lucasferreiralimax/google-svelte',
    photo: Google,
    techs: ['HTML', 'CSS', 'JavaScript', 'Svelte', 'Sass', 'Git', 'Jest']
  },
  {
    translate: 'pageProjects.steam',
    url: 'https://angular-steam.web.app/',
    repo: 'https://github.com/lucasferreiralimax/steam',
    photo: Steam,
    techs: ['HTML', 'CSS', 'Typescript', 'Angular', 'Sass', 'Git', 'Karma']
  }
];

export default projects;
