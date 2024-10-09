import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const IdeaCard = ({ icon, title, text }) => {
  return (
    <div className="flex relative justify-center items-center flex-1 flex-col gap-6 px-4">
      <div className=" flex gap-10 justify-end items-center pl-10 ">
        <div className="bg-LightBlack text-white rounded-full p-3 z-10">
          <FontAwesomeIcon icon={icon} width={25} height={25} />
        </div>
        <Image
          src="/images/vector.png"
          alt="flesh"
          className=" absolute top-7 left-6"
          weight={200}
          height={160}
        />
        <p className="font-roboto text-h6">{title}</p>
      </div>
      <p className="text-[13px] pl-8">{text}</p>
    </div>
  );
};

export default IdeaCard;
