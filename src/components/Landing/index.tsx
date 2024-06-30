"use client";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Landing = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };

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
            <p className="text-lg tracking-widest">New Arrival</p>
            <h3 className="text-primary text-6xl font-bold leading-[70px] my-2">
              Discover Our <br /> New Collection
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            <Button
              onClick={handleClick}
              className="w-[222px] my-auto bt-contained py-6 px-10"
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
