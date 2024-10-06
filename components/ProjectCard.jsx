import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const ProjectCard = ({ image, title, text, project }) => {
  return (
    <div
      className={`flex  group flex-1 flex-col  ${
        project ? "cursor-pointer" : "none"
      }`}
    >
      <div className="flex relative w-full group">
        <img src={image} alt="project" className="rounded-[20px]  " />
        {project ? (
          <>
            <div className="absolute inset-0 hidden group-hover:flex bg-black opacity-40 pointer-events-none rounded-[20px]"></div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              width={30}
              height={30}
              className="absolute text-white hidden group-hover:flex left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 rounded-[20px] flex justify-end gap-3 p-3 text-white">
              <FontAwesomeIcon
                icon={faFacebook}
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </>
        )}
      </div>

      <p className="font-roboto text-Bodytext mt-4">{title}</p>
      <p className="text-bodysmall "> {text} </p>
    </div>
  );
};

export default ProjectCard;
