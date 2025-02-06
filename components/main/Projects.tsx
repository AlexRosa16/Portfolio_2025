import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis Proyectos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/VoidBoosting.jpg"
          title="VoidBoosting"
          description="VoidBoosting es un proyecto full stack donde se implementan tecnologias como HTML, CSS, Javascript, PHP y MySQL."
          href="https://github.com/AlexRosa16/Voidboosting-Updated"
        />
        <ProjectCard
          src="/portfolio.png"
          title="Portfolio Modern Next.js"
          description="Mi Portfolio es un proyecto donde implemento tecnologias como React, TypeScript, Next.Js."
          href="https://portfolio-2025-eight-taupe.vercel.app"
        />
        <ProjectCard
          src="/earth.png"
          title="Model 3D Earth"
          description="Earth es un pequeño proyecto donde implemento un modelo 3D de nuestro planeta tierra funcional e interactuable."
          href="https://github.com/AlexRosa16/EarthModel3D"
        />
      </div>
    </div>
  );
};

export default Projects;
