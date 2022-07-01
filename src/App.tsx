import React from 'react';

import './App.css';
import HomePage from './components/homepage/homepage';
import AboutMe from './components/about-me/about-me';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Experiences from './components/experiences/experiences';
import ContactUs from './components/contactus/contact-us';

function App() {
  return (
    <div>
      <HomePage/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Experiences/>
      <ContactUs/>
    </div>
  );
}

export default App;
