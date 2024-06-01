"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { usePathname, useRouter } from "next/navigation";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { title: "Home", dest: "/" },
  { title: "Shop", dest: "/shop" },
  { title: "About", dest: "" },
  { title: "Contact", dest: "" },
];

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const ACTIONS = useMemo(
    () => [
      { Icon: ShoppingCartIcon, title: "cart", action: () => {} },
      { Icon: HeartIcon, title: "favorites", action: () => {} },
      { Icon: MagnifyingGlassIcon, title: "search", action: () => {} },
      {
        Icon: UserIcon,
        title: "account",
        action: () => {
          router.push("/dashboard");
        },
      },
    ],
    [router]
  );

  return (
    <div className="bg-white flex justify-between h-[100px] items-center px-4">
      <div>
        <Image src="/logo-type.svg" width={185} height={40} alt="logo-type" />
      </div>
      <div className="hidden lg:flex">
        {NAV_ITEMS.map((item, index) => (
          <NavItem
            key={index}
            title={item.title}
            variant={pathname === item.dest ? "active" : "default"}
            onClick={() => router.push(item.dest)}
          />
        ))}
      </div>
      <div className="hidden lg:flex items-center">
        {ACTIONS.map((item, index) => (
          <item.Icon
            title={item.title}
            onClick={item.action}
            key={index}
            width={25}
            height={25}
            className="cursor-pointer mx-4"
          />
        ))}
      </div>
      <div className="block lg:hidden">
        <Bars3Icon width={35} height={35} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
