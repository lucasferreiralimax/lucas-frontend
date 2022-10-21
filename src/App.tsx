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
    <Suspense fallback={<Loading/>}>
      <div className='container'>
        <Header />
        <main>
          <Routes>
            {views.map((view) => <Route path={view.url} element={<view.component />} />)}
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App;
