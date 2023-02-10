import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const views = [
  { url: '/',          component: lazy(() => import('./views/Home'))       },
  { url: '/projects',  component: lazy(() => import('./views/Projects'))   },
  { url: '/contact',   component: lazy(() => import('./views/Contact'))    },
  { url: '/formation', component: lazy(() => import('./views/Formations')) },
];

const App = () => {
  return (
    <div className='app-container' data-testid='app-container'>
      <Suspense fallback={<Loading/>}>
        <Header />
        <main>
          <Routes>
            {views.map((view, index) => (
              <Route key={++index} path={view.url} element={<view.component />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
