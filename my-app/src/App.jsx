import { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Header from './components/Header';
import SlideText from './components/SlideText';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={`app ${theme}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: theme === 'dark' ? '#0D1B2A' : '#EAEAEA',
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#E09F3E',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SlideText />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;