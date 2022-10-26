import { useEffect, useState } from 'react';

import { TechType, TechProps } from './types';
import techs from './data';
import './style.scss';

const Tech = ({ show } : TechProps) => {
  const [list, setList] = useState<TechType[]>([]);

  useEffect(() => {
    show
      ? setList(techs.filter((item: TechType) => show.includes(item.title)))
      : setList(techs);
  }, []);

  return (
    <section className='app-tech' data-testid='app-tech'>
      {list.map((item: TechType) => (
        <a
          data-testid={`app-tech-${item.title}`}
          href={item.url}
          target='_blank'
          key={`tech-${item.title}`}
          className={`app-tech__${item.title.toLocaleLowerCase()}`}
          role="link"
          aria-label={`Link ${item.title}`}
        >
          <item.icon className='app-tech__icon' />
        </a>
      ))}
    </section>
  )
}

export default Tech;
