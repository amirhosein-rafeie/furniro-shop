"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="slick-prev absolute left-0 top-1/2 transform -translate-y-1/2  text-white rounded-full z-10"
    onClick={onClick}
  >
    &lt;
  </button>
);

const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="slick-next absolute right-0 top-1/2 transform -translate-y-1/2  text-white rounded-full z-10"
    onClick={onClick}
  >
    &gt;
  </button>
);

const Inspirations = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const settings: Settings = {
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // className: "center",
    // centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    centerPadding: "60px",
    speed: 500,
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
  };

  console.log(currentSlide);

  return (
    <div>
      <div></div>
      <div className=" relative">
        <Slider {...settings}>
          {Array(10)
            .fill(1)
            .map((item, index) => (
              <div
                className="bg-red-200 h-[200px] w-[100px] relative"
                key={index}
              >
                <Image fill src="/images/landing.png" alt="" />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Inspirations;
