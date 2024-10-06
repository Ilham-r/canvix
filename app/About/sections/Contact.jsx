import Button from "@/components/Button";

const Contact = () => {
  return (
    <div className=" flex w-full px-10  justify-center items-center pb-10 ">
      <div
        className="flex w-[80%] relative bg-cover bg-center justify-center p-5 items-center  gap-4   flex-col "
        style={{ backgroundImage: "url('./images/wavy.png')" }}
      >
        <div className="absolute inset-0  flex bg-black opacity-40 pointer-events-none rounded-[20px]"></div>
        <p className="font-roboto text-h5 z-10 text-white">
          Enough talk, let’s get to work
        </p>
        <Button text="Get in touch " color={true} />
      </div>
    </div>
  );
};

export default Contact;
