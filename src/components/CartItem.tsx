import React from "react";
import Link from "next/link";
import Product from "./Product";
import Image from "next/image";

const CartItem = ({ card }: any) => {
  const { id, image, category, title, price } = card;

  return (
    <div className="flex pt-7">
      <div className="w-full min-h-[100px] flex items-center gap-x-4">
        <Link href={`/product/${id}`}>
          <Image className="w-1/2" src={image} alt={title} width={100} height={130} />
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
