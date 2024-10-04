import SmallCard from "@/components/SmallCard";
import {
  faPen,
  faPenNib,
  faBullhorn,
  faGem,
  faPalette,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
const services = [
  [
    faPen,
    "Content Marketing ",
    "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic",
  ],
  [
    faPenNib,
    "Graphic Design ",
    "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  ],
  [
    faBullhorn,
    "Digital Marketing ",
    "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing",
  ],
  [
    faPalette,
    "Web Design",
    "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.",
  ],
  [
    faUserLarge,
    "IT Consulting",
    "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services",
  ],
  [
    faGem,
    "Brand Identity ",
    "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
  ],
];
const Services = () => {
  return (
    <div className="flex p-10 justify-center items-center  ">
      <div className="flex w-[80%] justify-center items-center flex-col ">
        <p className="text-h5 text-LightGreen font-roboto ">Our Services</p>
        <p className="text-h4 font-roboto text-center w-[550px]">
          High-impact services for your business
        </p>
        <div className="w-full grid gap-4 grid-cols-3 mt-9 max-lg:grid-cols-2 max-md:grid-cols-1">
          {services?.map((service) => (
            <SmallCard icon={service[0]} title={service[1]} text={service[2]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
