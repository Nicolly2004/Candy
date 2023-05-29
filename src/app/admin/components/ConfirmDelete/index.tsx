import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { FC } from "react"



interface ConfirmDeleteProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => Promise<void>
    mensagem: string
}

export const ConfirmDelete: FC<ConfirmDeleteProps> =({
    isOpen,
    onClose,
    onConfirm,
    mensagem
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Confirmar Exclusão</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>{mensagem}</ModalBody>
                <ModalFooter>
                    
                    <Button colorScheme="red" onClick={onConfirm}>
                        Excluir
                    </Button>

                    <Button variant="ghost" onClick={onClose}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}