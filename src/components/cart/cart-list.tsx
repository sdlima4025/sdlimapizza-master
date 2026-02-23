"use client"

import { Button } from "../ui/button"
import { useProducts } from "@/stores/products";
import { useCart } from "@/stores/cart";
import { useState } from "react";


export const CartList = () => {
    const cart = useCart();
    const Products = useProducts();

    const [subtotal, setSubtotal] = useState(0);
    const [shppingCost, setShippingCost] = useState(10);
    

    return (
        <>
            <div className="flex flex-col gap-3 my-5">
                ...
            </div>
            <div>
                <div>Sub-Total:</div>
                <div>Entrega:</div>
                <div>Total:</div>
            </div>

            <Button>Finalizar Pedido</Button>
        </>
    )
}