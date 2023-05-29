import { Flex, Heading,Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";



export const Footer: FC = () => {
    return (
        <Flex
        grow={1}
        as="footer"
        padding={4}
        gap={3}
        justify="space-between"
        align="center"
        borderTop="2px solid rgba(165, 42, 42, 1)"
        marginX={4}
        marginTop={16}
        >
    
      <Flex direction="column">
        <Heading fontSize="1.5rem">Nr_Candy</Heading>
        <Text>&copy: Nr_Candy 2023 - Todos os direitos Reservados.</Text>
      </Flex>

     <Flex direction="column">
        <Heading fontSize="1rem">Redes de Contato</Heading>
        <Flex gap={3}>
            <Link href="https://instagram.com" target="blanck">
                <FaInstagram/>
            </Link>
            <Link href="https://www.facebook.com" target="blank">
                <FaFacebook/>
            </Link>
            <Link href="https://www.youtube.com" target="blank">
                <FaYoutube/>
            </Link>
            
            <Flex>
            <Text>Números para contato</Text>

               <Text>(11) 96352-9854
                <FaWhatsapp/>
               </Text>

               <Text>(11) 92146-3040
                <FaWhatsapp/>
               </Text>
            </Flex>
            </Flex>    
             </Flex>


        </Flex>
    )
}