import { useEffect, useState, memo } from 'react';
import Particles, { initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { Container } from '@tsparticles/engine';

const BgParticles = () => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        setInit(true);
      } catch (error) {
        console.error("Error loading particles", error);
      }
    });
  }, []);

  const particlesLoaded = (container?: Container) => {
    return new Promise<void>((resolve) => {
      console.log(container);
      resolve();
    });
  }; 
  

  return (
    <div className="particles-container">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },                
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#808080",
              },
              links: {
                color: "#808080",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 180,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default memo(BgParticles);
