'use client'
import { listarLojas } from "@/services/lojaService";
import { Button, Flex, FormControl, Heading, Icon, Input, InputGroup, InputLeftAddon, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from 'react-query'
import { GoSearch } from 'react-icons/go'
import { CardDestaque } from "@/components/CardDestaque";
import { CardLoja } from "@/components/CardLoja";




export default function Page() {
    const [busca,setBusca] = useState("")
    const data = {data:listarLojas()}
    const isLoading = false
    const isError = false

   return (
    <Flex direction="column" align="center" grow={1} bg="pink.50">
        <Flex as="hgroup" direction="column" align="center">

           <Heading as="h1" fontSize="2rem" color="pink.800">
                Compras faceis em apenas alguns cliques
           </Heading>

           <Heading as="h2" fontSize="1rem" color="blue.200">
                Tudo com preços acessíveis!!!
           </Heading>
        </Flex>

     <Flex
     as="section" w="100%">

        <FormControl
        flexDirection="row"
        display="flex"
        gap={4}
        marginX="48"
        marginTop="8"
    >
      
        <InputGroup>
        <InputLeftAddon bg='purple.200' border="2px solid purple.200">
            <Icon as={GoSearch}/>
        </InputLeftAddon>

        <Input
        type="text"
        placeholder="Clique para pesquisar"
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        borderRadius="none"
        />
        </InputGroup>

        <Button color="pink.800"  bg="blue.200" borderRadius="10px">
            Buscar Produto
        </Button>
        </FormControl>
     </Flex>


     <Flex as="section" mt={10} gap={4}>
        <CardDestaque 
        src="/goma.jpeg"
        path="/"
        titulo="Chocolates"
        color="blue"
        />


        <CardDestaque
        src="/Festa.png"
        path="/"
        titulo="Artigos de Festa"
        color="purple"
        />
     </Flex>

     <Flex 
   as="section"
   maxW="90vw"
   marginLeft="5vw" 
   direction={'column'}
   mt={10}
   >

  <Heading fontSize="2rem" color="pink.800">Lojas</Heading>


  <Flex  gap={8} mt={2} wrap="wrap" align="center">
       {isLoading? 
       <Spinner size="md"/>
      : isError?
       <Text>Ocorreu um erro</Text>
      :
    data?.data?.map((loja) => (
    <CardLoja key={loja.id} loja={loja} path={`/loja/${loja.id}`}/>
    ))
}
</Flex>
     </Flex>
    </Flex>
   )
}