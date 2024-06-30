"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";

const CustomPrevArrow = () => null;

const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
  <div
    style={{
      boxShadow:
        "0px 10px 15px -3px rgba(0,0,0,0.1),4px 15px 16px 0px rgba(0,0,0,0.1)",
    }}
    className="absolute cursor-pointer w-[40px] h-[40px] right-1 top-1/2 transform -translate-y-1/2 text-primary rounded-full z-10 bg-white flex justify-center items-center"
    onClick={onClick}
  >
    <ChevronRightIcon style={{ width: 24, height: 24 }} />
  </div>
);

const Inspirations = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const settings: Settings = {
    arrows: true,
    dots: true,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    centerPadding: "60px",
    beforeChange: (c, n) => {
      setCurrentSlide(c);
    },
    appendDots: (dots: ReactNode[]) => (
      <div style={{ display: "flex" }}>
        {dots?.map((_dot, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={`w-[28px] h-[28px] rounded-full ${
              currentSlide === key ? "border border-primary" : ""
            }`}
          >
            <div
              className={`${
                currentSlide === key ? "bg-primary" : "bg-gray-200"
              } w-[10px] h-[10px] rounded-full`}
            />
          </div>
        ))}
      </div>
    ),
  };

  const slides = [
    { image: "/images/slide1.png", title: "1" },
    { image: "/images/slide2.png", title: "2" },
    { image: "/images/slide3.png", title: "3" },
  ];

  return (
    <div className="p-6 bg-custom-creame-1 flex justify-between items-center">
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col">
          <h3 className="font-bold text-[40px] leading-[50px]">
            50+ Beautiful rooms <br /> inspiration
          </h3>
          <p className="mt-2 mb-6 text-[16px]">
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you
          </p>
          <button className="bt-contained w-[176px] h-[48px]">
            Explore More
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="relative w-[404px] h-[582px]">
          <Image
            fill
            objectFit="cover"
            src={slides[currentSlide]?.image ?? ""}
            alt={slides[currentSlide]?.title ?? ""}
          />
        </div>

        <div className="w-[400px] ml-4">
          <Slider {...settings}>
            {slides.map((item, index) => (
              <div
                className="h-[486px] w-[372px] relative select-none"
                key={index}
              >
                <Image fill sizes="100%" src={item.image} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
