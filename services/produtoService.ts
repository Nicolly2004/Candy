import { Loja } from "./lojaService"


export interface Produto{
    id: string
    nome: string
    preco: number
    descricao: string
    imagem:string
    desconto?:number
    loja?:Loja
}

export function getProdutos(): Produto[] {
 return [

    {
        id: '1',
        nome: 'Chocolate Ao Leite ',
        preco:52.84,
        descricao:'Chocolate ao leite em barra de 1K, Nestlé',
        imagem:,
        loja: {

            id: '1',
            nome: 'Chocolateria Bom Preço',
            categoria: 'Chocolates',
            distancia: '2,0 km',
            nota: 5 ,
            tempo: '40 min',
            pedidoMinimo: 70,
            taxaEntrega: 10,
        },
    },
        {
            id: '2',
            nome: 'Chocolate Ao leite',
            preco: 27.90,
            descricao: 'Chocolate ao leite em barra - 500g, Nestlé',
            imagem:,
        },

        {
            id: '3',
            nome: 'Chocolate Ao leite',
            preco: 35.90,
            descricao: 'Chocolate ao leite em Gotas - 500g, Hersheys',
            imagem:,
        },

        {
            id: '4',
            nome: 'Chocolate Branco',
            preco: 88.80,
            descricao: 'Chocolate branco em barra - 1K, Nestlé',
            imagem:,
        },

        {
            id: '5',
            nome: 'Chocolate Branco',
            preco: 24.50,
            descricao: 'Chocolate branco em barra - 500g, Melken',
            imagem:,
        },

        {
            id: '5',
            nome: 'Chocolate Branco',
            preco: 44.40,
            descricao: 'Chocolate branco em Gotas - 1K, Hersheys',
            imagem:,
        },


        {
            id: '6',
            nome: 'Chocolate Meio-Amargo',
            preco: 45.80,  
            descricao: 'Chocolate meio-amargo em barra - 1K, Sicao',
            imagem:,
        },

        {
            id: '7',
            nome: 'Chocolate Meio-Amargo',
            preco: 31.80,
            descricao: 'Chocolate branco em barra - 500g, Melken',
            imagem:,
        },
        
        {
            id: '8',
            nome: 'Chocolate Meio-Amargo',
            preco: 47.19,
            descricao: 'Chocolate branco em gotas - 1K, Hersheys',
            imagem:
        }
        
  
 ]
}