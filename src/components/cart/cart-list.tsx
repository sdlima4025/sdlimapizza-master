"use client"

import { Button } from "../ui/button"
import { useProducts } from "@/stores/products";
import { useCart } from "@/stores/cart";
import { useEffect, useState } from "react";
import { CartProduct } from "./cart-product";
import { decimalToMoney } from "@/lib/utils";


export const CartList = () => {
    const cart = useCart();
    const Products = useProducts();

    const [subtotal, setSubtotal] = useState(0);
    const [shppingCost, setShippingCost] = useState(10);
    
    const  calculeteSubtotal = () => {
        let sub =0;
        for(let item of cart.items){
            const product = Products.products.find(pitem => pitem.id === item.ProductId);
            if(product) sub += item.quantity * parseFloat(product.price.toString());

        }
        setSubtotal(sub);
    }
    useEffect(calculeteSubtotal, [cart]);

    return (
        <>
            <div className="flex flex-col gap-3 my-5">
                {cart.items.map(item => (
                    <CartProduct
                        key={item.ProductId}
                        data={item}
                    />

                ))}
            </div>
            <div className="my-4 text-right">
                <div>Sub-Total:{decimalToMoney(subtotal)}</div>
                <div>Entrega:{decimalToMoney(shppingCost)}</div>
                <div className="font-bold">Total:{decimalToMoney(subtotal + shppingCost)}</div>
            </div>

            <Button>Finalizar Pedido</Button>
        </>
    )
}