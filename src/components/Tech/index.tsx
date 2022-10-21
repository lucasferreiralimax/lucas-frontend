import './style.scss';

import { ReactComponent as HTML } from '../../assets/techs/html.svg';
import { ReactComponent as CSS } from '../../assets/techs/css.svg';
import { ReactComponent as Vue } from '../../assets/techs/vue.svg';
import { ReactComponent as JS } from '../../assets/techs/js.svg';
import { ReactComponent as React } from '../../assets/techs/react.svg';
import { ReactComponent as Angular } from '../../assets/techs/angular.svg';
import { ReactComponent as Typescript } from '../../assets/techs/typescript.svg';
import { ReactComponent as Svelte } from '../../assets/techs/svelte.svg';
import { ReactComponent as Webpack } from '../../assets/techs/webpack.svg';
import { ReactComponent as Vite } from '../../assets/techs/vite.svg';

const techs = [
  {
    title: "HTML",
    icon: <HTML />,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
  },
  {
    title: "CSS",
    icon: <CSS />,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
  },
  {
    title: "JavaScript",
    icon: <JS />,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Javascript"
  },
  {
    title: "Typescript",
    icon: <Typescript />,
    url: "https://www.typescriptlang.org/docs"
  },
  {
    title: "Vue",
    icon: <Vue />,
    url: "https://vuejs.org"
  },
  {
    title: "React",
    icon: <React />,
    url: "https://reactjs.org"
  },
  {
    title: "Angular",
    icon: <Angular />,
    url: "https://angular.io"
  },
  {
    title: "Svelte",
    icon: <Svelte />,
    url: "https://svelte.dev"
  },
  {
    title: "Webpack",
    icon: <Webpack />,
    url: "https://webpack.js.org"
  },
  {
    title: "Vite",
    icon: <Vite />,
    url: "https://vitejs.dev"
  }
]

const Tech = () => {
  return (
    <section className="app-tech" data-testid="app-tech">
      {techs.map((item, index) => (
        <a href={item.url} target="_blank" key={`tech-${index}`}>
          {item.icon}
        </a>
      ))}
    </section>
  )
}

export default Tech;
