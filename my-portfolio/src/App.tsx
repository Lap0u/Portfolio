import { useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Intro />
      <Portfolio />
      <Timeline />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
