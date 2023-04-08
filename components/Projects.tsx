import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
      >
        <h3 className="absolute top-[90px] uppercase tracking-[15px] text-gray-500 text-2xl xl:mt-[-40px]">
          Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#205fb1]/80 bottom-[50px] ">
          {projects?.map((project, i) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center pt-[70px] md:p-44 h-screen"
            >
              <motion.img
                className="rounded-sm object-contain xl:w-[300px] xl:h-[300px] w-[200px] h-[200px] mt-[120px]"
                initial={{
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
              />

              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="">
                    {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      className="rounded-full h-[40px] w-[40px]"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                    />
                  ))}
                </div>

                <p className="text-lg text-center md:text-left">
                  {project.summary}
                </p>
                <p className="text-lg text-center md:text-left">
                  <a
                    href={project?.linkToBuild}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h4 className="border border-[#205fb1] flex justify-center rounded-md h-[40px] items-center text-blue-600">
                      Check out the project
                    </h4>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#205fb1]/10 left-0 h-[500px] -skew-y-12" />
      </motion.div>
    </div>
  );
}

export default Projects;
