'use client'
import { CardProduto } from "@/components/CardProduto"
import { CardProdutoHorizontal } from "@/components/CardProdutoHorizontal"
import { ModalProduto } from "@/components/ModalProduto"
import { StarRating } from "@/components/StarRating"
import { obterLoja } from "@/services/lojaService"
import { getProdutos } from "@/services/produtoService"
import { Flex, useDisclosure,Image, Heading, Button, Text, Icon, Divider } from "@chakra-ui/react"
import { redirect } from "next/navigation"
import { useState } from "react"
import { AiFillDollarCircle } from "react-icons/ai"



type LojaPros = {
    params: {
    id: string
    }
}

export default  function Loja({params:{id}}: LojaPros) {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const [addId,setAddId] = useState('')
    const dadosLoja = obterLoja(id)

    if(!dadosLoja){
        redirect('/')
        return
    }


    const handleOpenModal = (id:string) => {
        setAddId(id)
        onOpen()
    }

    const produtos = getProdutos()
 
    const moneyFormatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <Flex
        w="95vw"
        minH="100vh"
        marginX="2.5vw"
        bg="pink.100"
        direction="column"
        align="center"
        justify="flex-start"
        mt={2}
        overflow="hidden"
        >
            <Flex as="header" direction="column">
                 <Image
                 src={dadosLoja.imageCover}
                 alt={"Imagem de capa da empresa: " + dadosLoja.nome}
                 borderRadius="10px"
                 />

                 <Flex align="center" gap={4} mt={2} >
                    <Image
                    h="300px"
                    w="300px"
                    border="3px solid black"
                    src={dadosLoja.imageLogo}
                    alt={"Logo da empresa: " + dadosLoja.nome}
                    borderRadius="full"
                    />
                    <Heading fontSize="1.5rem">{dadosLoja.nome}</Heading>
                    <StarRating nota={dadosLoja.nota} />
                    <Flex ml="auto" gap={5} >
                        <Button variant="link" colorScheme="pink" >
                            Ver Mais
                        </Button>

                        <Text
                        as="small"
                        verticalAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="3px"
                        >
                         <Icon as={AiFillDollarCircle} direction="column"/>
                            Pedido Mínimo {moneyFormatter.format(dadosLoja.pedidoMinimo)}
                        </Text>
                    </Flex>
                 </Flex>

                 <Flex as="section" direction="column" grow={1} maxW="1200px" mt={2} gap={12}>
                    <Heading fontSize="2rem" color="orange.400">Destaques</Heading>
                    <Divider/>

                    <Flex direction = {{base: 'column', md: 'row'}} wrap="wrap" gap={6} mt={2} p={1}>
                        {produtos.map((produtos) => (
                            <CardProduto
                            handleOpenModal={handleOpenModal}
                            produto={produtos} key={produtos.id}/>
                        ))}
                    </Flex>
                 </Flex>

                 
                 <ModalProduto isOpen={isOpen} onClose={onClose} id={addId} />
            </Flex>
        </Flex>
    )
}