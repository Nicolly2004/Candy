import { Button, Flex, Heading } from "@chakra-ui/react"
import {Link} from "@chakra-ui/next-js"
import { FC } from "react"
import { MenuToggle } from "../MenuToggle"
import { Menu } from '../Menu'




interface HeaderProps{
    isOpen: boolean
    onToggle: () => void
}

export const Header : FC<HeaderProps> = ({isOpen, onToggle}) => {
    return (
        <Flex
        gap="6px"
        w="100%"
        wrap="wrap"
        justify="space-between"
        paddingX={9}
        paddingY={10}
        align="center"
        transition="all 0.5s"
        maxH={{base: 'auto', md:'140px'}}
        bg="purple.200"
        zIndex="9999"
        position="fixed"
        >

     <MenuToggle isOpen={isOpen} onToggle={onToggle}/>
     <Link href="/">
        <Heading fontSize={['15px', '2rem']}>Nr_Candy</Heading>
     </Link>
     <Menu isOpen={isOpen}/>
     <Flex gap="6" display={{base: isOpen? 'flex': 'none', md: 'flex'}}>

     <Button
     as={Link}
     href="/cadastro"
     variant="link"
     colorScheme="red">
        Cadastre-se e receba nossos descontos!!!
     </Button>

     <Button
     as={Link}
     href="/login"
     colorScheme="black">
        Entre e confira nossas promoções!!!
     </Button>


     </Flex>
        </Flex>
    )
}