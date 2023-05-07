import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient();

const wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default wrapper;
