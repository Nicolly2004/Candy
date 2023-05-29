import { Flex, Icon, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"


interface SideMenuItemPops {
    icon: any
    title:string
    path: string 
}

export const SideMenuItem: FC<SideMenuItemPops> = ({icon,title,path}) => {
    return ( 
        <Flex 
        p={4}
        as={Link}
        href={path}
        align="center"
        gap={2}
        _hover = {{textDecoration: 'none', bg: 'pink.50'}}
        >
            <Icon as={icon} />
            <Text>{title}</Text>
        </Flex>
    )
}