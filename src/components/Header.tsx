"use client";
import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("SidebarConsumer must be used within a SidebarProvider");
  }

  const { isOpen, setIsOpen } = context;

  return (
    <header className="w-full flex justify-around items-center px-4 py-4 bg-black text-white">
      <div className="text-xl font-semibold">Best Sale</div>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <MdOutlineShoppingCart className="text-xl sm:text-2xl lg:text-3xl" />
      </div>
    </header>
  );
};

export default Header;
