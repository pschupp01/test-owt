import { useQuery } from '@tanstack/react-query';
import BoatsList from '../../components/BoatsList';
import Layout from '../../components/Layout';
import { getBoats } from '../../queries';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const BoatsPage = () => {
  const navigate = useNavigate();
  const { data: boats } = useQuery(['boats'], getBoats, {
    onError: () => {
      navigate('/login');
    },
    retry: false,
  });
  return (
    <Layout isLoggedIn>
      {boats ? <BoatsList boats={boats.data} /> : <Spinner color="blue.500" />}
    </Layout>
  );
};
export default BoatsPage;
