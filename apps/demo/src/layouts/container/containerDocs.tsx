import site from '@/config/site';
import { NextSeo } from 'next-seo';
import NavbarDefault from '@/layouts/navbar/navbarDefault';
import ActiveLink from '@/components/activeLink';
import {
  Box,
  Flex,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { mdx } from '@/components/mdx';

const Links = [
  {
    label: 'Introduction',
    href: '/docs',
  },
  {
    label: 'Filtering',
    href: '/docs/filtering',
  },
];

const NavLink = ({ href, children }) => {
  return (
    <ActiveLink href={href} passHref activeClassName={'active'}>
      <Link
        d={'block'}
        marginTop={1}
        w={'full'}
        userSelect={'none'}
        borderRadius={'sm'}
        p={2}
        textAlign={'left'}
        textDecoration={'none'}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.600'),
        }}
        sx={{
          '&.active': {
            bg: useColorModeValue('gray.200', 'gray.700'),
            color: useColorModeValue('black', 'white'),
            fontWeight: 'bold',
          },
        }}
      >
        {children}
      </Link>
    </ActiveLink>
  );
};

function ContainerDocs({ meta, children }) {
  return (
    <>
      <NextSeo title={meta.title} titleTemplate={`%s | ${site.title}`} />
      <Flex
        as={'nav'}
        alignItems={'center'}
        position={'sticky'}
        top={0}
        left={0}
        right={0}
        px={4}
        borderBottom={'1px'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bg={useColorModeValue('white', 'gray.800')}
        zIndex={20}
      >
        <NavbarDefault />
      </Flex>
      <Flex flex={'1 1 0%'} h={'full'}>
        <Box
          as={'aside'}
          pos={{ base: 'fixed', md: 'sticky' }}
          h={'calc(100vh - 4.1rem)'}
          top={16}
          flexShrink={0}
          w={{ base: 'full', md: 64 }}
          zIndex={20}
          d={{ md: 'block' }}
        >
          <Box
            w={'full'}
            h={'full'}
            p={4}
            pb={40}
            overflowY={'auto'}
            borderRight={'1px'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <Box d={{ base: 'hidden', md: 'block' }}>
              <List>
                {Links.map((link) => (
                  <ListItem key={link.label}>
                    <NavLink href={link.href}>{link.label}</NavLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
        <Box
          as={'article'}
          d={'flex'}
          pos={'relative'}
          w={'full'}
          maxW={'full'}
          minW={0}
          px={{ base: 6, md: 8 }}
          pb={16}
        >
          <Box
            as={'main'}
            zIndex={10}
            w={'container.md'}
            minW={0}
            mx={'auto'}
            pt={6}
          >
            <MDXProvider components={mdx}>{children}</MDXProvider>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default ContainerDocs;
