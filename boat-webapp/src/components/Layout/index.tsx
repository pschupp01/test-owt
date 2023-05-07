import { Box, Button, Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  isLoggedIn?: boolean;
}
const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return (
    <>
      {isLoggedIn ? (
        <Button
          position={'absolute'}
          top="8px"
          right="8px"
          onClick={() => {
            localStorage.removeItem('bearer');
            queryClient.clear();
            navigate('/login');
          }}
        >
          Logout
        </Button>
      ) : null}
      <Flex w="100vw" h="100vh" bg="orange.50" align="center" justify="center">
        <Box margin={45}>{children}</Box>
      </Flex>
    </>
  );
};

export default Layout;
