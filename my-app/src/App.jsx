import { useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Header from './components/header';
import SlideText from './components/SlideText';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DreamProjects from './components/DreamProjects';
import InspiredPeople from './components/InspiredPeople';
import FavoriteBooks from './components/FavoriteBooks';
import NavalThoughts from './components/NavalThoughts';
import MarketData from './components/MarketData';
import Chatbot from './components/Chatbot';
import SpeechCraftingTool from './components/SpeechCraftingTool';
import HourlyTracker from './components/HourlyTracker';
import Timetable from './components/Timetable';
import GitHubRepos from './components/GitHubRepos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#E09F3E' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SlideText />
      <About />
      <Skills />
      <Projects />
      <DreamProjects />
      <InspiredPeople />
      <FavoriteBooks />
      <NavalThoughts />
      <MarketData />
      <Chatbot />
      <SpeechCraftingTool />
      <HourlyTracker />
      <Timetable />
      <GitHubRepos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;