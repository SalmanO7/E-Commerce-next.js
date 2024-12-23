import React from "react";
import Link from "next/link";
import Product from "./Product";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CardProps {
  id: string;
  image: string;
  category: string;
  title: string;
  price: number;
  amount: number;
}

const CartItem = ({ card }: { card: CardProps }) => {
  const { id, image, category, title, price, amount } = card;

  return (
    <div className="flex flex-col  pt-7">
      <div className="w-full min-h-[100px] flex items-center justify-start ">
        <Link href={`/product/${id}`}>
          <Image
            className="w-1/2"
            src={image}
            alt={title}
            width={100}
            height={130}
          />
        </Link>

        <div className="flex flex-col w-full">
          <div className=" flex items-center justify-between gap-6 mb-2">
            <Link
              href={`/product/${id}`}
              className="text-[12px] sm:text-sm md:text-base lg:text-lg font-semibold text-black text-start"
            >
              {title}
            </Link>
            <div className="flex justify-end">
              <IoMdClose className="text-gray-500 cursor-pointer hover:text-red-500 transition text-xl sm:text-2xl lg:text-3xl" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-start items-center ">
              <div className="border px-1 sm:px-1 py-[6px] sm:py-2 hover:bg-gray-700 hover:text-white transition-transform">
                <FaMinus className="text-sm" />
              </div>
              <div className="border px-1 sm:px-2 py-[1px] sm:py-1">{amount}</div>
              <div className="border px-1 sm:px-1 py-[6px] sm:py-2 hover:bg-gray-700 hover:text-white transition-transform">
                <FaPlus className="text-sm" />
              </div>
            </div>
            <div className="flex w-full justify-between px-2 items-center py-2">
              <div className="text-[12px] sm:text-sm md:text-base">$ {price}</div>
              <div className="text-[12px] sm:text-sm md:text-base">{`$ ${(price * amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
