import './App.css';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ParticlesBackground />
    </div>
  );
}

export default App;
