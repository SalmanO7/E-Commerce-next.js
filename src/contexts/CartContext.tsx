"use client";
import React, { createContext, useState, ReactNode } from "react";

interface CartContextType {
  cart: any[]; 
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  AddToCart: (product: any, id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const AddToCart = (product: any, id: number) => {

    const newItem = { ...product, amount: 1 };
    console.log(`add to ${newItem} `);

    const cartItem = cart.find((item)=>{
        return item.id === id;
    })
    console.log(cartItem)
    if(cartItem){
        const newCart = [...cart].map((item)=>{
            if(item.id === id){
                return {...item, amount: cartItem.amount + 1}
            }
            return item
        });
        setCart(newCart)
    }  else{
        setCart([...cart, newItem])
    }
    console.log(cart);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
