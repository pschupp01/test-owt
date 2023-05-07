import { FC } from 'react';
import { Boat } from '../../entities';
import { Box, Container, Text, Divider, Flex, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

interface BoatDetailsProps {
  boat: Boat;
}
const BoatDetails: FC<BoatDetailsProps> = ({ boat }) => {
  const navigate = useNavigate();
  return (
    <Container w="lg">
      <Flex justifyContent="space-between" mb="2">
        <Text fontSize="2xl">Boat Details</Text>
        <Button
          variant="ghost"
          rounded="full"
          h="8xs"
          w="8xs"
          leftIcon={<ArrowBackIcon boxSize={6} />}
          onClick={() => navigate('/boats')}
        ></Button>
      </Flex>
      <Divider />
      <Box p={4}>
        <Text fontSize="xl">Name:</Text>
        <Text fontSize="lg">{boat.name}</Text>
        <Text fontSize="xl">Description</Text>
        <Text fontSize="lg">{boat.description}</Text>
      </Box>
    </Container>
  );
};

export default BoatDetails;
