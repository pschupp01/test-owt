import { FC } from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../config/http-config';
import { Boat } from '../../entities';
import { Container, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface BoatDetailsProps {
  boatId?: string;
}
const BoatDetails: FC<BoatDetailsProps> = ({ boatId }) => {
  const navigate = useNavigate();
  const { data } = useQuery(
    'boat',
    () => apiClient.get<Boat>(`/boats/${boatId}`),
    {
      onError: () => {
        console.log('On error');
        navigate('/login');
      },
      retry: false,
    },
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
