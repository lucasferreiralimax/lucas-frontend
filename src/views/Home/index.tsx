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
    <div className='app-home' data-testid='app-home'>
      <img width='70%' className='app-profile__photo' src={Lucas} alt='Lucas Ferreira de Lima' />
      <p>
        {t<string>('pageHome.paragraphOne.textOne')}<br/>
        {t<string>('pageHome.paragraphOne.textTwo')}
      </p>
      <p>
        {t<string>('pageHome.paragraphTwo.textOne')}<br/>
        {t<string>('pageHome.paragraphTwo.textTwo')}<br/>
        {t<string>('pageHome.paragraphTwo.textThree')}<br/>
        {t<string>('pageHome.paragraphTwo.textFour')}
      </p>
      <p>
        {t<string>('pageHome.paragraphThree.textOne')}<br/>
        {t<string>('pageHome.paragraphThree.textTwo')}<br/>
        {t<string>('pageHome.paragraphThree.textThree')}<br/>
        {t<string>('pageHome.paragraphThree.textFour')}
      </p>
      <p>
        {t<string>('pageHome.paragraphFour.textOne')}<br/>
        {t<string>('pageHome.paragraphFour.textTwo')}<br/>
        {t<string>('pageHome.paragraphFour.textThree')}
      </p>
      <Tech />
    </div>
  )
}

export default Home;
