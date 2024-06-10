import React from "react";
import Image from "next/image";

const BrowseTheRange = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-10">
        <h3 className="font-bold text-3xl mb-1">Browse The Range</h3>
        <p className="text-[#666] text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-3">
        {[
          { title: "Dining", img: "/images/dining.png" },
          { title: "Living", img: "/images/living.png" },
          { title: "Bedroom", img: "/images/bedroom.png" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image width={380} height={480} src={item.img} alt={item.title} />
            <p className="font-bold text-2xl mt-10">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTheRange;
