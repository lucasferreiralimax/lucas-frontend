import { useEffect, useState } from 'react';

import './style.scss';

interface ObjectVariable {
  name: string;
  value: string;
}

const Theme = () => {
  const darkmode = localStorage.getItem("darkmode");
  const [ themeValue, setThemeValue ] = useState(
    darkmode == null ? false : JSON.parse(darkmode)
  );

  const changeTheme = () => setThemeValue(!themeValue);

  const setStyleVariables = (objectVariables: ObjectVariable[]) => {
    for(let { name, value } of objectVariables) {
      document.documentElement.style.setProperty(name, value);
    }
  };

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(themeValue));

    if (themeValue) {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');

      setStyleVariables([
        { name: 'color',                   value: '#fff'        },
        { name: 'background',              value: '#222'        },
        { name: '--main-color',            value: '#fff'        },
        { name: '--main-color-rgb',        value: '255,255,255' },
        { name: '--main-bg-color-primary', value: '#222222'     },
      ]);
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');

      setStyleVariables([
        { name: 'color',                   value: '#222'        },
        { name: 'background',              value: '#fff'        },
        { name: '--main-color',            value: '#222'        },
        { name: '--main-color-rgb',        value: '0,0,0'       },
        { name: '--main-bg-color-primary', value: '#fff'        }
      ]);
    }
  }, [themeValue]);

  return (
    <button className='app-theme' data-testid="app-theme" onClick={changeTheme}>
      {themeValue &&
        <svg fill="var(--main-color)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25">
          <path d="M63.437 38.46a1 1 0 0 0-1.227.292c-1.28 1.665-2.945 3.2-4.95 4.562-11.618 7.881-27.545 4.925-35.497-6.595-7.816-11.32-4.99-26.974 6.296-34.894a1 1 0 0 0-.722-1.808c-4.648.696-9.207 2.49-13.188 5.19-7.178 4.869-12.007 12.22-13.596 20.7-1.582 8.442.24 16.994 5.13 24.08 6.288 9.106 16.487 14.006 26.856 14.006a32.49 32.49 0 0 0 18.294-5.616c6.58-4.462 11.246-11.13 13.14-18.776a1 1 0 0 0-.536-1.14zM49.71 56.723c-13.871 9.41-32.885 5.883-42.38-7.872-4.586-6.642-6.295-14.66-4.812-22.574 1.49-7.952 6.02-14.847 12.754-19.415a30.468 30.468 0 0 1 8.365-3.973c-9.392 9.07-11.142 23.926-3.52 34.967 8.573 12.42 25.741 15.61 38.266 7.114.826-.561 1.6-1.15 2.318-1.765-2.22 5.443-6.024 10.15-10.991 13.518z"/>
        </svg>
      }
      {!themeValue &&
        <svg fill="var(--main-color)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" width="25" height="25">
          <path d="M165 80c-46.867 0-84.996 38.131-84.996 85.001C80.004 211.87 118.133 250 165 250c46.871 0 85.004-38.13 85.004-84.999C250.004 118.131 211.871 80 165 80zM165 50c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15zM165 280c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15zM315 150h-20c-8.284 0-15 6.716-15 15s6.716 15 15 15h20c8.284 0 15-6.716 15-15s-6.716-15-15-15zM49.999 165c0-8.284-6.716-15-15-15H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h19.999c8.284 0 15-6.716 15-15zM256.924 88.076c3.839 0 7.678-1.465 10.607-4.394l14.142-14.143c5.858-5.858 5.857-15.356 0-21.213-5.858-5.857-15.356-5.857-21.213 0L246.317 62.47c-5.858 5.858-5.857 15.356.001 21.213a14.95 14.95 0 0 0 10.606 4.393zM62.47 246.317l-14.143 14.142c-5.858 5.857-5.858 15.355 0 21.213a14.951 14.951 0 0 0 10.607 4.393 14.95 14.95 0 0 0 10.606-4.393l14.143-14.142c5.858-5.857 5.858-15.355.001-21.213-5.859-5.857-15.356-5.859-21.214 0zM267.53 246.317c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l14.142 14.142a14.953 14.953 0 0 0 10.606 4.393c3.839 0 7.678-1.464 10.607-4.393 5.858-5.858 5.858-15.355 0-21.213l-14.142-14.142zM62.469 83.683c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213L69.54 48.328c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l14.142 14.142z"/>
        </svg>
      }
      <span>{themeValue ? 'Dark' : 'Light'} Mode</span>
    </button>
  )
}

export default Theme;
