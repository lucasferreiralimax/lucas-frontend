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
      photo: Senac,
      date: {
        start: "2012",
        end: "2013"
      }
    },
    {
      title: t('pageFormations.alura.title'),
      description: t('pageFormations.alura.description'),
      url: "cursos.alura.com.br/user/lucasferreiralimax",
      photo: Alura,
      date: {
        start: "2019",
        end: "2022"
      }
    },
    {
      title: t('pageFormations.origamid.title'),
      description: t('pageFormations.origamid.description'),
      url: "www.origamid.com/certificate/475653bd",
      photo: Origamid,
      date: {
        start: "2021",
        end: "2022"
      }
    },
    {
      title: t('pageFormations.cei.title'),
      description: t('pageFormations.cei.description'),
      photo: CEI,
      date: {
        start: "2008",
        end: "2009"
      }
    },
    {
      title: t('pageFormations.mesquita.title'),
      description: t('pageFormations.mesquita.description'),
      url: "jornalista-francisco-mesquita.web.app",
      photo: Mesquita,
      date: {
        start: "2010",
        end: "2013"
      }
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
