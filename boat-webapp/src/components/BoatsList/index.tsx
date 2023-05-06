import { useQuery } from 'react-query';
import apiClient from '../../config/http-config';
import { Table, Thead, Tr, Th, Tbody, Td, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Boat } from '../../entities';
const BoatsList = () => {
  const { data: boats } = useQuery('boats', () =>
    apiClient.get<Boat[]>('/boats'),
  );
  const navigate = useNavigate();
  return (
    <Container w="5xl">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {boats &&
            boats.data.map((boat) => (
              <Tr
                key={boat.id}
                onClick={() => {
                  console.log('cliock');
                  navigate(`/boats/${boat.id}`);
                }}
              >
                <Td>{boat.id}</Td>
                <Td>{boat.name}</Td>
                <Td>{boat.description}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default BoatsList;
