import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Input } from "postcss";
import Button from "@/components/Button";
const Socials = ({ icon, title, text }) => (
  <div className="flex w-full gap-4 justify-start items-center">
    <div className="p-2 bg-black text-white  rounded-full">
      <FontAwesomeIcon icon={icon} Width={20} height={20} />
    </div>
    <div className="flex flex-col justify-center   ">
      <p className="font-roboto">{title}</p>
      <p className="text-bodysmall">{text}</p>
    </div>
  </div>
);
const ContactUs = () => {
  return (
    <div className=" flex w-full px-10 pt-28 gap-8 min-h-screen items-center justify-center flex-col ">
      <div className="flex w-[80%] justify-center items-center gap-6 max-lg:w-full  max-md:flex-col ">
        <div className="flex w-1/3 flex-col justify-center items-start gap-4 max-md:w-full">
          <p className="font-roboto text-h4">Let’s talk</p>
          <p className="text-bodysmall">
            We collaborate with thousands of creators, entrepreneurs and
            complete legends.
          </p>
          <div className="flex w-full flex-col border-y-[1px] py-4 border-black justify-center items-start gap-3">
            <Socials
              icon={faEnvelope}
              title="Our email"
              text="hello@example.com"
            />
            <Socials icon={faPhone} title="Call us" text="+123 456 7892" />
            <Socials
              icon={faLocation}
              title="Find us"
              text="Open Google Maps"
            />
          </div>
          <div className="flex gap-4 justify-center">
            <FontAwesomeIcon icon={faFacebook} Width={30} height={30} />
            <FontAwesomeIcon icon={faInstagram} Width={30} height={30} />
            <FontAwesomeIcon icon={faLinkedin} Width={30} height={30} />
          </div>
        </div>
        <div className="flex w-2/3 bg-LightGray rounded-[20px] p-12 justify-center items-center max-md:w-full">
          <form
            action=" class"
            className="w-full flex flex-col gap-8 items-start "
          >
            <div className="flex gap-12 w-full">
              <div className="flex flex-1 flex-col gap-2 ">
                <label for="fname">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="bg-transparent border-b-2 border-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 w-full">
                <label for="fname">Last name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="bg-transparent border-b-2 border-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between  gap-12 w-full">
              {" "}
              <div className="flex flex-1 flex-col gap-2 ">
                <label for="fname">Email:</label>
                <input
                  type="email"
                  id="fname"
                  name="fname"
                  className="bg-transparent border-b-2 border-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 w-full">
                <label for="fname">Phone:</label>
                <input
                  type="tel"
                  id="fname"
                  name="fname"
                  className="bg-transparent border-b-2 border-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between  gap-12 w-full">
              {" "}
              <div className="flex flex-1 flex-col gap-2">
                <label for="fname">Message:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="bg-transparent border-b-2 border-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <Button text="Submit Now" />
          </form>
        </div>
      </div>
      <div
        className="flex w-[80%]  bg-contain bg-no-repeat bg-center justify-center p-40 items-center rounded-[20px] bg-red  max-lg:w-full "
        style={{ backgroundImage: "url('./images/map.png')" }}
      ></div>
    </div>
  );
};

export default ContactUs;
