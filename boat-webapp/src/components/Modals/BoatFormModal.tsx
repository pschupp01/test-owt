import {
  Modal as CUIModal,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Boat } from '../../entities';

interface ModalProps {
  title?: string;
  validationButtonText: string;
  initialValues?: Partial<Boat>;
  isOpen: boolean;
  onClose: () => void;
  onValidation: (boat: Partial<Boat>) => void;
}

const BoatFormModal: FC<ModalProps> = ({
  title,
  validationButtonText,
  initialValues,
  isOpen,
  onClose,
  onValidation,
}) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [description, setDescription] = useState(
    initialValues?.description || '',
  );
  return (
    <CUIModal isOpen={isOpen} onClose={onClose} onEsc={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Boat name :</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description :</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost" w="5xs">
            Close
          </Button>
          <Button
            isDisabled={!name || !description}
            w="5xs"
            colorScheme="facebook"
            onClick={() => onValidation({ name, description })}
          >
            {validationButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </CUIModal>
  );
};

export default BoatFormModal;
