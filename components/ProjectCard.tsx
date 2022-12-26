import React from "react";
import { Project, Technology } from "../typings";
import { urlFor } from "../config/sanity";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

type Props = { project: Project };

function ProjectCard({ project }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-12 xl:p-24 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={
          project?.image
            ? urlFor(project.image).url()
            : "/images/project-thumbnail.png"
        }
        alt="project"
        className="w-full h-72 object-contain pt-10 md:pt-10 xl:pt-0"
      />
      <div className="space-y-2 xl:space-y-5 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            {project?.title}
          </span>
        </h4>
        <div className="flex items-center justify-center space-x-2">
          {project?.technologies.map((tech: Technology) => (
            <Tooltip key={tech._id} text={tech.title}>
              <img
                src={
                  tech?.image
                    ? urlFor(tech.image).url()
                    : "/images/project-thumbnail.png"
                }
                alt="technology"
                className="w-10 h-10 object-contain cursor-pointer"
              />
            </Tooltip>
          ))}
        </div>

        <p className="text-lg text-center md:text-left max-h-60 max-w-5xl overflow-y-scroll scrollbar-thin scrollbar-track-blue-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {project?.summary}
        </p>
      </div>
      <div className="pt-2">
        {project?.githubLink && (
          <a
            target="_blank"
            href={project.githubLink}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
