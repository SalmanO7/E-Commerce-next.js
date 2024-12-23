"use client";
import React, { useContext } from "react";
import { ProductContext } from "@/contexts/ProductContext";
import Product from "@/components/Product";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
}

const Home = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Products Not Available");
  }
  const { products } = context;
  return (
    <div className=" container mx-auto flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 sm:gap-[30px] gap-y-8 md:gap-y-20">
        {products.map((product: Products) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
