    import { useCart } from "@/contexts/CartContext";
    import { formataMoeda } from "@/helpers/formataMoeda";
    import { Button,
        Flex,
        Popover,
        PopoverArrow, 
        PopoverBody,
            PopoverContent, 
            PopoverHeader, 
            PopoverTrigger,
            HStack,
            StackItem,
            Text,
            Image,
            IconButton,
            Heading,
            PopoverFooter
            } from "@chakra-ui/react";
    import Link from "next/link";
    import { FC } from "react";
    import { FaCreditCard, FaShoppingBasket, FaTrashAlt } from "react-icons/fa";



export const CheckoutButton: FC = () => {
      const {quantidade,valor,produtos,removeFromCart} = useCart()


      return (
        <Popover>
            <PopoverTrigger>
                <Button
                onClick={() => console.log('clique')}
                leftIcon={<FaShoppingBasket />}
                >

            <Flex
            direction="column"
            fontSize="10px"
            fontWeight={600}>
                <Text>{formataMoeda(valor)}</Text>
                <Text>{quantidade} Itens</Text>
            </Flex>
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow/>
                <PopoverHeader>Seus Itens</PopoverHeader>
                <PopoverBody>
                    <HStack  gap={5}>
                          {produtos?.map((produto,i) => {
                            if (!produto) return null
                               return (
                                <StackItem key={i} >
                                    <Flex gap={3} align="center">
                                        <Image
                                        src={produto.imagem}
                                        w={8}
                                        h={8}
                                        fit="cover"
                                        alt={`Imagem do produto ${produto.nome}`}
                                        borderRadius="full"
                                        />
                                        <Flex direction="column">
                                            <Text fontWeight={800} fontSize="13px" noOfLines={1}>
                                                {produto.nome}
                                            </Text>

                                        <Flex fontWeight={500} fontSize="13px">
                                            {produto.quantidade} x {' '}
                                            {formataMoeda(produto.preco * produto.quantidade)}
                                        </Flex>
                                        </Flex>


                                        <IconButton
                                        aria-label="Remover Item"
                                        icon={<FaTrashAlt/>}
                                        colorScheme="red"
                                        onClick={() => {
                                            removeFromCart(produto.id)
                                        }}
                                         ml="auto"
                                         />
                                    </Flex>
                                </StackItem>
                               )
                          })}
                         
                         {produtos?.length == 0 && (
                            <StackItem>
                                <Heading fontSize="12px">
                                    Não há nenhum item no seu carrinho
                                </Heading>
                            </StackItem>
                         )}
                    </HStack>
                </PopoverBody>

                <PopoverFooter>
                    <Button
                    width="100%"
                    colorScheme="green"
                    leftIcon={<FaCreditCard/>}
                    as={Link}
                    href="/pagamento"
                    >
                        Formas de Pagamento
                    </Button>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
      )
}