import { useNavigate } from 'react-router-dom';

import Login from '../../components/Login';
import Layout from '../../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { getBoats } from '../../queries';

const LoginPage = () => {
  const navigate = useNavigate();
  useQuery(['loginBoats'], getBoats, {
    onSuccess: () => {
      navigate('/boats');
    },
    onError: () => {
      /*do nothing*/
    },
    retry: false,
  });
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;
