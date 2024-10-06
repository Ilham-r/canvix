"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  [
    "“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”",
    "Jacqueline Miller",
    "CEO of an eduport",
  ],
  [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Sarah Johnson",
    "Project Manager at Tech Innovations Inc",
  ],
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex w-full justify-center items-center p-10">
      <div className="flex w-[80%] flex-col gap-3 justify-center items-center bg-LightGray py-12 overflow-hidden">
        <div className="flex w-full flex-col justify-center items-center text-center">
          <img src="./images/man.png" alt="man" width={80} height={80} />
          <p className="text-Bodytext font-roboto mt-7 ">
            “{testimonials[currentIndex][0]}”
          </p>
          <p className="font-roboto mt-7">{testimonials[currentIndex][1]}</p>
          <p className="text-bodysmall">{testimonials[currentIndex][2]}</p>
        </div>

        <div className="flex gap-3 mt-4">
          <div
            className="flex p-3 justify-center items-center bg-black rounded-full text-white hover:bg-LightGray border-2 border-black hover:text-black cursor-pointer"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faArrowLeft} width={20} height={20} />
          </div>
          <div
            className="flex p-3 justify-center items-center bg-black rounded-full text-white hover:bg-LightGray border-2 border-black hover:text-black cursor-pointer"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faArrowRight} width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
