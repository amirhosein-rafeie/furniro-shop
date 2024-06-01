import React from "react";

type NavItemProps = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  variant?: "default" | "active";
};

const NavItem = ({ title, onClick, variant = "default" }: NavItemProps) => {
  return (
    <div
      className={`px-6 py-2 transition-all rounded-lg ${
        variant === "active"
          ? "bg-primary hover:animate-pulse cursor-pointer"
          : ""
      }`}
      onClick={onClick}
    >
      <p
        className={` ${
          variant === "active" ? "text-white" : "text-gray-500 hover:text-black"
        } font-montserrat cursor-pointer font-medium transition-colors `}
      >
        {title}
      </p>
    </div>
  );
};

export default NavItem;
