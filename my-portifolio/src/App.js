import { Route, Routes } from 'react-router-dom';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
      <ParticlesBackground />
    </div>
  );
}

export default App;
