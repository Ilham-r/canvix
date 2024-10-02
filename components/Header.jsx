"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
const NavLink = ({ text }) => (
  <Link
    href="/"
    className="cursor-pointer font-[20px]  transition-colors duration-200 hover:text-LightGreen"
    onClick={() => setIsOpen(false)}
  >
    {text}
  </Link>
);
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute flex py-3 px-10 items-center justify-center max-md:px-10 ">
      <div className="flex w-[80%] justify-between  items-center max-lg:w-full ">
        <div className="flex items-center gap-1">
          <svg
            width="33"
            height="33"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2651 16.3475C19.5068 16.3685 18.7662 16.46 18.0492 16.6147C15.0806 17.4583 12.9023 20.167 12.9023 23.3694C12.9023 27.244 16.0911 30.3962 20.0105 30.3962C23.93 30.3962 27.1187 27.244 27.1187 23.3694C27.1188 19.5791 24.0671 16.4805 20.2651 16.3475Z"
              fill="#000"
            />
            <path
              d="M34.3069 5.86846C30.4879 2.09334 25.4105 0.0142822 20.0099 0.0142822C14.6093 0.0142822 9.53185 2.09334 5.71304 5.86846C2.87894 8.67005 0.990937 12.1572 0.205078 15.9513C2.86236 11.1823 7.99701 7.94361 13.883 7.94361C22.4057 7.94361 29.3532 14.7332 29.4844 23.1281C29.4865 23.2083 29.4875 23.2888 29.4875 23.3695C29.4875 28.5357 25.2358 32.7387 20.0099 32.7387C14.7839 32.7387 10.5323 28.5356 10.5323 23.3695C10.5323 22.7347 10.5968 22.1146 10.719 21.5149C9.40905 23.4111 8.64198 25.7015 8.64198 28.166C8.64198 34.5901 13.8517 39.8338 20.3139 39.9857C25.6007 39.9091 30.5597 37.8394 34.3067 34.1351C38.1256 30.36 40.2288 25.3407 40.2288 20.0018C40.2288 14.6629 38.1256 9.64365 34.3069 5.86846Z"
              fill="#000"
            />
            <path
              d="M23.8981 14.8256C21.4693 12.0471 17.8801 10.2858 13.8825 10.2858C6.58472 10.2858 0.647461 16.1551 0.647461 23.3694C0.647461 25.1954 1.0255 26.9734 1.7534 28.615C2.73171 30.6376 4.06138 32.5029 5.71254 34.135C6.85567 35.265 8.11229 36.2418 9.45585 37.0576C7.46598 34.6249 6.27214 31.5308 6.27214 28.1658C6.27214 21.4159 11.0729 15.7544 17.4761 14.3406C18.2828 14.1191 19.1323 14.0002 20.0094 14.0002C20.0998 14.0002 20.1898 14.0018 20.2796 14.0043C20.3867 14.0019 20.494 14.0002 20.6017 14.0002V14.019C21.7699 14.0907 22.8816 14.3717 23.8981 14.8256Z"
              fill="#000"
            />
          </svg>
          <h5 className="font-roboto text-h5">Canvix</h5>
        </div>
        <div
          className={`flex w-[70%]  max-md:fixed max-md:top-0 max-md:bg-bgColor sidebar-before max-md:left-0 max-md:w-full ${
            isOpen ? "max-md:disaply " : "max-md:hidden"
          }`}
        >
          <div
            className={`flex w-full justify-between items-center max-md:flex-col max-md z-10 `}
          >
            <ul className="flex gap-5 max-md:block z-10  max-md:items-start max-md:flex max-md:flex-col max-md:min-h-screen max-md:justify-center  max-md:p-6 max-md:overflow-hidden max-md:px-4">
              <li>
                <NavLink text="Home" />
              </li>
              <li>
                <NavLink text="Potfolio" />
              </li>
              <li>
                <NavLink text="About" />
              </li>
              <li>
                <NavLink text="Contact Us" />
              </li>
            </ul>
            <Button text="Get in touch" />
          </div>
        </div>

        <div className="md:hidden ">
          <input
            id="checkbox2"
            type="checkbox"
            onClick={() => setIsOpen((prevState) => !prevState)}
          />
          <label class="toggle toggle2" for="checkbox2">
            <div id="bar4" class="bars"></div>
            <div id="bar5" class="bars"></div>
            <div id="bar6" class="bars"></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
