import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particles-config';

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={ particlesInit }
      loaded={ particlesLoaded }
      options={ particlesConfig }
    />
  );
}

export default ParticlesBackground;
