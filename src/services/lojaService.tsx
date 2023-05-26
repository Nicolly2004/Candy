

export interface Loja{
    id:string 
    nome: string
    categoria: string
    imagemCover: string 
    imagemLogo: string
    distancia: string
    nota: number 
    tempo: number
    pedidoMinimo:number
    taxaEntrega: number 
}




export const listarLojas = () => {
    return [
        {
            id: '1',
            nome: 'Chocolateria Bom Preço',
            categoria: 'Chocolates',
            imagemCover:  'chocolateria.png',
            imagemLogo: 'chocolateria.png',
            distancia: '2,0 km',
            nota: 5 ,
            tempo: '40 min',
            pedidoMinimo: 70,
            taxaEntrega: 10,

        },

        {
            id: '2',
            nome: 'Cubic Cut',
            categoria: 'Cookies',
            imagemCover:  'cookie.png',
            imagemLogo: 'cookie.png',
            distancia: '1,5 km',
            nota:   4.5,
            tempo: '20 min',
            pedidoMinimo: 30,
            taxaEntrega: 7,

        },

        {
            id: '3',
            nome: 'Beco do Brownie',
            categoria: 'Brownie',
            imagemCover: 'brownie.png', 
            imagemLogo: 'brownie.png',
            distancia: '1 km',
            nota:  5,
            tempo: 20,
            pedidoMinimo: 30,
            taxaEntrega:  5,

        },

        {
            id: '4',
            nome: 'PicNic Festas & Eventos',
            categoria: 'Festas',
            imagemCover:  'PicNick.pgn',
            imagemLogo:  'PicNick.pgn',
            distancia: '1 km',
            nota:  5,
            tempo: '50 min',
            pedidoMinimo: 100,
            taxaEntrega: 15,

        },

        {
            id: '5',
            nome: 'Tutto Dolce',
            categoria: 'Doces no Pote',
            imagemCover:  'tutto.png',
            imagemLogo: 'tutto.png',
            distancia: '1,5 km',
            nota:  5,
            tempo: '35 min',
            pedidoMinimo: 30,
            taxaEntrega: 7,

        },

        {
            id: '6',
            nome: 'Fare la Festa',
            categoria: 'Doces de festa personalizados',
            imagemCover:  'fare.png',
            imagemLogo:  'fare.png',
            distancia: '3 km',
            nota:  5,
            tempo: '1h',
            pedidoMinimo: 250,
            taxaEntrega: 20,

        }
    ]
}