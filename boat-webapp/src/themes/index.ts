import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { containerTheme } from './ContainerThemes';
import { textTheme } from './TextTheme';
const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'red' }), {
  components: {
    Container: containerTheme,
    Text: textTheme,
  },
});

export default theme;
