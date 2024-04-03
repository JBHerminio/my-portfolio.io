import React from 'react';
import './Section.css';

import Home from "./home/Home.js";
import About from './about/About';
import Services from './services/Services';
import Contact from './contact/Contact';
import Skills from './skills/Skills';
// import Login from '../../loginPage/Login.js';

function Section() {
  return (
    <>
      {/* <Login /> */}
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
    </>
  );
}

export default Section;
