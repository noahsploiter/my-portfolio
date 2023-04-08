import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Experience, Technology } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experiences: Experience;
};

export default function ExperienceCard({ experiences }: Props) {
  function technology(
    value: Technology,
    index: number,
    array: Technology[]
  ): ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <article
      className="flex flex-col rounded-lg items-center mt-[100px]  flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] xl:h-[480px] snap-center bg-[#292929] p-[10px] hover:opacity-100 xl:ml-10
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden h-[450px]"
    >
      <motion.img
        initial={{
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-[60px] h-[60px] rounded-full object-cover object-center"
        src={urlFor(experiences?.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <p className="font-bold text-2xl mt-1">{experiences.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experiences.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <div className="w-[200px] mt-[20px]">
          <p>{experiences.company}</p>
        </div>
        {/* This is for work experience stared date and end date */}
        {/* <p className="uppercase py-5 text-gray-300">
          {new Date(experiences.dateStarted).toDateString()} -{" "}
          {experiences.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experiences.dateEnded).toDateString()}
        </p> */}

        <ul className="list-disc space-y-2 ml-5 text-lg h-[200px] overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-white">
          {experiences.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
