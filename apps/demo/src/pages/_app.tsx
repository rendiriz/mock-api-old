import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/config/theme';
import { MenuProvider } from '@/contexts/menu';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.Layout || ((page) => page);

  return (
    <>
      <ChakraProvider theme={theme}>
        <MenuProvider>{getLayout(<Component {...pageProps} />)}</MenuProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
