import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faLeaf,
  faArrowsRotate,
  faCannabis,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <div className="flex w-full pb-10 px-10  min-h-screen  text-LightGray bg-red-400 justify-end ">
      <div className="flex relative w-[90%] pt-28 items-center justify-between  ">
        <img
          src="./images/heroimg.png"
          alt="hero images"
          className="absolute max-md:hidden top-16 left-[-22%]  rotate-90"
        />
        <div className="flex w-1/2 max-lg:w-3/4 pr-10 flex-col gap-16 max-md:w-full">
          <div flex w-full flex-col>
            <p className="text-h4 font-roboto">
              Ready to take your
              <br />{" "}
              <span className="text-LightGreen">
                Business Growth <br />{" "}
              </span>
              to the next level?
            </p>
            <p className="text-bodysmall text-LightGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>
            <div className="bg-white cursor-pointer transition-colors hover:text-white hover:bg-black duration-500  text-LightBlack flex w-[270px] p-2 gap-5 items-center rounded-full">
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                width={30}
                height={30}
              />
              <p>Start your free trial</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <p className="text-bodysmall font-roboto text-LightGreen">
              Trusted by Leading Brands
            </p>
            <div className="flex items-center gap-2">
              <span className="flex gap-1 items-center">
                {" "}
                <FontAwesomeIcon icon={faLeaf} width={25} height={25} />{" "}
                <p> Greenish</p>
              </span>
              <span className="flex gap-1 items-center">
                {" "}
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  width={25}
                  height={25}
                />{" "}
                <p> Automatation</p>
              </span>
              <span className="flex gap-1 items-center">
                {" "}
                <FontAwesomeIcon
                  icon={faCannabis}
                  width={25}
                  height={25}
                />{" "}
                <p>Leafe</p>
              </span>
              <span className="flex gap-1 items-center">
                {" "}
                <FontAwesomeIcon icon={faEnvira} width={25} height={25} />{" "}
                <p>Mindfulness</p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex max-lg:absolute right-[-10%] top-1/4 justify-center py-8 px-4 items-center w-[45%]  border-[1px] border-LightGreen  rounded-full max-md:hidden">
          <div className="flex w-[90%] p-5 justify-center items-center border-t-[1px] border-b-[1px] border-LightGray rounded-full">
            <img src="./images/hero.png" alt=" hero image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
