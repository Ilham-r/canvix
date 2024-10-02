import React from "react";

const HomePage = () => {
  return (
    <div className="w-full flex px-10 py-20 text-LightGray bg-red-400 justify-center items-center">
      <div className="flex  relative w-[80%] items-center justify-center">
        <img
          src="./images/heroimg.png"
          alt="hero images"
          className="absolute top-0 left-[-22%]  rotate-90"
        />
        <div className="flex flex-1 flex-col">
          <div flex w-full flex-col>
            <p className="text-h3 font-roboto">
              Ready to take your
              <br />{" "}
              <span className="text-LightGreen">
                {" "}
                Business Growth <br />{" "}
              </span>
              to the next level?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
