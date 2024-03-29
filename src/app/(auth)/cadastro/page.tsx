'use client'

import { Button, Flex, Heading,IconButton,Text, useDisclosure } from '@chakra-ui/react';
import { Input } from '@/components/Input'
import { Link } from '@chakra-ui/next-js'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { FaEye,FaEyeSlash } from 'react-icons/fa';


const validaCadastro = yup.object().shape({
     nome: yup
     .string()
     .required('Digite seu nome')
     .test({
        name: 'sobrenome',
        test: (value:string) => {
            const nome = value.trim();
            return nome.split(' ').length > 1
        },
        message: 'Por favor, insira 1 sobrenome',
     }),
    email: yup 
    .string()
    .email('Informe um E-mail válido')
    .required('Campo Obrigatório!!!'),

    senha:yup 
    .string()
    .required('Informe sua Senha')
    .min(5,'quantidade mínima de 5 caracteres'),

    confirmaSenha:yup 
    .string()
    .required('Confirme sua Senha')
    .min(5,'quantidade mínima de 5 caracteres')
    .oneOf([yup.ref('senha'), ''], 'As senhas não coicidem'),
})

type FormularioCadastro = {
    nome: string
    email: string
    senha: string 
    confirmaSenha: string
}

export default function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: {isSubmitting, errors},
    } = useForm<FormularioCadastro>({
        resolver: yupResolver(validaCadastro),
    })


    const cadastraUsuario = async (dados: FormularioCadastro) => {
        await new Promise((resolver) =>{
            setTimeout(() => resolver(dados), 3*1000)
        })
    }
    
        return(
            <Flex
            as="main"
           backgroundImage="/fundotextura.jpg"
            color="purple"
            minW="40vw"
            textAlign="center"
            padding={6}
            borderRadius="12px"
            direction="column"
            boxShadow="10px 10px 15px rgba(220, 20, 60, 1)"
            >
        <Heading fontSize="2rem" color="pink.700">Cadastre-se</Heading>
        <Flex
        as="form"
        direction="column"
        align="center"
        gap={4}
        mt={2}
        pt={2}
        borderTop="2px solid rgba(165, 42, 42, 1)"
        onSubmit={handleSubmit(cadastraUsuario)}
        >
    
        <Input
        label="Nome"
        id="nome"
        type='text'
        placeholder='Nome Sobrenome'
        {...register('nome')}
        error={errors.nome}
       />

       <Input
       label="E-mail"
       id="email"
       type="text"
       placeholder="email@dominio.com.br"
       {...register('email')}
        error={errors.email}
        />

      
        <Input
        label="Senha"
        id="senha"
        type="password"
        placeholder="********"
        {...register('senha')}
        error={errors.senha}  
        />
         
        <Input
        label="Confirme sua senha"
        id="conforme-senha"
        type="password"
        placeholder="********"
        {...register('confirmaSenha')}
        error={errors.confirmaSenha}
        />

        <Button 
        type="submit"
        fontFamily="sans-serif"
        isLoading={isSubmitting}
        color='black'
        maxW="300px"
        bg="pink.700"
        borderRadius="7px">
            Quero me Cadastrar!!!
        </Button>
        </Flex>

        <Flex as="footer" borderTop="2px solid rgba(165, 42, 42, 1)" mt={4} pt={4}  align="center" justify="center"  >
            <Text 
            >
            Já possui uma conta com a gente? {' '}
            <Link href="/login" fontWeight={600} color="purple.400" fontFamily="sans-serif">
                Acesse-a
            </Link>
            </Text>
        </Flex>
            </Flex>
        )
}


    