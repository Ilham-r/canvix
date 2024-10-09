"use client";
import projects from "@/Utilities/projects";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ProjectContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="flex w-full px-10 pt-28 gap-28 min-h-screen items-center flex-col">
      <div className="flex w-[80%] items-center gap-14 max-lg:w-full flex-col">
        <div
          className="w-full relative h-[400px] rounded-[20px] bg-cover bg-center items-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="flex absolute bottom-[-40px] justify-between left-1/2 transform -translate-x-1/2 w-[80%] max-lg:w-full max-md:relative max-md:justify-center max-md:flex-wrap max-md:gap-4">
            <div className="flex flex-col gap-2 bg-black text-white p-3 rounded-[20px]">
              <p className="font-roboto">Category:</p>
              <p className="text-bodysmall">{project.category}</p>
            </div>
            <div className="flex flex-col gap-2 bg-black text-white p-3 rounded-[20px]">
              <p className="font-roboto">Client:</p>
              <p className="text-bodysmall">{project.client}</p>
            </div>
            <div className="flex flex-col gap-2 bg-black text-white p-3 rounded-[20px]">
              <p className="font-roboto">Date:</p>
              <p className="text-bodysmall">{project.date}</p>
            </div>
            <div className="flex flex-col gap-2 bg-black text-white p-3 rounded-[20px]">
              <p className="font-roboto">Location:</p>
              <p className="text-bodysmall">{project.location}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full py-20 items-start justify-center gap-6 flex-col">
          <div className="flex gap-3 flex-col">
            <p className="font-roboto">01. The Challenge</p>
            <p className="text-bodysmall">{project.challenge}</p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="font-roboto">02. The Solution</p>
            <p className="text-bodysmall">{project.solotion}</p>{" "}
          </div>
          <div className="flex gap-3 flex-col">
            <p className="font-roboto">03. The Result</p>
            <p className="text-bodysmall">{project.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProjectContent />
  </Suspense>
);

export default Project;
