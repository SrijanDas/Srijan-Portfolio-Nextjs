import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import ProjectCard from "./ProjectCard";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="realative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-blue-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-blue-600/20 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
