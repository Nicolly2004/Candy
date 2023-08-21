'use client'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Heading, IconButton, useDisclosure, Text, Link } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useAuth } from '@/contexts/AuthContext'



const validaLogin = yup.object().shape({
    email: yup
        .string()
        .email('Informe um E-mail válido')
        .required('Campo Obrigatório!!!'),

    senha: yup
        .string()
        .required('Informe sua senha utilizando números e caracteres')
        .min(5, 'Campo Obrigatório, senha mínima de 5 caracteres ')
})

type LoginDados = {
    email: string
    senha: string
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { isLoading, errors },
    } = useForm<LoginDados>({
        resolver: yupResolver(validaLogin)
    });

    const { login } = useAuth()
    const { isOpen: isShowing, onToggle } = useDisclosure()


    const onSubmit = async (data: LoginDados) => {
        await login(data)
        window.location.href = '/'
    }


    return (
        <Flex
            as="main"
            backgroundImage="/fundotextura.jpg"
            color="white"
            minW="40vw"
            padding={6}
            borderRadius="12px"
            direction="column"
            boxShadow="10px 10px 15px rgba(220, 20, 60, 1)"
        >
            <Heading

                fontSize="2rem"
                color="pink.700"
                align= "center"
            >
                Login
            </Heading>

            <Flex
                color="black"
                as="form"
                direction="column"
                gap={4}
                mt={2}
                pt={2}
                borderTop="2px solid rgba(165, 42, 42, 1)"
                onSubmit={handleSubmit(onSubmit)}
            >

                <Input
                    id="email"
                    type="email"
                    label="E-mail"
                    placeholder='Nome Sobrenome'
                    {...register('email')}
                    error={errors.email}
                />
                <Flex
                align="flex-end"
                gap={4}
                >

                    <Input
                        id="senha"
                        type={isShowing ? 'text' : 'password'}
                        label='Senha'
                        {...register('senha')}
                        error={errors.senha}
                    />

                    <IconButton
                        aria-label='Trocar visibilidade da senha'
                        onClick={onToggle}
                        icon={isShowing ? <FaEye /> : <FaEyeSlash />}
                    />

                </Flex>

                <Button
                    type="submit"
                    color='white'
                    bg="pink.700"
                    isLoading={isLoading} >
                    Entrar
                </Button>
            </Flex>

            <Flex
                as="footer"
                borderTop="2px solid rgba(165, 42, 42, 1)"
                mt={4}
                pt={4}
                color="black"
            >
                <Text>
                    Ainda não possui conta com a gente? {' '}
                    <Link
                        href="/cadastro"
                        fontWeight={600}
                        color='purple.400'
                    >
                        Cadastre-se
                    </Link>
                </Text>
            </Flex>
        </Flex>
    )


}