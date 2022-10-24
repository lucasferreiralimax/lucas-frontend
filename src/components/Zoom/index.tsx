import { useEffect, useState } from 'react';
import './style.scss';

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
    } else {
      document.body.removeAttribute('style');
    }
  }, [figureZoom]);

  useEffect(() => {
    const updateWidthAndHeight = () => {
      setWidth(getWidth(window.innerWidth < window.innerHeight))
      setHeight(getHeight(window.innerWidth < window.innerHeight))
    };

    window.addEventListener("resize", updateWidthAndHeight)
    return () => {
      window.removeEventListener("resize", updateWidthAndHeight)
    }
  }, [height, width, setWidth, setHeight])

  return (
    <section className='app-zoom' data-testid="app-zoom">
      <div
        className={figureZoom ? 'content active' : 'content'}
        onClick={HandleZoom}
      >
        <img
          width={figureZoom ? width : size?.width}
          height={figureZoom ? height : size?.height}
          src={img}
          alt={alt}
        />
      </div>
    </section>
  )
}

export default Zoom;
