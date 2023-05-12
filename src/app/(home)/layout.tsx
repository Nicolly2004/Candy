'use client'

import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'


interface AuthLayoutProps{
    children:ReactNode
}

export default function AuthLayout({ children } : AuthLayoutProps) {
    return (
    <Flex
    bg="blue.300"
    minH="100vh"
    minW="100vw"
    align="center"
    justify="center"
    >
        {children}
    </Flex>
    )
}