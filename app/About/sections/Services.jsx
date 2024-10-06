const services = [
  [
    "200+",
    "We’re a family",
    "Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.",
  ],
  [
    "99%",
    "Graphic Design ",
    "Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.",
  ],
  [
    "1.5M+",
    "Digital Marketing ",
    "Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.",
  ],
];
const Services = () => {
  return (
    <div className=" flex w-full p-10  justify-center items-center ">
      <div className="flex w-[80%] justify-center  items-center  gap-8 pb-24  max-md:flex-col ">
        {services?.map((service) => (
          <div className="flex flex-col text-center flex-1 gap-2 ">
            <p className="font-roboto text-h5">{service[0]}</p>
            <p className="font-roboto">{service[1]}</p>
            <p className="text-bodysmall">{service[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
