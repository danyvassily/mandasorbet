import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Recipe from './components/Recipe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <Hero />
      <About />
      <Gallery />
      <Recipe />
      <Footer />
    </div>
  );
}

export default App; 