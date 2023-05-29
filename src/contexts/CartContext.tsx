'use client'

import { Produto } from "@/services/produtoService";
import { useConst } from "@chakra-ui/react";
import { FC, ReactNode, createContext,useEffect, useState } from "react";



export interface ProdutoProps extends Produto{
    quantidade:number
}

interface CartContextData{
    produtos: ProdutoProps[];
    quantidade: number;
    valor:number;
    addToCart: (item: ProdutoProps) => void
    removeToCart: (id:any) => void
}

interface CartProviderProps{
    children: ReactNode 
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [produtos,setProdutos] = useState<ProdutoProps[]>(
        JSON.parse(window.localStorage.getItem('produtos')|| '[]')
    )

    const [quantidade,setQuantidade] = useState(
        Number(window.localStorage.getItem('quantidade') || 0)
    )
     
    const [valor,setValor] = useState(0)

    const buscaProduto = (id:string) => {
        return produtos.find((produto) => {
            if (!produto) {
                return false
            }
            return produto.id === id
        })
    }

     const addToCart = (item: ProdutoProps) => {
        const produto = buscaProduto(item.id)
           if (produto) {
            const produtoIndex = produtos.indexOf(produto);
            const produtosTemp = [...produtos]
            produtosTemp[produtoIndex].quantidade += item.quantidade

            setProdutos ([...produtosTemp])
            setQuantidade (quantidade + item.quantidade)
            return

           }
              setProdutos ([item,...produtos])
              setQuantidade (quantidade + item.quantidade)
         }


          useEffect(() => {
           window.localStorage.setItem('produtos',JSON.stringify(produtos))
           window.localStorage.setItem('quantidade' ,quantidade.toString())
          },[produtos,quantidade])


       useEffect(() =>{
        setValor(
            produtos.reduce((ValorAnterior,produto) => {
            if (!produto ) {
                return ValorAnterior
            }
            return ValorAnterior + produto.preco * produto.quantidade
       },0),
        )
       },[produtos])

       const removeToCart = (id:any) => {
        const produto = buscaProduto(id);

        if (!produto) return

        const produtoIndex = produtos.indexOf(produto)

        if (produtoIndex < 0) return

        const produtosTemp = [...produtos];
        delete produtosTemp[produtoIndex]
        setQuantidade(quantidade - produtos[produtoIndex].quantidade)
        setProdutos(produtosTemp.filter(produto => produto !== undefined))
       }

       return (
        <CartContext.Provider
        value={{
            produtos,
            quantidade,
            valor,
            addToCart,
            removeToCart
        }}
        >
            {children}
        </CartContext.Provider>
       )
    
}

export const useCart = () => useConst(CartContext)