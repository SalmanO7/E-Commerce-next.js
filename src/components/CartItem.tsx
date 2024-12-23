import React from "react";
import Link from "next/link";
import Product from "./Product";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ card }: any) => {
  const { id, image, category, title, price } = card;

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

        <div>
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

          <div className="flex justify-start items-center gap-x-4">
            <div>
              <FaMinus />
            </div>
            <div>amount </div>
            <div>
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
