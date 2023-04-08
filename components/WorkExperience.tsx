import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-row text-left md:flex-row max-w-full p-[30px] justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[95px] uppercase tracking-[10px] text-gray-500 text-[17px]">
        Work-Experience
      </h3>

      <div className="w-full flex space-x-4 overflow-x-scroll p-[10px] snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#205fb1]/80 ">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experiences={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
