import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Process = () => {
  return (
    <div className="flex p-10 justify-center items-center bg-black min-h-screen ">
      <div className="flex w-[80%] h-full  ">
        <div className="flex relative w-1/2 h-full py-72 p-40 border-2 border-red-500 overflow-hidden">
          <img
            src="./images/processTop.png"
            alt="process"
            className="absolute z-20  left-20 top-40 w-[360px] h-[360px] rounded-[20px]"
          />
          <img
            src="./images/processT2.png"
            alt="process"
            className="absolute z-10 left-12 top-32 opacity-50 w-[360px] h-[360px] rounded-[20px]"
          />
          <img
            src="./images/processT3.png"
            alt="process"
            className="absolute z-0 left-5 top-24 opacity-50  w-[360px] h-[360px] rounded-[20px]"
          />
        </div>
        <div className="flex flex-col flex-1 p-12 text-white justify-center">
          <p>About Us</p>
          <p>The core mission behind all our work</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <div className="flex gap-10 ">
            <div className=" flex flex-col gap-4">
              <p>330 +</p>
              <p> Companies helped</p>
            </div>
            <div className=" flex flex-col gap-4">
              <p>230 +</p>
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
