import Mesquita from '../../../src/assets/formations/mesquita.jpg';
import Alura from '../../../src/assets/formations/alura.jpg';
import Origamid from '../../../src/assets/formations/origamid.jpg';
import CEI from '../../../src/assets/formations/cei.jpg';
import Senac from '../../../src/assets/formations/senac.jpg';

const formations = [
  {
    title: 'pageFormations.senac.title',
    description: 'pageFormations.senac.description',
    url: "www.senac.br",
    photo: Senac,
    date: {
      start: "2012",
      end: "2013"
    }
  },
  {
    title: 'pageFormations.alura.title',
    description: 'pageFormations.alura.description',
    url: "cursos.alura.com.br/user/lucasferreiralimax",
    photo: Alura,
    date: {
      start: "2019",
      end: "2022"
    }
  },
  {
    title: 'pageFormations.origamid.title',
    description: 'pageFormations.origamid.description',
    url: "www.origamid.com/certificate/475653bd",
    photo: Origamid,
    date: {
      start: "2021",
      end: "2022"
    }
  },
  {
    title: 'pageFormations.cei.title',
    description: 'pageFormations.cei.description',
    photo: CEI,
    date: {
      start: "2008",
      end: "2009"
    }
  },
  {
    title: 'pageFormations.mesquita.title',
    description: 'pageFormations.mesquita.description',
    url: "jornalista-francisco-mesquita.web.app",
    photo: Mesquita,
    date: {
      start: "2010",
      end: "2013"
    }
  }
];

export default formations;
