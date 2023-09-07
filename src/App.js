import React, { useState } from 'react';
import Navigation from './components/Navigation'; // Correct the import path
import About from './components/AboutSection'; // Correct the import path
import Portfolio from './components/Portfolio'; // Correct the import path
import Contact from './components/Contact'; // Correct the import path

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('about');

  const handleNavigationChange = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <div>
      <Navigation onNavigationChange={handleNavigationChange} />
      {selectedNavItem === 'about' && <About />}
      {selectedNavItem === 'portfolio' && <Portfolio />}
      {selectedNavItem === 'contact' && <Contact />}
    </div>
  );
}

export default App;




