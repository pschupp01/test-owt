import { defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = {
  border: '2px solid', // add a border
  borderColor: 'gray.600', // change the border color
  borderRadius: 'xl', // add a border radius
  fontWeight: 'medium', // change the font weight
  padding: '4', // add padding
};

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle });
