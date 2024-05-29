import { NavigationTypes } from './types';

import EmailIcon from '@/assets/icons/email-icon.svg?react';
import HomeIcon from '@/assets/icons/home-icon.svg?react';
import BookIcon from '@/assets/icons/book-icon.svg?react';
import ProjectIcon from '@/assets/icons/project-icon.svg?react';

const listNavigation: NavigationTypes[] = [
  { name: 'home',      icon: HomeIcon,    url: '/'          },
  { name: 'projects',  icon: ProjectIcon, url: '/projects'  },
  { name: 'formation', icon: BookIcon,    url: '/formation' },
  { name: 'contact',   icon: EmailIcon,   url: '/contact'   }
];

export default listNavigation;
