
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Guides from './components/Guides';
import Audiobooks from './components/Audiobooks';
import Podcast from './components/Podcast';
import Chat from './components/Chat';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Guides />
        <Audiobooks />
        <Podcast />
        <Chat />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
