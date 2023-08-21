import { Button, Flex,Link,Text ,Image} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { AiOutlineRight } from 'react-icons/ai'




interface CardDestaqueProps {
    titulo: string;
    path:string;
    src:string;
    color:'purple' | 'blue'
}

export const CardDestaque: FC<CardDestaqueProps> = ({
     titulo,
     path,
     src,
     color,

}) => {
     
    const [currenColor,setCurrentColor] = useState('');


    useEffect(() => {
        if (color == 'purple') {
            setCurrentColor('purple.300')
        } else{
            setCurrentColor('blue.200')
        }
    }, [color])

    return (
        <Link
        href={path}
        _hover={{textDecoration: 'none', tranform: 'scale(1.02)'}}
        transition="all 0.2">

            <Flex
            padding={4}
            bg={currenColor}
            borderRadius="20px"
            textAlign="center"
            color="white"
            justify="center"
            overflow="hidden"
            textDecoration="none"
            >

            <Flex 
            direction="column"
            justify="space-around"
            align="flex-start"
            >
            
            <Text 
            fontSize="3xl"
            fontFamily="sans-serif"
            >
             {titulo}
            </Text>

            <Flex
            align="center"
            direction={['column-reverse', 'column-reverse','row']}>

            <Button
            variant="solid"
            colorScheme="gray"
            color="black"
            rightIcon={ <AiOutlineRight />}
            margin={4}
            >
                Ver Opções
            </Button>

           <Image 
           src="/doces.jpeg"
           alt="Imagem do card" 
           borderRadius="10px"
           border="3px solid white"
           maxH="150px"/>

            </Flex>
            </Flex>
            </Flex>
        </Link>

    )
}