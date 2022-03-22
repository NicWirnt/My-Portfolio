import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// or less ideally
// import { Button } from 'react-bootstrap';

import './App.css';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';



function App() {
  return (
    <div className='wrapper'>
      <DefaultLayout>
        {/* SECTION */}
        <Skills/>

        {/* PROJECT SECTION */}
        <Projects />

        {/* ABOUT ME */}
        <About />

        {/* Contact Section */}
        <Contact />

        
      </DefaultLayout>
    </div>
  );
}

export default App;
