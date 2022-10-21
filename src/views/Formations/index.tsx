import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Formation from '../../components/Formation';
import './style.scss';
import formations from './data'

const Formations = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.formation')}`;
  }, []);

  return (
    <>
      <h2>📚 { t('navigation.formation') }</h2>
      <div className='formations'>
        {formations.map((item, index) => {
          return <>
            <Formation
              dataTestid={`app-formation-${++index}`}
              data={item}
              key={`formation-${index}`}
            />
          </>
        })}
      </div>
    </>
  )
}

export default Formations;
