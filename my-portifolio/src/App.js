import { Route, Routes } from 'react-router-dom';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      <ParticlesBackground />
    </div>
  );
}

export default App;
