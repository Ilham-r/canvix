import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const List = ({ title, subtitle }) => (
  <div>
    <ul className="flex flex-col gap-2">
      <li className="text-Bodytext pb-1">{title}</li>
      {subtitle?.map((sub) => (
        <li className="text-bodysmall text-LightGray">
          {" "}
          <Link href="/">{sub}</Link>
        </li>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="w-full text-white flex flex-col gap-4 py-16 px-10 items-center   bg-black justify-center max-md:px-10 ">
      <div className="flex gap-20 w-[80%] justify-between items-start max-lg:flex-wrap   max-lg:w-full ">
        <div className="flex flex-col gap-2 items-start mr-8">
          <div className="flex justify-center items-center gap-2 ">
            <img src="./images/logo.png" alt="logo" width={35} height={35} />
            <h5 className="font-roboto text-h5 ">Canvix</h5>
          </div>
          <p className="text-bodysmall">
            We’re a team of strategic creator and digital innovator, united
            focus in our pursuit of mastery and joyful.
          </p>
        </div>

        <List
          title="Pages"
          subtitle={[
            "Home",
            "Home 2",
            "About",
            "Contact Us",
            "Portfolio",
            "Portfolio single",
          ]}
        />
        <List
          title="Utility Pages "
          subtitle={[
            "Style Guide ",
            "Instruction",
            "License",
            "Changelog",
            "Error  404 ",
            "Password",
          ]}
        />
        <div className="flex flex-col items-start gap-4">
          <p className="text-Bodytext">Subscribe</p>
          <div className="flex justify-between items-center text-bodysmall text-black w-[300px] p-1 bg-white rounded-[40px]">
            <input
              type="email"
              name="test"
              id="test"
              className=" pl-4  border-none focus:outline-none"
              placeholder="exemple@email.com"
            />
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="w-[80%] border-t-[1px] border-LightGray"></div>
      <div className="flex gap-20 w-[80%] justify-between items-start max-lg:flex-wrap   max-lg:w-full ">
        <List title="Copyright by" subtitle={["Designed by Iconstica.com"]} />
        <List title="Contact Us" subtitle={["+0 12 457 4578"]} />
        <List
          title="Address"
          subtitle={["119 Tanglewood Lane Gulfport, MS 39503"]}
        />
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faFacebook} width={30} height={30} />
          <FontAwesomeIcon icon={faInstagram} width={30} height={30} />
          <FontAwesomeIcon icon={faLinkedin} width={30} height={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
