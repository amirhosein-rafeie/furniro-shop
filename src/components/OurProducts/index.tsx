import React from "react";
import ProductCard from "../ProductCard";
import { Button } from "@headlessui/react";
import Link from "next/link";

const OurProducts = () => {
  return (
    <div className="pt-4 pb-8">
      <h3 className="font-bold text-3xl text-center mb-8">Our Products</h3>
      <div className="grid grid-cols-4 place-items-center gap-4">
        {Array(8)
          .fill(0)
          .map((item, index) => (
            <ProductCard
              key={index}
              productImage="/images/image 3.png"
              price={`50000$`}
              productName="Lolito"
              shortDesc="Luxury big sofa"
            />
          ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/shop">
          <Button className="bt-outline w-[245px] h-[48px]">Show More</Button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
