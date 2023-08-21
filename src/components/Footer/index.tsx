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
        height="200px"
        flexDirection="column"
        justify="space-between"
        align="center"
        borderTop="3px solid rgba(147,112,219)"
        marginX={4}
        marginTop={16}
        >
    
      <Flex direction="column" color="purple">
        <Text>&copy: Nr_Candy 2023 - Todos os direitos Reservados.</Text>
      </Flex>

     <Flex direction="column" align="center">
        <Heading fontSize="1rem" color="blue.400">Redes de Contato</Heading>
        <Flex gap={3} mt={4} color="pink.400">
            <Link href="https://instagram.com" target="blanck">
                <FaInstagram/>
            </Link>
            <Link href="https://www.facebook.com" target="blank">
                <FaFacebook/>
            </Link>
            <Link href="https://www.youtube.com" target="blank">
                <FaYoutube/>
            </Link>
            <Link href="https://www.whatsapp.com" target="blank">
                <FaWhatsapp/>
            </Link>

            </Flex>    
             </Flex>


        </Flex>
    )
}