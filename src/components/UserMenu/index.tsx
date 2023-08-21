import { useAuth } from "@/contexts/AuthContext";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FC } from "react";
import { FaCog, FaDoorOpen, FaUserAlt, FaUserCog } from "react-icons/fa";


export const UserMenu :FC = () => {

    const {logout} = useAuth()
        return (
            <Menu>
                <MenuButton
                as={IconButton}
                aria-label="Informações do Usuário"
                icon={<FaUserAlt />}
                />
                    <MenuList>
                        <MenuItem as={Link} href="/perfil"  color="pink.700" icon={ <FaUserCog />} >
                            Perfil
                        </MenuItem>

                        <MenuItem as={Link} href="/admin" color="blue.500" icon={<FaCog />} >
                            Painel de ADM
                        </MenuItem>
        
                        <MenuItem as={Button} color="purple.500" icon={<FaDoorOpen />} >
                            Sair
                        </MenuItem>

                   
                </MenuList>
            </Menu>
        )
}