import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

import Tech from '../../components/Tech';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Lucas Front-end";
  }, []);

  return (
    <>
      <p>
        {t('pageHome.paragraphOne.textOne')}<br/>
        {t('pageHome.paragraphOne.textTwo')}
      </p>
      <p>
        {t('pageHome.paragraphTwo.textOne')}<br/>
        {t('pageHome.paragraphTwo.textTwo')}<br/>
        {t('pageHome.paragraphTwo.textThree')}
      </p>

      <p>
        {t('pageHome.paragraphThree.textOne')}<br/>
        {t('pageHome.paragraphThree.textTwo')}<br/>
        {t('pageHome.paragraphThree.textThree')}<br/>
        {t('pageHome.paragraphThree.textFour')}
      </p>

      <p>
        {t('pageHome.paragraphFour.textOne')}<br/>
        {t('pageHome.paragraphFour.textTwo')}<br/>
        {t('pageHome.paragraphFour.textThree')}
      </p>

      <Tech />
    </>
  )
}

export default Home;
