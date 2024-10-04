import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Process = () => {
  return (
    <div className="flex p-10 justify-center items-center max-lg:flex-col bg-black min-h-screen ">
      <div className="flex w-[80%] h-full max-lg:w-full max-lg:flex-col ">
        <div className="flex relative w-1/2 h-full py-72 p-40 max-lg:w-full  ">
          <img
            src="./images/processTop.png"
            alt="process"
            className=" absolute z-20  lg:left-20 top-40 w-[400px] h-[400px] rounded-[20px] "
          />
          <img
            src="./images/processT2.png"
            alt="process"
            className=" absolute z-10 left-12 top-32 opacity-50 w-[400px] h-[400px] rounded-[20px] max-lg:left-32"
          />
          <img
            src="./images/processT3.png"
            alt="process"
            className="absolute z-0 left-5 top-24 opacity-50  w-[400px] h-[400px] rounded-[20px] max-lg:left-24"
          />
        </div>
        <div className="flex flex-col flex-1 p-6 pl-16 text-white justify-end gap-4">
          <p className="font-roboto text-LightGreen text-h6 mb-2">About Us</p>
          <p className="font-roboto text-[37px]">
            The core mission behind all our work
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <div className="flex gap-10 ">
            <div className=" flex flex-col gap-3">
              <p className="text-LightGreen text-h5 font-roboto">330 +</p>
              <p> Companies helped</p>
            </div>
            <div className=" flex flex-col gap-3">
              <p className="text-LightGreen text-h5 font-roboto">230 +</p>
              <p>Revenue generated</p>
            </div>
          </div>
          <div className="bg-white cursor-pointer transition-colors hover:text-white hover:bg-black duration-500  text-LightBlack flex w-[270px] p-1 gap-5 items-center rounded-full">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              width={30}
              height={30}
            />
            <p>Start your free trial</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
