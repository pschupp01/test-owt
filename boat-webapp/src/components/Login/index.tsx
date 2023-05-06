import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Text fontSize="xl">Login</Text>
      <form
        onSubmit={(values) => {
          console.log(values);
        }}
      >
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
          <Input w="s" type="submit" value="Login" />
        </Flex>
      </form>
    </Container>
  );
};

export default Login;
