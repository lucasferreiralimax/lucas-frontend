import { ContactItem } from './types';

import { ReactComponent as Linkedin } from '@/assets/icons/linkedin-logo.svg';
import { ReactComponent as Duolingo } from '@/assets/icons/duolingo-logo.svg';
import { ReactComponent as Codepen } from '@/assets/icons/codepen-logo.svg';
import { ReactComponent as Github } from '@/assets/icons/github-logo.svg';
import { ReactComponent as Emailicon } from '@/assets/icons/email-icon.svg';
import { ReactComponent as Youtube } from '@/assets/icons/youtube-icon.svg';
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
];

export default contacts;
