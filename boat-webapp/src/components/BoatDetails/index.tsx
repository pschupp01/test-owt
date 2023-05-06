import { FC } from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../config/http-config';
import { Boat } from '../../entities';
import { Container, Text } from '@chakra-ui/react';

interface BoatDetailsProps {
  boatId?: string;
}
const BoatDetails: FC<BoatDetailsProps> = ({ boatId }) => {
  const { data } = useQuery('boat', () =>
    apiClient.get<Boat>(`/boats/${boatId}`),
  );
  return (
    <Container w="lg">
      <Text fontSize="xl">Boat Details</Text>
      <Text fontSize="lg">{data?.data.name}</Text>
      <Text fontSize="lg">{data?.data.description}</Text>
    </Container>
  );
};

export default BoatDetails;
