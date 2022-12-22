import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
        className="rounded-full border-2 border-gray-500 object-cover
        w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 bg-gray-300 bg-opacity-40"
      />
    </div>
  );
}

export default Skill;
