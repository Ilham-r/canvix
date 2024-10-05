import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <Testimonial />
    </>
  );
};

export default HomePage;
