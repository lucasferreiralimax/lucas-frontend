import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Tech from '@/components/Tech';

import './style.scss';
import Lucas from '@/assets/lucaslucas.jpg';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Lucas Front-end';
  }, []);

  return (
    <div className='app-home'>
      <img width='70%' className='app-profile__photo' src={Lucas} alt='Lucas Ferreira de Lima' />
      <p>
        {t('pageHome.paragraphOne.textOne')}<br/>
        {t('pageHome.paragraphOne.textTwo')}
      </p>
      <p>
        {t('pageHome.paragraphTwo.textOne')}<br/>
        {t('pageHome.paragraphTwo.textTwo')}<br/>
        {t('pageHome.paragraphTwo.textThree')}<br/>
        {t('pageHome.paragraphTwo.textFour')}
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
    </div>
  )
}

export default Home;
