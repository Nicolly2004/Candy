import {
     FormControl,
      FormErrorMessage,
      Input as ChakraInput,
       FormLabel,
        InputProps } from "@chakra-ui/react"
import { forwardRef } from "react"
import { FieldError } from "react-hook-form"


interface InputBaseProps extends InputProps{
    id: string
    type:string
    label:string
    error?: FieldError
}


const InputBase = ({ id,type,label,error,...resto}: InputBaseProps,ref:any) => {
    return (
        <FormControl
          isInvalid={!!error}>
            <FormLabel
            htmlFor={id}>
                {label}
                </FormLabel>
                <ChakraInput
                type={type}
                id={id}
                {...resto}
                ref={ref}
                variant="flushed"
                focusBorderColor="gray.500"
                />
                {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
          </FormControl>
    )
}

export const Input = forwardRef<HTMLInputElement,InputBaseProps>(InputBase)