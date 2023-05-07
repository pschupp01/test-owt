import { defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = {
  borderWidth: '2px', // add a border
  borderStyle: 'solid', // add a border style
  borderColor: 'gray.600', // change the border color
  borderRadius: 'xl', // add a border radius
  fontWeight: 'medium', // change the font weight
  padding: '4', // add padding
  color: 'gray.600',
};

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle });
