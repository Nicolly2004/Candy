'use client'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Heading, IconButton, useDisclosure,Text,Link } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'



const validaLogin = yup.object().shape({
    email: yup
    .string()
    .email('Informe um E-mail válido')
    .required('Campo Obrigatório!!!'),

    senha: yup
    .string()
    .required('Informe sua senha utilizando números e caracteres')
    .min(5,'Campo Obrigatório, senha mínima de 5 caracteres ')
})

type Dados = {
    email: string
    senha: string
}

export default function PageLogin() {
    const {
        register,
        handleSubmit,
        formState: {isLoading, errors},
    } = useForm<Dados>({
        resolver: yupResolver(validaLogin)
    });

    const {PageLogin} = useAuth()
    const { isOpen: isShowing, onToggle} = useDisclosure()

      
    const onSubmit = async (data: Dados) => {
        await PageLogin (data)
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
            boxShadow="10px 10px 15px rgba(255, 228, 196, 1)"
          >
            <Heading

            fontSize="2rem"
             color="pink.700">
                Login
             </Heading>

             <Flex
             as="form"
             direction="column"
             gap={4}
             mt={2}
             pt={2}
             borderTop="1px solid rgba(165, 42, 42, 1)"
             onSubmit={handleSubmit(onSubmit)}
             >

             <Input
             id="email"
             type="email"
             label = "E-mail"
             placeholder='Nome Sobrenome'
             {...register('email')}
             error={errors.email}
              />
              <Flex>

            <Input
            id="senha"
            type = {isShowing ? 'text' : 'password'}
            label = 'Senha'
            {...register('senha')}
            error={errors.senha}
            />

            <IconButton
            aria-label='Trocar visibilidade da senha'
            onClick={onToggle}
            icon={isShowing ? <FaEye/> : <FaEyeSlash/>}
            />

            </Flex>
            
             <Button 
             type="submit"
              colorScheme='blue.400' 
              isLoading={isLoading} >
                Entrar
              </Button>
             </Flex>

             <Flex
             as="footer"
             borderTop="1px solid rgba(165, 42, 42, 1)"
             mt={4}
             pt={4}
             >
                <Text>
                    Ainda não possui conta com a gente? {' '}
                    <Link 
                    href="/cadastro" 
                    fontWeight={400}
                    color='blue.200'
                    >
                        Cadastre-se
                    </Link>
                </Text>
             </Flex>
          </Flex>
    )


}