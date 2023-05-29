'use client'

import { UserMenu } from "@/components/UserMenu";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { SideMenu } from "./admin/components/SideMenu";
import { Footer } from "@/components/Footer";





interface AdminLayoutProps {
    children: ReactNode
}

export default function AdminLayout({children} : AdminLayoutProps) {
    return (
        <Grid
        gridTemplate={`"header header header"
                                   "sideMenu conteudo conteudo"
                                     "footer footer footer"
`}
gridRow="80px auto 80px"
gridTemplateColumns="200px auto"
minH="100vh"
>

    <GridItem gridArea="header" borderBottom="2px solid rgba(165, 42, 42, 1)"
    >
        <Flex as="header" align="center" justify="space-between" p={4}>

            <Link href="/">
                <Heading fontSize="lg">Nr_Candy</Heading>
            </Link>

            <Flex align="center" justify="flex-end">
                <UserMenu/>
            </Flex>

        </Flex>
    </GridItem>

    <GridItem gridArea="sideMenu">
        <SideMenu/>
    </GridItem>

    <GridItem gridArea="conteudo" p={4}>
        {children}
    </GridItem>

    <GridItem gridArea="footer">
        <Footer/>
    </GridItem>

</Grid>

    )
}