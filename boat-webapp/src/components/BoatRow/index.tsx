import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Tr, Td, Text, IconButton } from '@chakra-ui/react';
import { Boat } from '../../entities';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
import DeleteModal from '../Modals/DeleteModal';
import BoatFormModal from '../Modals/BoatFormModal';
import { deleteBoat, updateBoat } from '../../queries';

const BoatRow: FC<{ boat: Boat }> = ({ boat }) => {
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const { mutate: deleteBoatMutate } = useMutation(deleteBoat, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boats'] });
      setIsDeleteModalOpen(false);
    },
  });

  const { mutate: updateBoatMutate } = useMutation(updateBoat, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boats'] });
      setIsEditModalOpen(false);
    },
  });

  return (
    <>
      {isDeleteModalOpen ? (
        <DeleteModal
          isOpen={true}
          onClose={() => setIsDeleteModalOpen(false)}
          onValidation={() => {
            deleteBoatMutate({ boatId: boat.id });
          }}
        />
      ) : null}
      {isEditModalOpen ? (
        <BoatFormModal
          title="Edit boat"
          validationButtonText="Edit"
          initialValues={{ name: boat.name, description: boat.description }}
          isOpen={true}
          onClose={() => setIsEditModalOpen(false)}
          onValidation={(editedBoat: Partial<Boat>) => {
            updateBoatMutate({
              boatId: boat.id,
              boat: editedBoat,
            });
          }}
        />
      ) : null}
      <Tr
        _hover={{
          color: 'gray.800',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate(`/boats/${boat.id}`);
        }}
      >
        <Td width="50px" maxW="20px">
          {boat.id}
        </Td>
        <Td width="20px">
          <Text
            maxW="200px"
            height="25px"
            overflow="hidden"
            textOverflow={'ellipsis'}
          >
            {boat.name}
          </Text>
        </Td>
        <Td maxW="20px">
          <Text
            maxW="100%"
            height="25px"
            overflow="hidden"
            textOverflow={'ellipsis'}
          >
            {boat.description}
          </Text>
        </Td>
        <Td width="50px" maxW="20px">
          <IconButton
            variant="unstyled"
            _hover={{
              color: 'blue.500',
              cursor: 'pointer',
            }}
            aria-label={'edit'}
            onClick={(e) => {
              setIsEditModalOpen(true);
              e.stopPropagation();
            }}
            icon={<EditIcon />}
          />
          <IconButton
            variant="unstyled"
            aria-label={'delete'}
            _hover={{
              color: 'red.500',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              setIsDeleteModalOpen(true);
              e.stopPropagation();
            }}
            icon={<DeleteIcon />}
          />
        </Td>
      </Tr>
    </>
  );
};

export default BoatRow;
