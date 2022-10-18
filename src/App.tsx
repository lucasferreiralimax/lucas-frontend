import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Home = lazy(() => import('./views/Home'));
const Projects = lazy(() => import('./views/Projects'));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  )
}

export default App
