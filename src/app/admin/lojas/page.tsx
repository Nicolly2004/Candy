'use client'
import { Loja, listarLojas } from "@/services/lojaService";
import { Text,Button, Flex, FormControl, FormLabel, Heading, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, Image, FormErrorMessage,Spinner } from "@chakra-ui/react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Input } from '@/components/Input'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form'
import { AdminHeader } from "../components/AdminHeader";
import { getBase64 } from '../../../helpers/getBase64'
import { formataMoeda } from "@/helpers/formataMoeda";
import { notify } from "@/config/toast";
import { useQuery ,useQueryClient } from "react-query";
import { useState } from "react";
import { ConfirmDelete } from "../components/ConfirmDelete";
import { FormLoja } from "./FormLoja";




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

export type FormularioLoja = {
    nome:string
    categoria:string 
    tempo:string 
    logo: any
    cover: any
    pedidoMinimo:  string
    taxaEntrega: string
}

export default function LojaIndex() {
    const {
        register,
        handleSubmit,
        formState:{errors},
        watch,
        setValue,
        reset,
    }= useForm<FormularioLoja>({
        resolver: yupResolver(validacaoLoja)
    })

    const {isLoading, isError, data, isFetched} = useQuery({
        queryKey: ['lojas','adm'],
        queryFn: listarLojas,
    })
    const queryClient = useQueryClient()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {
        isOpen: isOpenDelete,
        onOpen: OnOpenDelete,
        onClose: onCloseDelete,
    } = useDisclosure()

const [loja,setLoja] = useState<Loja | null>()

const handleDelete = (loja: Loja) => {
    setLoja(loja)
    OnOpenDelete()
}

const handleEdit = (loja: Loja ) => {
    setLoja(loja)
    onOpen()
}

const updateLoja= async ({
    logo,
    cover,
    taxaEntrega,
    pedidoMinimo,
    ...resto
}: FormularioLoja) =>{
    const imageLogo = logo[0] ? await getBase64(logo[0]) : loja?.imageLogo
    const imageCover = cover[0] ? await getBase64(cover[0]) : loja?.imageCover


    const lojaData: Partial<Loja> = {
        ...resto, 
        imageCover,
        imageLogo,
        pedidoMinimo: Number(pedidoMinimo.replace(/\D/g,''))/100,
        taxaEntrega:Number(taxaEntrega.replace(/\D/g,''))/100,
    }
try{
    const {data} = await atualizaLoja(loja?.id || '', lojaData)
    notify(data.message, 'success')
    onClose()
    queryClient.invalidateQueries({queryKey: ['lojas','adm']})
} catch (e: any) {
    notify(
        e?.responde?.data?.message || 'Ocorreu erro ao atualizar',
        'error',
     )
   }
 }

const deleteLoja = async () => {
    const {data} = await apagaLoja(loja?.id || 0)  
    await queryClient.invalidateQueries({queryKey: ['lojas','adm']})
    notify(data.message, 'success')
    onCloseDelete()
}



    const salvarLoja = async ({
        logo,
        cover,
        taxaEntrega,
        pedidoMinimo,
        ...resto
    }: FormularioLoja) =>{
        const imageLogo = await getBase64(logo[0])
        const imageCover = await getBase64(cover[0])

        const submitData: Loja = {
            ...resto, 
            imageCover,
            imageLogo,
            nota:0,
            pedidoMinimo: Number(pedidoMinimo.replace(/\D/g,''))/100,
            taxaEntrega:Number(taxaEntrega.replace(/\D/g,''))/100,

    } 
        

        try{
            const response = await cadastraLoja(submitData)
            notify(response.data.message, 'success')
            onClose()
            queryClient.invalidateQueries({ queryKey: ['lojas','adm'] })
        } catch (e: any) {
            if(e.response) {
                notify (e.responde.data.message, 'error')
                return
            }
            notify('Um erro ocorreu', 'error')
        }
    }
 

    return (
    <Flex direction="column" grow={1} gap={4}>
        <AdminHeader 
        title='Lojas'
         buttonLabel="Nova Loja" 
         onClick={onOpen}
         isFetching={isFetched}
         />
        
        <Flex>
            { isLoading? 
            <Spinner size='md' /> 
            : isError? 
            <Text>Ocorreu um erro ao carregar as lojas</Text>
             : 
                <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Nome da Loja</Th>
                        <Th>Avaliação</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.data?.map((loja)=>(
                        <Tr key= {loja.id}>
                        <Td>{loja.id}</Td>
                        <Td>{loja.nome}</Td>
                        <Td>{loja.nota}</Td>
                        <Td>
                            <Flex gap={3}>
                            <IconButton
                            aria-label="Editar"
                            icon={<FaPencilAlt />}
                            colorScheme="yellow"
                            onClick={() => handleEdit(loja)}
                            />

                            <IconButton 
                            aria-label="Apagar"
                            icon={<FaTrash />}
                            colorScheme="red"
                            onClick={() => handleDelete(loja)}
                            />
                            </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            }
        </Flex>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Nova Loja</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                 <Flex as="form" p={4} direction="column" gap={1} onSubmit={handleSubmit(salvarLoja)} >
                    <Input label='Nome' type="text" id="nome"{...register('nome')} error={errors.nome}/>
                    <Input label='Categoria' type="text" id="categoria" {...register('categoria')} error={errors.categoria}/>
                    <Input label='Tempo de Preparo' id="tempo" type="text" {...register('tempo')} error={errors.tempo}/>
                    <Input label="Pedido minimo" type="text" id="pedidoMinimo" error={errors.pedidoMinimo} {...register('pedidoMinimo')} 
                    onChange={({target}) => {
                        setValue(
                            'pedidoMinimo',
                            formataMoeda(Number(target.value.replace(/\D/g,'')) / 100 ),
                        )
                    }} 
                   />
                    <Input label="Taxa de entrega" type="text" id="taxaEntrega" error={errors.taxaEntrega} {...register('taxaEntrega')}
                    onChange={({target}) => {
                        setValue(
                            'taxaEntrega',
                            formataMoeda(Number(target.value.replace(/\D/g,'')) / 100 ),
                        )
                    }} 
                     />
                    <Input type="file" label="Logo" id="logo" {...register('logo')} display={'none'} />
                    
                    <FormControl isInvalid={!!errors.logo}>
                        <FormLabel htmlFor="logo">

                            <Image
                            alt='imagem do logo'
                             src={
                                typeof watch('logo')!== 'undefined' && 
                                typeof watch('logo')[0] === 'object'
                                ? URL.createObjectURL(watch('logo')[0])
                                : 'https://placehold.it/100x100'
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
                    <Input type="file" label="Capa" id="cover" {...register('cover')} display={'none'}/>
                    <FormControl isInvalid={!!errors.cover}>
                      <FormLabel htmlFor="cover">
                        <Image
                        alt = "imagem da capa"
                        src={ 
                            typeof watch('cover') !== 'undefined' && 
                            typeof watch('cover')[0] ==='object'
                            ? URL.createObjectURL(watch('cover')[0])
                            : 'https://placehold.co/1200x1250'
                        }
                        w="100%"
                        h="250px"
                        objectFit="cover"
                        cursor={'pointer'}
                        />
                      </FormLabel>
                      {!!errors.cover && (
                        <FormErrorMessage>{errors.cover?.message as String}</FormErrorMessage>
                      )}
                    </FormControl>



                    <Button type="submit" colorScheme="green">
                        Salvar
                        </Button>
                 </Flex>
            </ModalBody>
        </ModalContent>
    </Modal>

    <ConfirmDelete 
    isOpen={isOpenDelete} 
    onClose={onCloseDelete} 
    onConfirm={deleteLoja}
    mensagem={`Tem certeza que deseja apagar esta loja ${loja?.nome}?`}
    />

    <FormLoja
    isOpen={isOpen}
    onClose={onClose}
    salvarLoja={loja? updateLoja: salvarLoja}
    loja={loja as Loja}
    />
    </Flex>
    )
}


    
