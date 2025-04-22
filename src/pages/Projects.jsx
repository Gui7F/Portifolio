import React from "react";
import ShinyText from "../components/ShinyText";
import Project from "../components/Project";

const Projects = () => {
  return (
      <div className="m-auto 2xl:w-3/4 w-[90%] 2xl:m-auto mb-[200px]">
        <div className="w-full m-auto bg-black border border-neutral-600 mb-4 flex items-center justify-center">
          <h1 className="2xl:text-5xl text-2xl text-center py-6">
             <ShinyText text={"Projetos"} />
          </h1>
        </div>
        <div>
          <Project />
        </div>
      </div>
  );
};

export default Projects;
