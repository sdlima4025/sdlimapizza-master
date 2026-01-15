import { prisma } from "@/lib/prisma"

// consulta de produtos (pizzas) no banco de dados
export const getAllProducts = async() =>{
    return await prisma.product.findMany();

}