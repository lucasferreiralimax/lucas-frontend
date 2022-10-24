import { useEffect, useState } from 'react';

import { TechType } from './types';
import techs from './data';
import './style.scss';

type TechProps = {
  show?: string[];
}

const Tech = ({ show } : TechProps) => {
  const [list, setList] = useState<TechType[]>([]);

  useEffect(() => {
    show
      ? setList(techs.filter((item: TechType) => show.includes(item.title)))
      : setList(techs);
  }, []);

  return (
    <section className="app-tech" data-testid="app-tech">
      {list.map((item: TechType) => (
        <a
          href={item.url}
          target="_blank"
          key={`tech-${item.title}`}
          className={`tech-${item.title}`}
        >
          <item.icon className='tech-icon' />
        </a>
      ))}
    </section>
  )
}

export default Tech;
