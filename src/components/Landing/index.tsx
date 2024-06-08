import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="flex h-[var(--landing-height)] relative overflow-hidden min-h-[500px] max-h-[1440px]">
      <Image
        className="z-[5]"
        fill
        style={{ objectFit: "cover" }}
        src="/images/landing.png"
        alt="landing"
      />
      <div className="z-[6] grid grid-cols-2 w-full">
        <div></div>
        <div className="flex items-center">
          <div className="flex flex-col w-[640px] h-[440px] bg-[#FFF3E3] rounded-lg pt-14 px-10">
            <p className="font-popins text-lg tracking-widest">New Arrival</p>
            <h3 className="text-primary text-6xl font-popins font-bold leading-[70px] my-2">
              Discover Our <br /> New Collection
            </h3>
            <p className="font-popins text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="w-[222px] my-auto bg-primary text-white font-popins font-bold py-6 px-10">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
