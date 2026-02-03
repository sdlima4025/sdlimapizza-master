import { Product} from "@/generated/prisma/client";
import { create } from "zustand";

type Store = {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

//  hook para gerenciar o estado dos produtos
export const useProducts = create<Store>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}));
