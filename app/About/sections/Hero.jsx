import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className=" flex w-full px-10 pt-7 min-h-screen justify-center items-center max-lg:py-16">
      <div className="flex w-[80%] justify-center  items-center rounded-[20px] max-lg:gap-9  max-lg:w-full max-lg:flex-col p-16 bg-LightBlack text-white max-lg:pb-40">
        <div className="flex w-1/2 justify-center flex-col gap-4 max-lg:w-full">
          <p>Pleasure and so read the was hope.</p>
          <p className="font-roboto text-h5">
            Ready to take
            <span className="text-LightGreen"> your business </span>
            to the next level?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <div className="flex gap-3 ">
            <img src="./images/about.png" alt="man" height={60} width={60} />
            <div className="flex flex-col justify-center  gap-1">
              <p className="font-roboto"> Rated 4.9/5 stars</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    width={16}
                    height={16}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-1/2 h-full p-40   ">
          <img
            src="./images/meeting.png"
            alt="process"
            className=" absolute z-20  lg:left-20 max-lg:left-5 top-12 w-[400px] h-[400px] rounded-[20px] "
          />
          <img
            src="./images/processT2.png"
            alt="process"
            className=" absolute z-10 left-12 max-lg:left-0 top-6 opacity-50 w-[400px] h-[400px] rounded-[20px] max-lg:left-32"
          />
          <img
            src="./images/processT3.png"
            alt="process"
            className="absolute z-0 left-5 top-0 max-lg:left-[-20px] opacity-50  w-[400px] h-[400px] rounded-[20px] max-lg:left-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
