import { Flex, HStack, Heading } from "@chakra-ui/react"
import { FC } from "react"
import { CheckoutButton } from "../CheckoutButton"
import { UserMenu } from "../UserMenu"



export const HeaderUser: FC = () => {
    return (
        <Flex
        position="fixed"
        justify="space-between"
        p={4}
        zIndex={999}
        w="100%"
        bg="gray.50"
        align="center"
        >

            <Heading fontSize="1rem">NR_Candy</Heading>
            <HStack>
                <UserMenu/>
                <CheckoutButton/>
            </HStack>
        </Flex>
    )
}