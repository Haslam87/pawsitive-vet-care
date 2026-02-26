import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FearFreeTabs from './components/FearFreeTabs';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-alabaster min-h-screen">
      <Navbar />
      <Hero />
      <FearFreeTabs />
      <Services />
      <Philosophy />
      <Experience />
      <LeadCapture />
      <Footer />
    </main>
  );
}

export default App;
