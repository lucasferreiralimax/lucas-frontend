import { useEffect, useState } from 'react';
import './style.scss';

import Portal from '@/components/Portal'
import { useTranslation } from 'react-i18next';

type ZoomSize = {
  width?: string;
  height?: string;
}

type ZoomTypes = {
  size?: ZoomSize;
  img: string;
  alt: string;
};

const Zoom = ({size, img, alt} : ZoomTypes) => {
  const { t } = useTranslation();

  const initialCodition = window.innerWidth < window.innerHeight;

  const getWidth = (condition: boolean) => condition ? '90%' : 'auto';
  const getHeight = (condition: boolean) => condition ? 'auto' : '70%';

  const [figureZoom, setFigureZoom] = useState(false);
  const HandleZoom = () => setFigureZoom(!figureZoom);
  const [width, setWidth] = useState<string | number>(getWidth(initialCodition))
  const [height, setHeight] = useState<string | number>(getHeight(initialCodition))

  useEffect(() => {
    if (figureZoom) {
      document.body.style.overflow = 'hidden';
      document.title = `Zoom ${alt}`;
    } else {
      document.title = `Lucas ${t('navigation.projects')}`;
      document.body.removeAttribute('style');
    }
  }, [figureZoom]);

  useEffect(() => {
    const updateWidthAndHeight = () => {
      setWidth(getWidth(window.innerWidth < window.innerHeight))
      setHeight(getHeight(window.innerWidth < window.innerHeight))
    };

    window.addEventListener('resize', updateWidthAndHeight)
    return () => {
      window.removeEventListener('resize', updateWidthAndHeight)
    }
  }, [height, width, setWidth, setHeight])

  const FigureContent = () => (
    <div
      className={figureZoom ? 'app-zoom__content active' : 'app-zoom__content'}
      onClick={HandleZoom}
    >
      <img
        width={figureZoom ? width : size?.width}
        height={figureZoom ? height : size?.height}
        src={img}
        alt={alt}
      />
    </div>
  );

  return (
    <section className='app-zoom' data-testid='app-zoom'>
      {figureZoom ? <Portal><FigureContent /></Portal> : <FigureContent />}
    </section>
  )
}

export default Zoom;
