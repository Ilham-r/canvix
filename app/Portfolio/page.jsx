"use client";

import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import projects from "@/Utilities/projects";

const Portfolio = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/Portfolio/Project?id=${id}`);
  };

  return (
    <div className="flex w-full justify-center items-center gap-28 min-h-screen px-10 pt-28 flex-col ">
      <div className="flex w-[80%] justify-center items-center gap-14 max-lg:w-full flex-col">
        <div className="flex w-full justify-center items-center rounded-[20px] bg-LightBlack text-white p-16">
          <p className="text-h4 font-roboto">Portfolio</p>
        </div>
        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
          {projects?.map((project) => (
            <div key={project.id} onClick={() => handleClick(project.id)}>
              <ProjectCard
                image={project.image}
                text={project.title}
                title={project.description}
                project={true}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center items-center pb-10">
        <div
          className="flex w-[80%] relative bg-cover bg-center justify-center p-5 items-center gap-4 flex-col max-lg:w-full"
          style={{ backgroundImage: "url('./images/wavy.png')" }}
        >
          <div className="absolute inset-0 flex bg-black opacity-40 pointer-events-none rounded-[20px]"></div>
          <p className="font-roboto text-h5 z-10 text-white">
            Enough talk, let’s get to work
          </p>
          <Button text="Get in touch" color={true} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
