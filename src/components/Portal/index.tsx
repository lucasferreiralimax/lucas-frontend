import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({
  children,
  className = 'root-portal',
  dataTestid = 'app-portal',
  element = 'div',
}: any) => {
  const [container] = useState(() => {
    const el = document.createElement(element)
    el.classList.add(className)
    el.dataset.testid = dataTestid
    return el
  })

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal;
