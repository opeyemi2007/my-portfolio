// src/components/ParticlesBg.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: "#FF5722" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 2, max: 5 } },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;