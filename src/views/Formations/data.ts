import { FormationType } from '@/components/Formation/types';

import Mesquita from '@/assets/formations/mesquita.jpg';
import Alura from '@/assets/formations/alura.jpg';
import Origamid from '@/assets/formations/origamid.jpg';
import CEI from '@/assets/formations/cei.jpg';
import Senac from '@/assets/formations/senac.jpg';

const formations: FormationType[] = [
  {
    translate: 'pageFormations.senac',
    url: "www.senac.br",
    photo: Senac,
    date: {
      start: "2012",
      end: "2013"
    }
  },
  {
    translate: 'pageFormations.alura',
    url: "cursos.alura.com.br/user/lucasferreiralimax",
    photo: Alura,
    date: {
      start: "2019",
      end: "2022"
    }
  },
  {
    translate: 'pageFormations.origamid',
    url: "www.origamid.com/certificate/475653bd",
    photo: Origamid,
    date: {
      start: "2021",
      end: "2022"
    }
  },
  {
    translate: 'pageFormations.cei',
    photo: CEI,
    date: {
      start: "2008",
      end: "2009"
    }
  },
  {
    translate: 'pageFormations.mesquita',
    url: "jornalista-francisco-mesquita.web.app",
    photo: Mesquita,
    date: {
      start: "2010",
      end: "2013"
    }
  }
];

export default formations;
