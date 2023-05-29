import { FormularioLoja } from './page'
import { useForm } from 'react-hook-form'
import { Loja } from '@/services/lojaService'
import { FC } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Flex, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Image, FormErrorMessage, Button} from '@chakra-ui/react'
import { formataMoeda } from '@/helpers/formataMoeda'
import { Input } from '@/components/Input'



const validacaoLoja = yup.object().shape({

      nome: yup.string().required('Informe o nome da loja.'),

      categoria: yup.string().required('Informe a que categoria a loja se encaixa.'),

      tempo: yup.string().required('Informe o tempo de preparo.'),

      logo:yup.mixed().test('type', 'Envie uma imagem no formato JPG ou PNG', (value: any) => {
        if (value.length > 0) {
            return value[0].type === 'image/png' || value[0].type === 'image/jpeg'
        }
        return false
      })
        .required('Informe o logo da loja.'),

        cover:yup.mixed().test('type', 'Envie uma imagem no formato JPG ou PNG', (value: any) => {
            if (value.length > 0) {
                return value[0].type === 'image/png' || value[0].type === 'image/jpeg'
            }
            return false
          })
            .required('Informe a capa da loja.'),

        pedidoMinimo: yup.string()
        .transform((value: string) => {
            if (!value) return '0'

            return (Number(value.replace(/\D/g,''))/ 100).toString()
        })
        .test({
            name:'pedido-minimo',
            message: 'O pedido mínimo deve ser maior ou igual a R$ 0,00',
            test: (value) => {
                if (!value) return false

                return Number(value) >= 0
            },
        })
        .required('Informe o valor do Pedido Mínimo.'),

        taxaEntrega: yup
        .string()
        .transform((value: string) => {
            if (!value) return '0'

            return (Number(value.replace(/\D/g,''))/ 100).toString()
        })
        .test({
            name: 'taxa-entrega',
            message: 'O valor da taxa deve ser maior ou igual a R$ 0,00',
            test: (value) => {
                if (!value) return false

                return Number(value) >= 0
            },
        })
        .required('Informe o valor da taxa de entrega'),
})  

interface FormLojaProps {
    isOpen: boolean
    onClose: () => void
    loja?: Loja
    salvarLoja: (loja: FormularioLoja) => Promise<void> 
}

export const FormLoja: FC<FormLojaProps>= ({
    isOpen,
    onClose,
    loja,
    salvarLoja,
}) => {
    const lojaData: FormularioLoja = {...loja,cover:'',logo:''}
       const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
        reset,
    } = useForm<FormularioLoja>({
        resolver: yupResolver(validacaoLoja),
        defaultValues:lojaData,
    })
     
    const handleSalvarLoja = (loja: FormularioLoja) => {
        salvarLoja(loja)
        reset()
    }

       return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{loja? "Editar Loja": "Nova Loja"}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Flex
                    as="form"
                    p={4}
                    direction="column"
                    gap={1}
                    onSubmit={handleSubmit(handleSalvarLoja)}
                    >

                     <Input
                     label='Nome'
                     type="text"
                     id="nome"
                     {...register('nome')}
                     error={errors.nome}
                    />

                    <Input
                    label="Categoria"
                    type="text"
                    id="categoria"
                    {...register('categoria')}
                    error={errors.categoria}
                    />

                   <Input
                    label="Tempo de Prepara"
                    type="text"
                    id="tempo"
                    {...register('tempo')}
                    error={errors.tempo}
                    />

                   <Input
                    label="Pedido Mínimo"
                    type="text"
                    id="pedidoMinimo"
                    {...register('pedidoMinimo')}
                    error={errors.pedidoMinimo}

                      onChange={({ target }) => {
                        setValue(
                            'pedidoMinimo',
                            formataMoeda(Number(target.value.replace(/\D/g,'')) / 100),
                        )
                      }}
                    />

                    <Input
                     label="Taxa de entrega "
                     type="text"
                     id="taxaEntrega"
                     error={errors.taxaEntrega}
                     {...register('taxaEntrega')}
                     onChange={({ target }) => {
                        setValue(
                            'taxaEntrega',
                            formataMoeda(Number(target.value.replace(/\D/g,'')) / 100),
                        )
                     }}
                     />

                     <Input
                     type="file"
                     label="Logo"
                     id="logo"
                     {...register('logo')}
                     display={'none'}
                     />

                     <FormControl isInvalid={!!errors.logo}>
                        <FormLabel htmlFor="logo">

                            <Image
                               alt='Imagem do Logo'
                               src={
                                typeof watch('logo') ! == 'undefined' &&
                                typeof watch ('logo')[0] === 'object'
                                ?URL.createObjectURL(watch('logo')[0])
                                : '/Logo.png'
                               }
                               w="100px"
                               h="100px"
                               objectFit="cover"
                               cursor={'pointer'}
                               />
                              
                              </FormLabel>

                                {!!errors.logo && (
                                    <FormErrorMessage>
                                        {errors.logo?.message as String}
                                    </FormErrorMessage>
                                )}
                                </FormControl>
                                
                                <Input 
                                type="file"
                                label="Capa"
                                id="cover"
                                {...register('cover')}
                                display={'none'}
                                />
                             
                             <FormControl isInvalid={!!errors.cover}>
                                <FormLabel htmlFor='cover'>
                                    <Image
                                    alt="imagem da capa"
                                    src={
                                        typeof watch('cover') !== 'undefined' &&
                                            typeof watch('cover')[0] === 'object'
                                            ? URL.createObjectURL(watch('cover')[0])
                                            : '/marsh.png'
                                    }
                                    w="100%"
                                    h="250px"
                                    objectFit="cover"
                                    cursor={'pointer'}
                                />
                                </FormLabel>

                                {!!errors.logo && (
                                    <FormErrorMessage>
                                        {errors.cover?.message as String}
                                    </FormErrorMessage>
                                )}
                             </FormControl>

                        <Button type="submit" colorScheme="green">
                            Salvar
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
       )

}
