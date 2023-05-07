import { useMutation, useQuery } from 'react-query';
import apiClient from '../../config/http-config';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import { Boat } from '../../entities';
import BoatRow from '../BoatRow';
import { FC, useState } from 'react';
import BoatFormModal from '../Modals/BoatFormModal';
import { getBoats, addBoat } from '../../queries';

const BoatsList: FC = () => {
  const { data: boats } = useQuery('boats', getBoats, {
    onError: () => {
      console.log('On error');
      navigate('/login');
    },
    retry: false,
  });
  const { mutate: addBoatMutate } = useMutation(addBoat);

  const [isAddBoatModalOpen, setIsAddBoatModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isAddBoatModalOpen ? (
        <BoatFormModal
          title="Add a new boat"
          onClose={() => setIsAddBoatModalOpen(false)}
          isOpen={true}
          onValidation={addBoatMutate}
          validationButtonText="Add"
        />
      ) : null}
      <Container w="80vw" h="80vh">
        <Text fontSize="2xl">List of boats</Text>
        <Button
          onClick={() => setIsAddBoatModalOpen(true)}
          leftIcon={<AddIcon />}
        >
          Add a new boat
        </Button>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th textAlign={'center'}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {boats &&
              boats.data.map((boat) => <BoatRow key={boat.id} boat={boat} />)}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default BoatsList;
