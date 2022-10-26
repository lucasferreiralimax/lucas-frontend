import { TechType } from './types';

import { ReactComponent as HTML } from '@/assets/techs/html.svg';
import { ReactComponent as CSS } from '@/assets/techs/css.svg';
import { ReactComponent as Vue } from '@/assets/techs/vue.svg';
import { ReactComponent as JS } from '@/assets/techs/js.svg';
import { ReactComponent as React } from '@/assets/techs/react.svg';
import { ReactComponent as Angular } from '@/assets/techs/angular.svg';
import { ReactComponent as Typescript } from '@/assets/techs/typescript.svg';
import { ReactComponent as Svelte } from '@/assets/techs/svelte.svg';
import { ReactComponent as Webpack } from '@/assets/techs/webpack.svg';
import { ReactComponent as Vite } from '@/assets/techs/vite.svg';
import { ReactComponent as JQuery } from '@/assets/techs/jquery.svg';
import { ReactComponent as Gulp } from '@/assets/techs/gulp.svg';
import { ReactComponent as Cypress } from '@/assets/techs/cypress.svg';
import { ReactComponent as Git } from '@/assets/techs/git.svg';
import { ReactComponent as Stylus } from '@/assets/techs/stylus.svg';
import { ReactComponent as Less } from '@/assets/techs/less.svg';
import { ReactComponent as Sass } from '@/assets/techs/sass.svg';
import { ReactComponent as Ember } from '@/assets/techs/ember.svg';
import { ReactComponent as Jest } from '@/assets/techs/jest.svg';
import { ReactComponent as Vitest } from '@/assets/techs/vitest.svg';
import { ReactComponent as Karma } from '@/assets/techs/karma.svg';

const techs: TechType[] = [
  { title: 'HTML',       icon: HTML,       url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'      },
  { title: 'CSS',        icon: CSS,        url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS'        },
  { title: 'JavaScript', icon: JS,         url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { title: 'Typescript', icon: Typescript, url: 'https://www.typescriptlang.org/docs'                          },
  { title: 'Vue',        icon: Vue,        url: 'https://vuejs.org'                                            },
  { title: 'React',      icon: React,      url: 'https://reactjs.org'                                          },
  { title: 'Angular',    icon: Angular,    url: 'https://angular.io'                                           },
  { title: 'Svelte',     icon: Svelte,     url: 'https://svelte.dev'                                           },
  { title: 'Ember',      icon: Ember,      url: 'https://emberjs.com'                                          },
  { title: 'Stylus',     icon: Stylus,     url: 'https://stylus-lang.com'                                      },
  { title: 'Less',       icon: Less,       url: 'https://lesscss.org'                                          },
  { title: 'Sass',       icon: Sass,       url: 'https://sass-lang.com'                                        },
  { title: 'Webpack',    icon: Webpack,    url: 'https://webpack.js.org'                                       },
  { title: 'Vite',       icon: Vite,       url: 'https://vitejs.dev'                                           },
  { title: 'Gulp',       icon: Gulp,       url: 'https://gulpjs.com'                                           },
  { title: 'Jest',       icon: Jest,       url: 'https://jestjs.io/pt-BR'                                      },
  { title: 'Karma',      icon: Karma,      url: 'https://karma-runner.github.io'                               },
  { title: 'Vitest',     icon: Vitest,     url: 'https://vitest.dev'                                           },
  { title: 'Cypress',    icon: Cypress,    url: 'https://www.cypress.io'                                       },
  { title: 'Git',        icon: Git,        url: 'https://git-scm.com'                                          },
  { title: 'jQuery',     icon: JQuery,     url: 'https://jquery.com'                                           }
];

export default techs;
