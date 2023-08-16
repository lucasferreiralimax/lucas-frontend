import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';

import Tech from '@/components/Tech';

import './style.scss';
import Lucas from '@/assets/lucaslima.png';

const Home = () => {
  const { t } = useTranslation();
  const [loadingImage, setLoadingImage] = useState(true);
  const [skeletonImage, setSkeletonImage] = useState(true);

  useEffect(() => {
    document.title = 'Lucas Front-end';
  }, []);

  useEffect(() => {
    setSkeletonImage(loadingImage);
  }, [loadingImage]);

  return (
    <div className='app-home' data-testid='app-home'>
      <Tooltip
        title='Lucas Ferreira de Lima'
        placement="top"
      >
        <img
          className={`app-profile__photo${!loadingImage ? ' show' : ''}`}
          alt='Lucas Ferreira de Lima'
          src={Lucas}
          width={150}
          height={150}
          onLoad={() => setLoadingImage(false)}
        />
      </Tooltip>
      {skeletonImage && (
        <Skeleton
          variant="circular"
          className='app-profile__photo-skeleton'
          width={150}
          height={150}
        />
      )}
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
