import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IdeaCard = ({ icon, title, text }) => {
  return (
    <div className="flex  justify-center items-center flex-1 flex-col bg-LightGray rounded-[20px] gap-6 p-4  ">
      <div className=" flex w-[80%] justify-start gap-10 items-center  ">
        <div className="bg-LightBlack text-white rounded-full p-2 z-10">
          <FontAwesomeIcon icon={icon} width={25} height={25} />
        </div>

        <p className="font-roboto text-h6">{title}</p>
      </div>
      <p className="text-[13px] pl-8">{text}</p>
    </div>
  );
};

export default IdeaCard;
