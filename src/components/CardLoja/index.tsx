import { Loja } from "@/services/lojaService";
import { Box, Flex ,Heading,Icon,Image,Text} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { StarRating } from '../StarRating'





interface CardLojaProps {
    loja: Loja
    path: string
}


export const CardLoja: FC<CardLojaProps> = ({
    path,
    loja: {
        nome,
        nota,
        tempo,
        taxaEntrega,
        categoria,
        distancia,

}) => {
       
      const moneyFormatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })

       return (
        <Flex
        as={Link}
        href={path}
        padding={4}
        bg="pink.30"
        borderRadius="10px"
        align="center"
        justify="space-between"
        _hover = {{
            transform: 'scale(1.02)',
            boxShadow: '10px 10px 15px rgba(220, 20, 60, 1)',
            textDecoration: 'none'
         }}
         transition="all 0.2s"
         >

         <Flex 
         gap={4}
         align="center"
         justify="space-between">

        <Image
        height="100px"
        width="100px"
        objectFit="cover"
           src="/Logo.png"
           alt={`Logotipo da Loja ${nome}`}
           borderRadius="full"
           />

         <Flex direction="column" gap={2}>
            <Heading fontSize="2rem">{nome}</Heading>

            <Flex gap={2} fontSize="0.9rem" color="pink.700">
                <Box color="yellow.500">
                    <Icon as={FaStar} />{nota}
                </Box>
             
             <Text as="span">•</Text>

             <Text>{categoria}</Text>

             <Text as="span">•</Text>

             <Text>{distancia}</Text>
        </Flex>
           
           <Flex gap={2} fontSize="0.9rem" color="pink.700">
            <Text>{tempo}</Text>

            <StarRating nota={nota} />


            <Text as="span">•</Text>


            {taxaEntrega > 0 ? (
                <Text>{moneyFormatter.format(taxaEntrega)}</Text>
            ) : (
                <Text color="green.200">Grátis</Text>
            )}

            </Flex>
          </Flex>
       </Flex>
     </Flex>
       )

}