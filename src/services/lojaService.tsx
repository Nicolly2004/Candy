


export interface Loja {
    id:string
    nome: string
    nota: number
    categoria: string
    tempo: string
    distancia: string
    pedidoMinimo: number
    taxaEntrega: number
    imageLogo: string
    imageCover: string
}

export const listarLojas = () => {
    return [
        {
        id: '1',
        nome: 'Pic Nic artigos de festa',
        nota: 5.0,
        categoria: 'Artigos de festa',          
        imageLogo: '/picnic.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
        id: '2',
        nome: 'Tutto Dolce',
        nota: 5.0,
        categoria: 'Doces Italianos', 
        imageLogo: '/tutto.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
        id: '3',
        nome: 'Cubic Cut ',
        nota: 4.7,
        categoria: 'Cookies diversos ',
        imageLogo: '/cookie.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
        id: '4',
        nome: 'Fare la Festa',
        nota: 4.9,
        categoria: 'Doces gourmet',
        imageLogo: '/doces.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
            id: '5',
            nome: 'Amore Mio',
            nota: 5,
            categoria: 'Doces Personalizados',
            imageLogo: '/fare.png',
            imageCover: 'https://picsum.photos/1200/250',
            },
            {
                id: '6',
                nome: 'Cake & Cia',
                nota: 4.2,
                categoria: 'Bolos e Doces caseiros',
                imageLogo: '/confete.webp',
                imageCover: 'https://picsum.photos/1200/250',
                },
        ]
        
        
}

export const obterLoja = (id: string) => {
    return listarLojas().find((loja) => loja.id === id)
}