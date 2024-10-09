import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallCard = ({ icon, title, text }) => {
  return (
    <div className="w-full cursor-pointer group flex flex-col transition-all duration-700 hover:scale-110 bg-LightGray rounded-[20px] items-start justify-center p-8 gap-2 hover:bg-black hover:text-white">
      <div className=" flex p-3 rounded-full bg-black text-white mb-10 group-hover:bg-white group-hover:text-black">
        <FontAwesomeIcon icon={icon} width={20} height={20} />
      </div>
      <p className="text-Bodytext font-roboto">{title} </p>
      <p className="text-bodysmall">{text}</p>
    </div>
  );
};

export default SmallCard;
