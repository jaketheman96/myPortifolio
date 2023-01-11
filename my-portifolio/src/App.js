import './App.css';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <ParticlesBackground />
    </div>
  );
}

export default App;
