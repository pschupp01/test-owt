import { Box, Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex w="100vw" h="100vh" bg="orange.50" align="center" justify="center">
      <Box margin={45}>{children}</Box>
    </Flex>
  );
};

export default Layout;
