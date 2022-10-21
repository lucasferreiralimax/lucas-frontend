import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Home = lazy(() => import('./views/Home'));
const Projects = lazy(() => import('./views/Projects'));
const Contact = lazy(() => import('./views/Contact'));
const Formations = lazy(() => import('./views/Formations'));

const App = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div className='container'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/formation" element={<Formations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App;
