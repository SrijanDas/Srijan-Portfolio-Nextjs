import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { options } from "../config/particles-config";
import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from "../components";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );
  return (
    <>
      <Particles
        // className="-z-50"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <div
        className="text-white h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
   scrollbar-thin scrollbar-track-blue-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </>
  );
}

{
  /* <h1>Hello, World!</h1>
            <h1>I'm Srijan.</h1>
            <p className="bio">
              Computer Science Engineering Grad(2022) from{" "}
              <a href="https://www.galgotiasuniversity.edu.in/" target="_blank">
                Galgotias
              </a>
              , India. 
              I like to work with TS, JS and it's various frameworks. Python is
              my 2nd language of choice. I have built many projects on AI-ML.
              This website shows my contact details, past experience along with
              some of the projects that I have worked on.
            </p> */
}
