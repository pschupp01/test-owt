import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import apiClient from '../../config/http-config';
import { useNavigate } from 'react-router-dom';

const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  const { data: response } = await apiClient.post('/login', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return response;
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem('bearer', data);
      navigate('/boats');
      alert(data);
    },
    onError: () => {
      alert('there was an error');
    },
  });

  return (
    <Container>
      <Text fontSize="xl">Login</Text>
      <FormControl isRequired>
        <FormLabel>Username :</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password :</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Flex direction="row-reverse">
        <Button
          w="s"
          type="submit"
          isLoading={isLoading}
          onClick={() => mutate({ username, password })}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};

export default Login;
