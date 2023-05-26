import { formataMoeda } from "@/helpers/formataMoeda";
import { Produto } from "@/services/produtoService";
import { Card, CardBody ,Heading,Image,Stack,Text} from "@chakra-ui/react";
import { FC,  } from "react";
import { useCart } from "@/contexts/CartContext"


export interface CardProdutoProps {
    produto: Produto
    handleOpenModal: (id:string) => void 
}

export const CardProduto: FC<CardProdutoProps> = ({
    produto: { nome, preco, descricao, imagem, id, },
    handleOpenModal
}) => {
    
    const { addToCart } = useCart()

    return(
        <Card
        maxW="sm"
        onClick={() => handleOpenModal(id)}
        _hover = {{ transform: 'scale(1.01)'}}
        transition="all 0.2s">
 
        <CardBody padding={0}>
            <Image
            src={imagem}
            alt={'Imagem do produto' + nome}
            />
 
         <Stack mt={5} mx={5}>
            <Heading size="md">{nome}</Heading>
            <Text color="green.500">{formataMoeda(preco)}</Text>
         </Stack>
        </CardBody>



        </Card>

    )



}