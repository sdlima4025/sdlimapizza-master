"use client"

import Image from "next/image";
import { decimalToMoney } from "@/lib/utils";
import { useProducts } from "@/stores/products";
import { CartItem } from "@/types/cart-item";
import { Button } from "../ui/button";
import { useState } from "react";

type props = {
    data: CartItem;
}

export const CartProduct = ({ data }: props) => {
    const [qt, setQt] = useState(data.quantity);

    const products = useProducts();
    let product = products.products.find(item => item.id === data.ProductId);
    if(!product) return null;

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
                <Button size="sm" onClick={() => {}}>-</Button>
                <div className="mx-3">{qt}</div>
                <Button size="sm" onClick={() => {}}>+</Button>
            </div>
        </div>
    );   
}