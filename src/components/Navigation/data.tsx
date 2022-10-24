import { ReactComponent as EmailIcon } from '@/assets/icons/email-icon.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home-icon.svg';
import { ReactComponent as BookIcon } from '@/assets/icons/book-icon.svg';
import { ReactComponent as ProjectIcon } from '@/assets/icons/project-icon.svg';

const listNavigation = [
  { name: "home",      icon: HomeIcon,    url: "/"          },
  { name: "projects",  icon: ProjectIcon, url: "/projects"  },
  { name: "formation", icon: BookIcon,    url: "/formation" },
  { name: "contact",   icon: EmailIcon,   url: "/contact"   }
];

export default listNavigation;
