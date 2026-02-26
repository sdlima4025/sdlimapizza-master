"use client"

import Image from "next/image";
import { decimalToMoney } from "@/lib/utils";
import { useProducts } from "@/stores/products";
import { CartItem } from "@/types/cart-item";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCart } from "@/stores/cart";

type props = {
    data: CartItem;
}

export const CartProduct = ({ data }: props) => {
    const [qt, setQt] = useState(data.quantity);
    const cart = useCart();
    const products = useProducts();
    let product = products.products.find(item => item.id === data.ProductId);
    if(!product) return null;

    



    const handleMinusClick = () => {
        if(qt - 1 <= 0) {
            cart.removeItem(data.ProductId);

        }else {
            cart.addItem({ ProductId: data.ProductId, quantity: -1 });
            setQt(qt - 1);
        }
    }

    const handlePlusClick = () => {
        cart.addItem({ ProductId: data.ProductId, quantity: 1 });
        setQt(qt + 1);
    }


    return (
        <div className="flex items-center gap-3">
            <div className="w-10">
                <img
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100} 
                    className="w-full"
                />
            </div>
            <div className="flex-1">
                <div>{product.name}</div>
                <div className="text-sm">{decimalToMoney(product.price)}</div>
            </div>
            <div className="flex items-center bg-secondary p-2 rounded-md">
                <Button size="sm" onClick={handleMinusClick}>-</Button>
                <div className="mx-3">{qt}</div>
                <Button size="sm" onClick={handlePlusClick}>+</Button>
            </div>
        </div>
    );   
}