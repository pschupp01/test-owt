import { defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = {
  color: 'gray.600',
};

// export the component theme
export const textTheme = defineStyleConfig({ baseStyle });
