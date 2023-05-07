import {
  Modal as CUIModal,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onValidation: () => void;
}

const DeleteModal: FC<ModalProps> = ({ isOpen, onClose, onValidation }) => {
  return (
    <CUIModal isOpen={isOpen} onClose={onClose} onEsc={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deletion confirmation</ModalHeader>
        <ModalBody>
          <p>
            This item will be deleted, which is not reversible. Are you sure you
            want to perform this action
          </p>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Close
          </Button>
          <Button colorScheme="red" onClick={onValidation}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </CUIModal>
  );
};

export default DeleteModal;
