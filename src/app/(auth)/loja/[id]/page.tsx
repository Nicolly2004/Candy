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


    return (
        <Flex
        w="95vw"
        minH="100vh"
        marginX="2.5vw"
        direction="column"
        align="center"
        justify="flex-end"
        mt={2}
        overflow="hidden"
        >
            <Flex as="header" direction="column">
                 <Image
                 src={dadosLoja.imageCover}
                 alt={"Imagem de capa da empresa: " + dadosLoja.nome}
                 borderRadius="10px"
                 />

                 <Flex align="center" gap={4} mt={2}>
                    <Image
                    src={dadosLoja.imageLogo}
                    alt={"Logo da empresa: " + dadosLoja.nome}
                    borderRadius="full"
                    />
                    <Heading fontSize="1.7rem">{dadosLoja.nome}</Heading>
                    <StarRating nota={dadosLoja.nota} />
                    <Flex ml="alto" gap={5}>
                        <Button variant="link" colorScheme="pink">
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
                         <Icon as={AiFillDollarCircle} />
                            Pedido Mínimo {dadosLoja.pedidoMinimo}
                        </Text>
                    </Flex>
                 </Flex>

                 <Flex as="section" direction="column" grow={1} maxW="120px" mt={2}>
                    <Heading fontSize="1rem">Destaques</Heading>
                    <Divider/>

                    <Flex wrap="wrap" gap={6} mt={2}>
                        {produtos.map((produtos) => (
                            <CardProduto
                            handleOpenModal={handleOpenModal}
                            produto={produtos} key={produtos.id}/>
                        ))}
                    </Flex>
                 </Flex>

                 <Flex
                 as="section"
                 direction="column"
                 grow={1}
                 mt={2}
                 maxH="1200px"
                 >

                    <Heading fontSize="1rem">Produtos</Heading>
                    <Divider/>

                    <Flex
                    direction={{base: 'column', md: 'row'}}
                    gap={4}
                    wrap="wrap"
                    mt={2}
                    p={1}
                    >
                        {produtos.map((produto) =>(
                            <CardProdutoHorizontal
                            handleOpenModal={handleOpenModal}
                            produto={produto} key={produto.id}/>
                        ))}
                    </Flex>
                 </Flex>
                 <ModalProduto isOpen={isOpen} onClose={onClose} id={addId} />
            </Flex>
        </Flex>
    )
}