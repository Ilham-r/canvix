import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
const Testimonial = () => {
  return (
    <div className="flex w-full justify-center items-center p-10">
      <div className="flex w-[80%] flex-col gap-3 justify-center items-center bg-LightGray py-12">
        <div className="flex w-full flex-col justify-center items-center text-center ">
          <img src="./images/man.png" alt=" man" width={80} height={80} />
          <p className="text-Bodytext font-roboto mt-7">
            “Be genuine in your assessment, and provide constructive feedback to
            benefit both potential customers and the company providing the
            product or service.”
          </p>
          <p className="font-roboto mt-7">Jacqueline Miller</p>
          <p className="text-bodysmall">CEO of an eduport</p>
        </div>
        <div className="flex gap-3 ">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
