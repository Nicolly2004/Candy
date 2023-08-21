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
        nome: 'Chocolate Branco',
        preco:52.84,
        descricao:'Chocolate branco em gotas de 1K, Nestlé',
        imagem:'/Choc brando em gotas 1k.webp',
        loja: {

            id: '1',
            nome: 'Chocolateria Bom Preço',
            categoria: 'Chocolates',
            distancia: '2,0 km',
            nota: 5 ,
            tempo: 40 ,
            pedidoMinimo: 70,
            taxaEntrega: 10,
            imagemCover: '/marsh.png',
            imagemLogo:'/logo.png',
        },
    },
        {
            id: '2',
            nome: 'Chocolate Ao leite',
            preco: 27.90,
            descricao: 'Chocolate ao leite em barra - 500g, Nestlé',
            imagem:'/Choc ao leite barra 500g.png',
        },

       
         {
            id: '3',
            nome:'Balões Coloridos',
            preco:8.98,
            descricao: 'Balões coloridos N.09',
            imagem:'/baloes.png',
         },
         {
            id: '5',
            nome:'Confeito Colorido',
            preco:10.90,
            descricao: 'Confeitos coloridos para doces',
            imagem:'/confete.webp',

         },
         {
            id: '4',
            nome:'Balões solidos',
            preco:10.90,
            descricao: 'Balões de cor unica N.09',
            imagem:'/balao.png',

         },
         {
            id: '6',
            nome:'Chocolate meio amargo',
            preco:37.90,
            descricao: 'Chocolate meio amargo 1kg',
            imagem:'/Choc meio amargo1k.webp',

         },
        
        
  
 ]
}


export function getProduto(id:string): Produto | undefined {
    return getProdutos().find((produto) => produto.id === id)
}

export function updateProduto<DataForm>(id: string | number, produto: DataForm): Produto {
      return {
            id: '10',
            nome:'Balões solidos',
            preco:10.90,
            descricao: 'Balões de cor unica N.09',
            imagem:'/balao.png',
      }
}

export function createPoduto<DataForm>(produto: DataForm): Produto {
    return {
        id: '12',
        nome:'Bala de Coração',
        preco:19.41,
        descricao: 'Bala de coração',
        imagem:'/balac.jpeg',
    }
}