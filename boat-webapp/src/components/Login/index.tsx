import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../queries';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem('bearer', data);
      console.log('navigate fropm here');
      navigate('/boats');
    },
    onError: () => {
      setError("Username or password doesn't match");
      setIsLoading(false);
    },
  });
  return (
    <Container w={500}>
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
      <FormControl isInvalid={!!error} h={6}>
        <FormErrorMessage m={0} textAlign={'center'}>
          {error}
        </FormErrorMessage>
      </FormControl>
      <Flex direction="row" justifyContent={'center'} mt="2">
        <Button
          w="xs"
          type="submit"
          isLoading={isLoading}
          isDisabled={isLoading || !username || !password}
          onClick={() => {
            setIsLoading(true);
            mutate({ username, password });
          }}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};

export default Login;
