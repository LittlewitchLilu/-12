import React from 'react';
import { createBrowserRouter } from 'react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Root() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
  },
]);
