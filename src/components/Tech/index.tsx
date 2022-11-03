import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

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
        <Tooltip
          key={`tech-${item.title}`}
          title={item.title}
          placement="bottom"
        >
          <a
            data-testid={`app-tech-${item.title.toLocaleLowerCase()}`}
            href={item.url}
            target='_blank'
            className={`app-tech__${item.title.toLocaleLowerCase()}`}
            role="link"
            aria-label={`Link ${item.title}`}
          >
              <item.icon className='app-tech__icon' />
          </a>
        </Tooltip>
      ))}
    </section>
  )
}

export default Tech;
