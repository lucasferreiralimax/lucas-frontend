import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { FormationType } from '@/components/Formation/types';
import Formation from '@/components/Formation';
import formations from './data';

import './style.scss';

const Formations = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.formation')}`;
  }, [t]);

  return (
    <>
      <h2>{ t('navigation.formation') }</h2>
      <div className='app-formations' data-testid='app-formations'>
        {formations.map((item: FormationType, index: number) => {
          return (
            <Formation
              dataTestid={`app-formation-${++index}`}
              data={item}
              key={`formation-${++index}`}
            />
          )
        })}
      </div>
    </>
  )
}

export default Formations;
