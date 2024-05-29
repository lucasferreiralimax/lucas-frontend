import { ContactItem } from './types';

import Linkedin from '@/assets/icons/linkedin-logo.svg?react';
import Duolingo from '@/assets/icons/duolingo-logo.svg?react';
import Codepen from '@/assets/icons/codepen-logo.svg?react';
import Github from '@/assets/icons/github-logo.svg?react';
import Emailicon from '@/assets/icons/email-icon.svg?react';
import Youtube from '@/assets/icons/youtube-icon.svg?react';
import FreeCodeCamp from '@/assets/icons/freecodecamp-logo.png';
import PluralSight from '@/assets/icons/pluralsight-logo.png';

const contacts: ContactItem[] = [
  {
    name: 'lucasferreiralimax@gmail.com',
    className: 'email',
    icon: Emailicon,
    link: 'mailto:lucasferreiralimax@gmail.com'
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/lucasferreiralimax'
  },
  {
    name: 'Github',
    icon: Github,
    link: 'https://github.com/lucasferreiralimax'
  },
  {
    name: 'Codepen',
    icon: Codepen,
    link: 'https://codepen.io/lucaslimax'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    link: 'https://www.youtube.com/channel/UCZBURloZW7kmNqzgPS9OHrA'
  },
  {
    name: 'Duolingo',
    icon: Duolingo,
    link: 'https://www.duolingo.com/profile/ferreiralimax'
  },
  {
    name: 'FreeCodeCamp',
    img: FreeCodeCamp,
    link: 'https://www.freecodecamp.org/lucasferreiralimax'
  },
  {
    name: 'PluralSight',
    img: PluralSight,
    link: 'https://app.pluralsight.com/profile/lucasferreiralimax'
  },
  {
    name: 'C V',
    link: './lucasferreiradelima-2024_pt-BR.pdf'
  },
];

export default contacts;
