import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Diagnostic from './components/Diagnostic';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('landing');

  const renderSection = () => {
    switch (currentSection) {
      case 'landing':
        return <Landing onEnter={() => setCurrentSection('diagnostic')} />;
      case 'diagnostic':
        return <Diagnostic />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Landing onEnter={() => setCurrentSection('diagnostic')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;