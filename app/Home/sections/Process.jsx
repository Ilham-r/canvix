import IdeaCard from "@/components/IdeaCard";
import {
  faLightbulb,
  faEnvelope,
  faSliders,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
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
      </div>
    </div>
  );
};

export default Process;
