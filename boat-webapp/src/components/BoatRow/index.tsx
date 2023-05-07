import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Tr, Td } from '@chakra-ui/react';
import { Boat } from '../../entities';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { FC, useState } from 'react';
import DeleteModal from '../Modals/DeleteModal';
import BoatFormModal from '../Modals/BoatFormModal';
import { deleteBoat, updateBoat } from '../../queries';

const BoatRow: FC<{ boat: Boat }> = ({ boat }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate: deleteBoatMutate } = useMutation(deleteBoat);
  const { mutate: updateBoatMutate } = useMutation(updateBoat);
  return (
    <>
      {isDeleteModalOpen ? (
        <DeleteModal
          isOpen={true}
          onClose={() => setIsDeleteModalOpen(false)}
          onValidation={() => {
            deleteBoatMutate({ boatId: boat.id });
            setIsDeleteModalOpen(false);
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
            setIsEditModalOpen(false);
          }}
        />
      ) : null}
      <Tr
        _hover={{
          color: 'gray.800',
          cursor: 'pointer',
        }}
        onClick={() => {
          console.log('cliock');
          navigate(`/boats/${boat.id}`);
        }}
      >
        <Td>{boat.id}</Td>
        <Td>{boat.name}</Td>
        <Td>{boat.description}</Td>
        <Td textAlign={'center'}>
          <EditIcon
            m="2"
            _hover={{
              color: 'blue.500',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              setIsEditModalOpen(true);
              e.stopPropagation();
            }}
          ></EditIcon>
          <DeleteIcon
            m="2"
            _hover={{
              color: 'red.500',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              setIsDeleteModalOpen(true);
              e.stopPropagation();
            }}
          />
        </Td>
      </Tr>
    </>
  );
};

export default BoatRow;
