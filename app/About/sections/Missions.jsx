import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const items = [
  "Moonlight newspaper up its enjoyment",
  "She new course gets living.",
  "She new course gets living.",
  "Rooms oh fully taken by worse.",
  "Perceived end certainly day.",
  "Preference any astonished unreserved Mrs.",
];
const Missions = () => {
  return (
    <div className=" flex w-full p-10 text-white justify-center items-center bg-black ">
      <div className="w-[80%] flex justify-center items-center  gap-1 max-lg:w-full max-lg:flex-col  max-lg:gap-11">
        <div className="flex flex-col w-1/3 items-start justify-center gap-2 max-lg:w-full ">
          <p className="font-roboto text-LightGreen">Our Mission</p>
          <p className="font-roboto text-h5">Boost your with your business.</p>
          <p className="text-bodysmall">
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty guy assistance joy.
          </p>
          <div className="grid grid-cols-2 grid-rows-3  ">
            {items.map((item) => (
              <div className="flex items-start justify-start gap-2">
                <div className="flex bg-LightGreen justify-center items-center text-white p-1 rounded-full">
                  <FontAwesomeIcon icon={faCheck} width={6} height={6} />
                </div>
                <p className="text-bodysmall">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center justify-start gap-2 max-lg:w-full">
          <img
            src="./images/mission.png"
            alt="group of ppl"
            className="rounded-[20px] w-56 h-72"
          />
          <div className="flex gap-4 w-[80%] text-center h-40 justify-center items-start ">
            <div className="flex flex-col px-2 border-r-[1px] border-white  ">
              <p className="font-roboto text-h5">10k</p>
              <p className="text-bodysmall">Great conversations per month</p>
            </div>
            <div className="flex flex-col h-full justify-end ">
              <p className="font-roboto text-h5">95+</p>
              <p className="text-bodysmall">Project Complete </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center justify-end  h-svh max-lg:w-full  max-lg:h-auto">
          <img
            src="./images/group.png"
            alt=" group of ppl"
            className="rounded-[20px] w-64 h-80 "
          />
        </div>
      </div>
    </div>
  );
};

export default Missions;
