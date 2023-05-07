import { useNavigate, useParams } from 'react-router-dom';
import BoatDetails from '../../../components/BoatDetails';
import Layout from '../../../components/Layout';
import { useQuery } from 'react-query';
import { getBoat } from '../../../queries';
import { Spinner } from '@chakra-ui/react';

const BoatPage = () => {
  const { boatId } = useParams();
  const navigate = useNavigate();
  if (!boatId) {
    navigate('/boats');
    return null;
  }
  const { data: boat } = useQuery('boat', getBoat(boatId), {
    onError: () => {
      navigate('/login');
    },
    retry: false,
  });
  return (
    <Layout>
      {boat ? <BoatDetails boat={boat.data} /> : <Spinner color="blue.500" />}
    </Layout>
  );
};

export default BoatPage;
