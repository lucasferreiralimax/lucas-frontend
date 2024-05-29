import { TechType } from './types';

import HTML from '@/assets/techs/html.svg?react';
import CSS from '@/assets/techs/css.svg?react';
import Vue from '@/assets/techs/vue.svg?react';
import JS from '@/assets/techs/js.svg?react';
import React from '@/assets/techs/react.svg?react';
import Angular from '@/assets/techs/angular.svg?react';
import Typescript from '@/assets/techs/typescript.svg?react';
import Svelte from '@/assets/techs/svelte.svg?react';
import Webpack from '@/assets/techs/webpack.svg?react';
import Vite from '@/assets/techs/vite.svg?react';
import JQuery from '@/assets/techs/jquery.svg?react';
import Gulp from '@/assets/techs/gulp.svg?react';
import Cypress from '@/assets/techs/cypress.svg?react';
import Git from '@/assets/techs/git.svg?react';
import Stylus from '@/assets/techs/stylus.svg?react';
import Less from '@/assets/techs/less.svg?react';
import Sass from '@/assets/techs/sass.svg?react';
import Ember from '@/assets/techs/ember.svg?react';
import Jest from '@/assets/techs/jest.svg?react';
import Vitest from '@/assets/techs/vitest.svg?react';
import Karma from '@/assets/techs/karma.svg?react';

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
