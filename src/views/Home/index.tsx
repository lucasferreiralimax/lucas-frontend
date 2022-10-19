import { useTranslation } from 'react-i18next';

import './style.scss';

const Home = () => {
  const { t } = useTranslation();

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
    </>
  )
}

export default Home;
