"use client";
import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const context = useContext(SidebarContext);
  const contextCart = useContext(CartContext);
  if (!context) {
    throw new Error("SidebarConsumer must be used within a SidebarProvider");
  } else if (!contextCart) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { isOpen, HandleClose } = context;
  const { cart } = contextCart;
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  bg-white fixed top-0 h-full shadow-2xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/4 xl:w-2/5 transition-all duration-300 ease-in-out z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div
          className="cursor-pointer  w-8 h-8 flex justify-center items-center"
          onClick={HandleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.293 1.5a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L12.086 8H1a1 1 0 1 1 0-2h11.086L10.293 2.914a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </div>
      </div>
      <div>
        {cart.map((card) => (
          <CartItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
