'use client'

import { Flex, Heading } from "@chakra-ui/react"


    export default function Loading() {
        return (
        <Flex
        w="150vw"
        h="150vh" 
        align="center"
        direction="column"
        bg= "pink.100"
        backgroundImage="/fundo.png"
        >

    <Heading fontSize="30px" color="brown" >Nr_Candy</Heading>

    <Heading fontSize="15px" color="brown">Carregando</Heading>
        </Flex>
        ) 
    }