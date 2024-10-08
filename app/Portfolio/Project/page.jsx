"use client";
import { useSearchParams } from "next/navigation";

import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
const projects = [
  {
    id: 1,
    image: "./images/project1.png",
    title: "Web UI Design",
    description: "Creative UI design",
    category: "Cloud solution",
    client: "BrightMedia Solutions",
    date: "August 23, 2023",
    location: "489 Depot Road Midland",
    challenge:
      "When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    solotion:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious Avoids pleasure itself, because it is.",
    result:
      'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.       ',
  },
  {
    id: 2,
    image: "./images/project2.png",
    title: "UI Design",
    description: "Creative rebranding for logo",
    category: "Cloud solution",
    client: "BrightMedia Solutions",
    date: "August 23, 2023",
    location: "489 Depot Road Midland",
    challenge:
      "When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    solotion:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious Avoids pleasure itself, because it is.",
    result:
      'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.       ',
  },
  {
    id: 3,
    image: "./images/project3.png",
    title: "Digital Strategy",
    description: "Social media marketing",
    category: "Cloud solution",
    client: "BrightMedia Solutions",
    date: "August 23, 2023",
    location: "489 Depot Road Midland",
    challenge:
      "When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    solotion:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious Avoids pleasure itself, because it is.",
    result:
      'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.       ',
  },
  {
    id: 4,
    image: "./images/project4.png",
    title: "UI Design",
    description: "Creative rebranding for logo",
    category: "Cloud solution",
    client: "BrightMedia Solutions",
    date: "August 23, 2023",
    location: "489 Depot Road Midland",
    challenge:
      "When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    solotion:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious Avoids pleasure itself, because it is.",
    result:
      'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.       ',
  },
  {
    id: 5,
    image: "./images/project5.png",
    title: "Graphic Design",
    description: "Graphic design",
    category: "Cloud solution",
    client: "BrightMedia Solutions",
    date: "August 23, 2023",
    location: "489 Depot Road Midland",
    challenge:
      "When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    solotion:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious Avoids pleasure itself, because it is.",
    result:
      'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.       ',
  },
  {
    id: 6,
    image: "./images/project6.png",
    title: "UI Design",
    description: "Creative rebranding for logo",
    category: "Cloud solution",
    client: "BrightMedia Solutions",
    date: "August 23, 2023",
    location: "489 Depot Road Midland",
    challenge:
      "When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    solotion:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious Avoids pleasure itself, because it is.",
    result:
      'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.       ',
  },
];
const Project = () => {
  const params = useSearchParams();
  const id = params.get("id");

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
          <Image
            src="./images/detail1.png"
            alt="project detail"
            className="rounded-[20px] w-[300px] h-[300px]  "
            width={300}
            height={300}
          />
          <Image
            src="./images/detail2.png"
            alt="project detail"
            className="rounded-[20px] w-[300px] h-[300px]  "
            width={300}
            height={300}
          />
          <Image
            src="./images/detail3.png"
            alt="project detail"
            className="rounded-[20px] w-[300px] h-[300px]  "
            width={300}
            height={300}
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
