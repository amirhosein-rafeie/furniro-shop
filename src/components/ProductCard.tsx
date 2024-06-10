"use client";
import { Button } from "@headlessui/react";
import {
  ArrowsRightLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
  productName?: string;
  productImage?: string | StaticImport;
  shortDesc?: string;
  price?: number | string;
  discountPercent?: number | string;
  discountPrice?: number | string;
};

const ProductCard = ({
  productName,
  productImage,
  shortDesc,
  price,
  discountPercent,
  discountPrice,
}: ProductCardProps) => {
  return (
    <div className="group w-[285px] relative cursor-pointer">
      <div className="group-hover:opacity-100 absolute z-[2] inset-0 opacity-0 transition-opacity bg-custom-black-1 flex flex-col justify-center items-center">
        <div>
          <Button className="w-[202px] h-[48px] text-primary bg-white">
            Add to cart
          </Button>
        </div>
        <div className="w-[90%] flex justify-between mt-4">
          <div className="flex items-center text-white transition-colors hover:text-[rgba(255,255,255,0.5)]">
            <HeartIcon className="w-[16px] h-[16px]" />
            <p>Like</p>
          </div>

          <div className="flex items-center text-white transition-colors hover:text-[rgba(255,255,255,0.5)]">
            <ArrowsRightLeftIcon className="w-[16px] h-[16px]" />
            <p>Compare</p>
          </div>

          <div className="flex items-center text-white transition-colors hover:text-[rgba(255,255,255,0.5)]">
            <ShareIcon className="w-[16px] h-[16px]" />
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="h-[300px] relative">
        <Image
          className="z-[1]"
          fill
          src={productImage ?? ""}
          alt={productName ?? ""}
        />
      </div>
      <div className="p-4 bg-custom-grey-2">
        <h5 className="font-bold text-2xl">{productName}</h5>
        <p className="text-custom-grey-1 my-1">{shortDesc}</p>
        <div className="flex">
          <p
            className={`${
              discountPercent ? "line-through" : ""
            } font-bold text-lg`}
          >
            {price}
          </p>
          <p>{discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
