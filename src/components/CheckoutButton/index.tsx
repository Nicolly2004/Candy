import { useCart } from "@/contexts/CartContext";
import { formataMoeda } from "@/helpers/formataMoeda";
import { Button, Flex, Popover, PopoverTrigger,Text } from "@chakra-ui/react";
import { FC } from "react";
import { FaShoppingBasket } from "react-icons/fa";



export const CheckoutButton: FC = () => {
      const {quantidade,valor,produtos,remoeFromCart} = useCart()


      return (
        <Popover>
            <PopoverTrigger>
                <Button
                onClick={() => console.log('clique')}
                leftIcon={<FaShoppingBasket />}
                >

            <Flex
            direction="column"
            fontSize="10px"
            fontWeight={600}>
                <Text>{formataMoeda(valor)}</Text>
            </Flex>

                </Button>
            </PopoverTrigger>
        </Popover>
      )
}