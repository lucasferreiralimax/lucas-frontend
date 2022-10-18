import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';

import Language from './components/Language';
import Navigation from './components/Navigation';
import Loading from './components/Loading';

const Home = lazy(() => import('./views/Home'));
const Projects = lazy(() => import('./views/Projects'));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Language />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  )
}

export default App
