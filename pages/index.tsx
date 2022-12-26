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
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo = Object(defaultPageInfo),
  experiences = [],
  skills = [],
  projects = [],
  socials = [],
}: Props) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
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
        <Header socials={socials} />
        <section id="hero" className="snap-center">
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
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

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};

const defaultPageInfo = {
  _type: "pageInfo",
  address: "street, city, state, country",
  backgroundInformation:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, beatae?",
  email: "hello@example.com",
  role: "Full Stack Developer",
  heroImage: "",
  profilePicture: "",
  name: "Hello World",
  phoneNumber: "+111111",
  _createdAt: Date.now(),
  _id: "id",
  _rev: "rev",
  _updatedAt: Date.now(),
};
