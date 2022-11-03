import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';

import Tech from '@/components/Tech';

import './style.scss';
import Lucas from '@/assets/lucaslucas.jpg';

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
          width={250}
          height={250}
          onLoad={() => setLoadingImage(false)}
        />
      </Tooltip>
      {skeletonImage && (
        <Skeleton
          variant="circular"
          className='app-profile__photo-skeleton'
          width={250}
          height={250}
        />
      )}
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
