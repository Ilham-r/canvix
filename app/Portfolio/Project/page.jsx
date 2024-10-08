"use client";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/Utilities/projects";
const Project = () => {
  const id = 1;

  const project = projects.find((project) => project.id === Number(id));

  const filteredProjects = projects.filter((project) => project.id !== id);

  const res_projects = filteredProjects.slice(0, 3);

  return (
    <div className=" flex w-full px-10 pt-28 gap-28 min-h-screen items-center  flex-col ">
      <div className="flex w-[80%] items-center gap-14 max-lg:w-full flex-col ">
        <div
          className="w-full relative h-[400px] rounded-[20px] bg-cover bg-center items-center  "
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="flex  absolute bottom-[-40px]   justify-between left-1/2 transform -translate-x-1/2 w-[80%] max-lg:w-full max-md:relative max-md:justify-center max-md:flex-wrap max-md:gap-4 ">
            <div className="flex flex-col gap-2  bg-black text-white p-3 rounded-[20px] ">
              <p className="font-roboto">Category:</p>
              <p className="text-bodysmall">{project.category}</p>
            </div>
            <div className="flex flex-col gap-2  bg-black text-white p-3 rounded-[20px] ">
              <p className="font-roboto">Client:</p>
              <p className="text-bodysmall">{project.client}</p>
            </div>
            <div className="flex flex-col gap-2  bg-black text-white p-3 rounded-[20px] ">
              <p className="font-roboto">Date:</p>
              <p className="text-bodysmall">{project.date}</p>
            </div>
            <div className="flex flex-col gap-2  bg-black text-white p-3 rounded-[20px] ">
              <p className="font-roboto">Location:</p>
              <p className="text-bodysmall">{project.location}</p>
            </div>
          </div>
        </div>
        <div className=" flex w-full py-20 items-start justify-center gap-6 flex-col">
          <div className="flex gap-3 flex-col">
            <p className="font-roboto">01. The Challenge</p>
            <p className="text-bodysmall">{project.challenge}</p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="font-roboto">02. The Solution</p>
            <p className="text-bodysmall">{project.challenge}</p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="font-roboto">03. The Result</p>
            <p className="text-bodysmall">{project.result}</p>
          </div>
        </div>

        <div className="flex w-full pb-20  items-center justify-center gap-6 max-lg:flex-wrap ">
          <img
            src="/images/detail1.png"
            alt="project detail"
            className="rounded-[20px] w-[300px] h-[300px]  "
          />
          <img
            src="/images/detail2.png"
            alt="project detail"
            className="rounded-[20px] w-[300px] h-[300px]  "
          />
          <img
            src="/images/detail3.png"
            alt="project detail"
            className="rounded-[20px] w-[300px] h-[300px]  "
          />
        </div>
        <p className="font-roboto text-h4">Recent Projects </p>
        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1 pb-28 ">
          {res_projects?.map((proj) => (
            <ProjectCard
              image={proj.image}
              title={proj.title}
              text={proj.description}
              project={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
