import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as TypeSkill } from "../typings";

type Props = {
  skills: TypeSkill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col
     text-center md:text-left xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 lg:grid-cols-6 gap-5">
        {skills.slice(0, skills.length / 2).map((s, i) => (
          <Skill key={s._id} skill={s} directionLeft={false} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((s, i) => (
          <Skill key={s._id} skill={s} directionLeft={true} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
