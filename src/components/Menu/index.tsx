import { FC } from "react"
import { Flex, Stack, StackItem } from "@chakra-ui/react"
import {Link} from "@chakra-ui/next-js"



interface MenuProps{
    isOpen: boolean
}

export const Menu: FC<MenuProps> = ({isOpen}) => {
  return (
    <Flex
    display = {{base:isOpen? 'block' : 'none', md: 'block'}}
   flexBasis = {{base: '100%', md:'auto'}}
   marginLeft={6}
   marginRight='auto'
   >
    <Stack
    spacing={10}
    align="center"
    pt={[6,6,0]}
    direction={['column', 'row']}>



  <StackItem>
    <Link href="/">Chocolates</Link>
  </StackItem>

  <StackItem>
    <Link href="/">Artigos de Festa</Link>
  </StackItem>

<StackItem>
  <Link href="/">Encomendas</Link>
</StackItem>

<StackItem>
  <Link href="/">Contatos </Link>
</StackItem>

  <StackItem>
    <Link href="/">Nr_Candy</Link>
  </StackItem>

</Stack>

   </Flex>
  )
}
    













    