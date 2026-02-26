import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Invitation from './components/Invitation';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-alabaster min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Philosophy />
      <Experience />
      <Invitation />
      <Footer />
    </main>
  );
}

export default App;
