import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 3, 5];
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
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-24 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/images/project-thumbnail.png"
              alt="project"
              className="w-72 h-72 object-cover"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  E-Commerce Website
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                veritatis est, quisquam porro magni voluptatem molestias
                officiis rerum nam voluptas!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-blue-600/20 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
