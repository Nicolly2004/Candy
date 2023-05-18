


export interface Endereco {
    logradouro: string
    numero: string 
    complemento: string 
    bairro: string
    cidade: string
    estado: string
    cep: string
}

export interface Usuario{
    id: string 
    nome: string 
    email: string
    endereco?: Endereco
}

export const obterUsuarios = (): Usuario[] => {
    return [
        {
            id: '1',
            nome: 'Nicolly Oliveira',
            email:'nicolly.olv@gmail.com',
            endereco: {
                logradouro: 'Rua Doutor Vicente Ancona',
                numero: '25',
                complemento: 'Casa 1',
                bairro: 'Jardim Nossa Senhora Aparecida',
                cidade: 'São Paulo',
                estado: 'SP',
                cep: '47851-30'
            },
        },
    ]}


    export const obterUsuarios = (id: string): Usuario | undefined  => {
        return obterUsuarios().find((usuario) => usuario.id === id)
    }