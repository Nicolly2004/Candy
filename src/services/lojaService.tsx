


export interface Loja {
    id:string
    nome: string
    nota: number
    categoria: string
      
    imageLogo: string
    imageCover: string
}

export const listarLojas = () => {
    return [
        {
        id: '1',
        nome: 'Pic Nic artigos de festa',
        nota: 5.0,
        categoria: 'artigo de festa',          
        imageLogo: '/picnic.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
        id: '2',
        nome: 'Tutto Dolce',
        nota: 5.0,
        categoria: 'doce', 
        imageLogo: '/tutto.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
        id: '3',
        nome: 'Cookie ',
        nota: 4.7,
        categoria: 'cookie ',
        imageLogo: '/cookie.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        {
        id: '4',
        nome: 'Fare la Festa',
        nota: 4.9,
        categoria: 'doces personalizados',
        imageLogo: '/fare.png',
        imageCover: 'https://picsum.photos/1200/250',
        },
        ]
        
        
}

export const obterLoja = (id: string) => {
    return listarLojas().find((loja) => loja.id === id)
}