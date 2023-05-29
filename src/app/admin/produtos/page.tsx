'use client'

import { listarLojas } from "@/services/lojaService"
import { getProdutos } from "@/services/produtoService"
import { Flex, Table, Thead, Tr, useDisclosure,Th, Tbody, Td, IconButton } from "@chakra-ui/react"
import { AdminHeader } from "../components/AdminHeader"
import { FaPencilAlt, FaTrash } from "react-icons/fa"
import { ModalProduto } from "./ModalProduto"





export default function ProdutosPage() {
    const {isOpen,onOpen,onClose} = useDisclosure()

    const produtos = getProdutos()
    const lojas = listarLojas()

    return(
      <Flex direction="column" grow={1} gap={4}>
        <AdminHeader
        title="produtos"
        buttonLabel="Novo Produto"
        onClick={onOpen}
        />
        <Flex>
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Nome</Th>
                        <Th>Preco</Th>
                        <Th>Descrição</Th>
                        <Th>Desconto</Th>
                        <Th>Loja</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {produtos.map((produto) => (
                        <Tr key={produto.id}>
                            <Td>{produto.id}</Td>
                            <Td>{produto.nome}</Td>
                            <Td>{produto.preco}</Td>
                            <Td>{produto.descricao}</Td>
                            <Td>{produto.desconto}</Td>
                            <Td>{produto?.loja?.nome}</Td>


                         <Td>
                            <Flex gap={3}>
                                <IconButton
                                aria-label="Editar"
                                icon={<FaPencilAlt/>}
                                colorScheme="purple"
                                />
                                <IconButton
                                aria-label="Apagar"
                                icon={<FaTrash/>}
                                colorScheme="blue"
                                />
                            </Flex>
                         </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
        <ModalProduto isOpen={isOpen} onClose={onClose} lojas={lojas}/>
      </Flex>
    )
}