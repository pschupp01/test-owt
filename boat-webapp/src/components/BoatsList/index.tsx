export const boats = [
  {
    id: 1,
    name: 'Boat 1',
    description: 'This is the first boat',
  },
  {
    id: 2,
    name: 'Boat 2',
    description: 'This is the second boat',
  },
  {
    id: 3,
    name: 'Boat 3',
    description: 'This is the third boat',
  },
];

import { useQuery } from 'react-query';
import apiClient from '../../config/http-config';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { redirect } from 'react-router-dom';

import { Boat } from '../../entities';
const BoatsList = () => {
  const { data: boats } = useQuery('boats', () =>
    apiClient.get<Boat[]>('/boats'),
  );
  const navigate = useNavigate();
  return (
    <TableContainer w="5xl">
      <Table variant="striped">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
    </TableContainer>
  );
};

export default BoatsList;
