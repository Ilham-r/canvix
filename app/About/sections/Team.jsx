import ProjectCard from "@/components/ProjectCard";

const members = [
  ["./images/esther.png", "Esther Howards", "Founder & CEO"],
  ["./images/cameron.png", "Cameron Williamson", "Marketing Head"],
  ["./images/liam.png", "Liam Cooper", "Marketing Head"],
];
const Team = () => {
  return (
    <div className=" flex w-full px-10 pt-10 justify-center items-center flex-col gap-16 ">
      <p className="font-roboto text-h3"> Our Team</p>
      <div className="flex  relative w-[80%] justify-center  items-center  gap-8 pb-24  max-md:flex-col ">
        {members?.map((member) => (
          <ProjectCard
            project={false}
            image={member[0]}
            title={member[1]}
            text={member[2]}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
