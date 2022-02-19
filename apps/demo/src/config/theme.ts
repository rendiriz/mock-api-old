import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
};

const customTheme = {
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  ...config,
};

const theme = extendTheme(customTheme);

export default theme;
