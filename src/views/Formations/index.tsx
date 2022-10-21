import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Formation from '../../components/Formation';

import './style.scss';

import Mesquita from '../../../src/assets/formations/mesquita.jpg';
import Alura from '../../../src/assets/formations/alura.jpg';
import Origamid from '../../../src/assets/formations/origamid.jpg';
import CEI from '../../../src/assets/formations/cei.jpg';
import Senac from '../../../src/assets/formations/senac.jpg';

const Formations = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.projects')}`;
  }, []);

  const formations = [
    {
      title: t('pageFormations.senac.title'),
      description: t('pageFormations.senac.description'),
      url: "www.senac.br",
      photo: Senac
    },
    {
      title: t('pageFormations.alura.title'),
      description: t('pageFormations.alura.description'),
      url: "cursos.alura.com.br/user/lucasferreiralimax",
      photo: Alura
    },
    {
      title: t('pageFormations.cei.title'),
      description: t('pageFormations.cei.description'),
      photo: CEI
    },
    {
      title: t('pageFormations.mesquita.title'),
      description: t('pageFormations.mesquita.description'),
      url: "jornalista-francisco-mesquita.web.app",
      photo: Mesquita
    }
  ];

  return (
    <>
      <h2>📚 { t('navigation.formation') }</h2>
      <div className='formations'>
        {formations.map((item, index) => {
          return <>
            <Formation
              dataTestid={`app-formation-${++index}`}
              data={item}
            />
          </>
        })}
      </div>
    </>
  )
}

export default Formations;
