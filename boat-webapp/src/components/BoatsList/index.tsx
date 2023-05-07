import { useMutation, useQueryClient } from 'react-query';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Container,
  Text,
  Button,
  Flex,
  TableContainer,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

import BoatRow from '../BoatRow';
import { FC, useState } from 'react';
import BoatFormModal from '../Modals/BoatFormModal';
import { addBoat } from '../../queries';
import { Boat } from '../../entities';

interface BoatsListProps {
  boats: Boat[];
}

const BoatsList: FC<BoatsListProps> = ({ boats }) => {
  const queryClient = useQueryClient();

  const { mutate: addBoatMutate } = useMutation(addBoat, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boats'] });
      setIsAddBoatModalOpen(false);
    },
  });

  const [isAddBoatModalOpen, setIsAddBoatModalOpen] = useState(false);

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
      <Container minW="80vw" h="80vh" overflowY={'auto'}>
        <Flex justifyContent="space-between">
          <Text fontSize="2xl">List of boats</Text>
          <Button
            onClick={() => setIsAddBoatModalOpen(true)}
            leftIcon={<AddIcon />}
          >
            New boat
          </Button>
        </Flex>
        <TableContainer overflowX={'hidden'}>
          <Table variant="striped" maxW="full">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th maxW="500px">Name</Th>
                <Th maxW="500px">Description</Th>
                <Th textAlign={'center'}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {boats.map((boat) => (
                <BoatRow key={boat.id} boat={boat} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default BoatsList;
