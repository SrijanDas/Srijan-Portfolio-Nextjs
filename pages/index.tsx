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
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

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
        {/* <Link href="#hero">
          <footer className="sicky bottom-5 w-full cursor-pointer absolute">
            <div className="flex items-center justify-center">
              <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-bounce" />
            </div>
          </footer>
        </Link> */}
      </div>
    </>
  );
}
