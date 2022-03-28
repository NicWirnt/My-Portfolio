import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Hero } from './components/hero/Hero';



function App() {

  const handleOnClick = (value) =>{
    console.log(value)
  }

  const [showComp, setShowComp] = useState("home");


  return (
    <div className='wrapper'>
      <BrowserRouter >
        
        <DefaultLayout>

          <div className="slider">
          <i class="fas fa-home" onClick={() =>handleOnClick("home")}></i>
          <i class="fas fa-toolbox" onClick={() =>handleOnClick("skills")}></i>
          <i class="fas fa-user" onClick={() =>handleOnClick("about")}></i>
          <i class="fas fa-project-diagram" onClick={() =>handleOnClick("projects")} ></i>
          <i class="fas fa-address-book" onClick={() =>handleOnClick("contact")}></i>
          </div>
          

          {/* <Routes> */}
            {showComp === "home"  && <Hero />}
            {/* <Route path="/" element={<Hero />}  */}
            {showComp === "about" && <About />}
            {/* <Route path="about-me" element={<About />} /> */}
            {showComp === "skills" && <Skills />}
            {/* <Route path="skills" element={<Skills />} /> */}
            {showComp === "projects" && <Projects />}
            {/* <Route path="projects" element={<Projects />} /> */}
            {showComp === "contact" && <Contact />}
            {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Skills/>
          <Projects />
          <About />
          <Contact /> */}
          {/* </Routes> */}
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
