import NextLink from 'next/link';
import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Code,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const ChakraH1 = ({ children }) => (
  <Heading as={'h1'} size={'xl'} mb={4}>
    {children}
  </Heading>
);

const ChakraH2 = ({ children }) => (
  <Heading as={'h2'} size={'lg'} mb={4}>
    {children}
  </Heading>
);

const ChakraText = ({ children }) => <Text my={4}>{children}</Text>;

const ChakraUnorderedList = ({ children }) => (
  <UnorderedList marginInlineStart={5} my={4}>
    {children}
  </UnorderedList>
);

const ChakraLink = ({ children, href }) => (
  <NextLink href={href} passHref>
    <Link color={useColorModeValue('teal.600', 'teal.200')}>{children}</Link>
  </NextLink>
);

export const mdx = {
  h1: ChakraH1,
  h2: ChakraH2,
  p: ChakraText,
  ul: ChakraUnorderedList,
  li: ListItem,
  code: Code,
  a: ChakraLink,
};
