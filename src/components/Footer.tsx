import { Button, Input } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex border-t-[1px] flex-col mt-4">
      <div className="flex flex-1 justify-between border-b-2 py-14 px-20">
        <div>
          <h5 className="text-[24px] font-bold">Funiro.</h5>
          <p className="text-custom-grey-3 mt-8">
            400 University Drive Suite 200 Coral <br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className="grid-cols-1 space-y-8">
          <p className="text-custom-grey-3">Links</p>

          <p>
            <Link href="/">Home</Link>
          </p>

          <p>
            <Link href="/shop">Shop </Link>
          </p>

          <p>
            <Link href="#">About</Link>
          </p>
          <p>
            <Link href="#">Contact</Link>
          </p>
        </div>
        <div className="grid-cols-1 space-y-8">
          <p className="text-custom-grey-3">Help</p>
          <p>
            <Link href="#">Payment Options</Link>
          </p>
          <p>
            <Link href="#">Returns</Link>
          </p>
          <p>
            <Link href="#">Privacy Policies</Link>
          </p>
        </div>

        <div>
          <p className="text-custom-grey-3">Newsletter</p>
          <div className="flex mt-8">
            <Input
              className="border-b-2 border-black outline-none px-1"
              placeholder="Enter Your Email Address"
            />
            <Button className="border-b-2 border-black ml-4">SUBSCRIBE</Button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};

export default Footer;
