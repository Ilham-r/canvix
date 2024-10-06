import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
const Projects = [
  ["./images/project1.png", "Web UI design", "Creative  UI design"],
  ["./images/project2.png", "UI Design", "Creative Rebranding for logo"],
  [
    "./images/project3.png",
    "To design Digital Strategy",
    "Social Media Marketing",
  ],
  ["./images/project4.png", "UI design", "Creative Rebranding for logo"],
  ["./images/project5.png", "Graphic design ", "Graphic design "],
  ["./images/project6.png", "UI Design", "Creative Rebranding for logo"],
];
const Portfolio = () => {
  return (
    <div className=" flex w-full px-10 pt-28 gap-28 min-h-screen items-center justify-center flex-col ">
      <div className="flex w-[80%] justify-center items-center gap-14 max-lg:w-full flex-col ">
        <div className="flex w-full  justify-center items-center rounded-[20px] bg-LightBlack text-white  p-16">
          <p className="text-h4 font-roboto">Portfolio</p>
        </div>
        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
          {Projects?.map((project) => (
            <ProjectCard
              image={project[0]}
              text={project[1]}
              title={project[2]}
              project={true}
            />
          ))}
        </div>
      </div>
      <div className=" flex w-full   justify-center items-center pb-10 ">
        <div
          className="flex w-[80%] relative bg-cover bg-center justify-center p-5 items-center gap-4  flex-col max-lg:w-full "
          style={{ backgroundImage: "url('./images/wavy.png')" }}
        >
          <div className="absolute inset-0  flex bg-black opacity-40 pointer-events-none rounded-[20px]"></div>
          <p className="font-roboto text-h5 z-10 text-white">
            Enough talk, let’s get to work
          </p>
          <Button text="Get in touch " color={true} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
