import React from "react";
import { motion } from "framer-motion";
import { Experience, Technology } from "../typings";
import { urlFor } from "../config/sanity";
import Tooltip from "./Tooltip";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] h-[35rem] snap-center p-10 bg-[#292929]
     opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={
          experience?.companyImage
            ? urlFor(experience.companyImage).url()
            : "/images/default-company-logo.jpg"
        }
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.companyName}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.length &&
            experience.technologies.map((tech: Technology, i) => (
              <Tooltip key={i} text={tech.title}>
                <img
                  src={
                    tech?.image
                      ? urlFor(tech.image).url()
                      : "/images/default-company-logo.jpg"
                  }
                  className="h-10 w-10 rounded-full object-contain"
                  alt="tech"
                />
              </Tooltip>
            ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 text-lg h-44 px-5 overflow-y-scroll scrollbar-thin scrollbar-track-blue-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
