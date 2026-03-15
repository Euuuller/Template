import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="font-sans text-navy dark:text-slate-100 bg-bg-main dark:bg-[#050505] bg-dotted min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-300 relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
