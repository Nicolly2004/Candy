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
        imagem:'/Choc aoleitebarra k.webp',
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
            nome: 'Chocolate Ao leite',
            preco: 35.90,
            descricao: 'Chocolate ao leite em Gotas - 2k, Hersheys',
            imagem:'/Choc em gota ao leite 2k.webp',
        },

        {
            id: '4',
            nome: 'Chocolate Branco',
            preco: 88.80,
            descricao: 'Chocolate branco em barra - 1K, Nestlé',
            imagem:'/Choc braco barra 1k.png',
        },

        {
            id: '5',
            nome: 'Chocolate Branco',
            preco: 24.50,
            descricao: 'Chocolate branco em barra - 500g, Melken',
            imagem:'/ Choc branco barra 500g.png',
        },

        {
            id: '5',
            nome: 'Chocolate Branco',
            preco: 44.40,
            descricao: 'Chocolate branco em Gotas - 1K, Hersheys',
            imagem:'/Choc brando em gotas 1k.webp',
        },


        {
            id: '6',
            nome: 'Chocolate Meio-Amargo',
            preco: 45.80,  
            descricao: 'Chocolate meio-amargo Gold em barra - 1K, Sicao',
            imagem:'/Choc meio amargo1k.webp',
        },

        {
            id: '7',
            nome: 'Chocolate Meio-Amargo',
            preco: 35.80,
            descricao: 'Chocolate Meio-Amargo- 500g, Garoto',
            imagem:'/Choc meio amargo500g.jpeg',
        },
        
        {
            id: '8',
            nome: 'Chocolate Meio-Amargo',
            preco: 80.89,
            descricao: 'Chocolate Meio-Amargo em gotas -2K',
            imagem:'/Choc meio amargo gotas2k.webp',
        },
         {
            id: '9',
            nome:'Balões Coloridos',
            preco:8.98,
            descricao: 'Balões coloridos N.09',
            imagem:'/baloes.png',
         },
         {
            id: '10',
            nome:'Balões solidos',
            preco:10.90,
            descricao: 'Balões de cor unica N.09',
            imagem:'/balao.png',

         },
         {
            id: '11',
            nome:'Cofeitos coloridos',
            preco:10.90,
            descricao: 'Confeitos coloridos para doces',
            imagem:'/confete.webp',

         },
         {
            id: '12',
            nome:'Bala de Coração',
            preco:19.41,
            descricao: 'Bala de coração',
            imagem:'/balac.jpeg',

         },
         {
            id: '13',
            nome:'Pirulito de Yogurte',
            preco:10.90,
            descricao: 'Pirulito de Yogurte',
            imagem:'/pirulito.j.jfif',

         },
         {
            id: '14',
            nome:'Gomets',
            preco:16.85,
            descricao: 'Bala de goma',
            imagem:'/goma.jpeg',

         }
        
  
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