import IdeaCard from "@/components/IdeaCard";
import ProjectCard from "@/components/ProjectCard";
import {
  faLightbulb,
  faEnvelope,
  faSliders,
  faCheckCircle,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const List = [
  [
    faLightbulb,
    "Idea",
    "The ideation process is a crucial phase in the design process where creative thinking and brainstorming",
  ],
  [
    faEnvelope,
    "Research",
    "Research is a critical component of the design process, helping designers understand the problem",
  ],
  [
    faSliders,
    "Create",
    "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation",
  ],
  [
    faCheckCircle,
    "Testing",
    "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements",
  ],
];
const Process = () => {
  return (
    <div className="flex w-full justify-center items-center p-10">
      <div className="flex w-[80%] flex-col gap-3 justify-center items-center">
        <p className="font-roboto text-LightGreen text-h6 ">Process</p>
        <p className=" font-roboto text-center text-h5 w-80">
          Process that moves things forward
        </p>
        <div className="grid w-full my-11  grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6">
          {List?.map((item) => (
            <IdeaCard icon={item[0]} title={item[1]} text={item[2]} />
          ))}
        </div>
        <p className="font-roboto text-h5">Recent Showcase</p>
        <div className="flex w-full gap-16 mt-10  max-md:flex-col ">
          <div className="flex flex-col  w-1/2  max-md:w-full">
            <ProjectCard
              image="./images/project1.png"
              title="Web UI design"
              text="Creative  UI design"
            />

            <ProjectCard
              image="./images/project2.png"
              title="UI Design"
              text="Creative Rebranding for logo"
            />
          </div>
          <div className="flex flex-col gap-7 w-1/2 pt-16 items-end  max-md:w-full ">
            <div className="bg-black cursor-pointer transition-colors   text-white flex w-[230px] p-1 gap-5 items-center rounded-full">
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                width={30}
                height={30}
              />
              <p>Start your free trial</p>
            </div>
            <ProjectCard
              image="./images/project3.png"
              title="To design Digital Strategy"
              text="Social Media Marketing"
            />

            <ProjectCard
              image="./images/project4.png"
              title="UI design"
              text="Creative Rebranding for logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
