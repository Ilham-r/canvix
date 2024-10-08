"use client";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

import { useRouter } from "next/navigation";
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
const Portfolio = () => {
  const router = useRouter();

  const handleClick = async (id) => {
    await router.push(`/Portfolio/Project?id=${id}`);
  };

  return (
    <div className="flex w-full px-10 pt-28 gap-28 min-h-screen items-center justify-center flex-col">
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
