import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../config/sanity";
import Tooltip from "./Tooltip";

type Props = {
  directionLeft: boolean;
  skill: Skill;
};

function Skill({ directionLeft = false, skill }: Props) {
  return (
    <div className="group relative flex">
      <Tooltip text={skill.title}>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={skill?.image ? urlFor(skill.image).url() : ""}
          className="rounded-full border-2 border-gray-500 object-contain
        w-20 h-20  bg-gray-500 bg-opacity-20 cursor-pointer"
        />
      </Tooltip>
    </div>
  );
}

export default Skill;
