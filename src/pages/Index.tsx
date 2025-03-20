import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Analytics from '../components/Analytics';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Analytics pageName="Portfolio Home" />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
