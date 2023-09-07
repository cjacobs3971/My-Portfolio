import React, { useState } from 'react';

function Navigation({ onNavigationChange }) {
  return (
    <nav>
      <ul>
        <li onClick={() => onNavigationChange('about')}>About Me</li>
        <li onClick={() => onNavigationChange('portfolio')}>Portfolio</li>
        <li onClick={() => onNavigationChange('contact')}>Contact Me</li>
      </ul>
    </nav>
  );
}

export default Navigation;
