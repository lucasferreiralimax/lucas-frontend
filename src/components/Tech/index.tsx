import { TechType } from './types';
import techs from './data';
import './style.scss';

const Tech = () => {
  return (
    <section className="app-tech" data-testid="app-tech">
      {techs.map((item: TechType) => (
        <a
          href={item.url}
          target="_blank"
          key={`tech-${item.title}`}
          className={`tech-${item.title}`}
        >
          <item.icon />
        </a>
      ))}
    </section>
  )
}

export default Tech;
