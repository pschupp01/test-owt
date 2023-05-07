import { useNavigate } from 'react-router-dom';

import Login from '../../components/Login';
import Layout from '../../components/Layout';
import { useQuery } from 'react-query';
import { getBoats } from '../../queries';
import { Spinner } from '@chakra-ui/react';

const LoginPage = () => {
  console.log('Render login');
  const navigate = useNavigate();
  const { isError } = useQuery('loginBoats', getBoats, {
    onSuccess: () => {
      console.log('navigate from there');

      navigate('/boats');
    },
    onError: () => {
      /*do nothing*/
    },
    retry: false,
    staleTime: 0,
    cacheTime: 0,
    gcTime: 0,
  });
  return <Layout>{isError ? <Login /> : <Spinner color="blue.500" />}</Layout>;
};

export default LoginPage;
