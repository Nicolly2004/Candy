'use client'


import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import { ReactNode, FC} from 'react'
import { tema } from './config/tema'



interface ProviderProps {
    children: ReactNode
}

export const Providers: FC<ProviderProps> = ({ children }) => {
    return (
        
         <AuthProvider>
            <CartProvider>
                <CacheProvider>
                    <ChakraProvider 
                    theme={tema}>
                        {children}
                        </ChakraProvider>
                </CacheProvider>
            </CartProvider>
         </AuthProvider>
    )
}     