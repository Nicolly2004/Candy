import { Button, Flex, Heading } from "@chakra-ui/react"
import {Link} from "@chakra-ui/next-js"
import { FC } from "react"
import { MenuToggle } from "../MenuToggle"
import { Menu } from '../Menu'
import { useAuth } from "@/contexts/AuthContext"
import { UserMenu } from "../UserMenu"
import { CheckoutButton } from "../CheckoutButton"




interface HeaderProps{
    isOpen: boolean
    onToggle: () => void
}

export const Header : FC<HeaderProps> = ({isOpen, onToggle}) => {
    const {isLogged} = useAuth()
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

     {isLogged ? (
        <Flex gap="6" display={{base: isOpen? 'flex': 'none', md: 'flex'}}>
         <UserMenu/>
         <CheckoutButton/>
         </Flex>
     ) : (
    
    <Flex gap="6" display={{base: isOpen? 'flex': 'none', md: 'flex'}}>
     <Button
     as={Link}
     href="/cadastro"
     variant="link"
     color="blue.400"
     >
         Quero me cadastrar 
     </Button>

     <Button
     as={Link}
     href="/login"
     color="purple.200"
     colorScheme="blue">
        Entrar
     </Button>
     </Flex>
     

     ) }
    
     </Flex>
     )
}