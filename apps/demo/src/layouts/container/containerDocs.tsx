import site from '@/config/site';
import { NextSeo } from 'next-seo';
import { SidebarDocLinks } from '@/config/menu';
import { useMenuContext } from '@/contexts/menu';
import NavbarDefault from '@/layouts/navbar/navbarDefault';
import SidebarDefault from '@/layouts/sidebar/sidebarDefault';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { mdx } from '@/components/mdx';

function ContainerDocs({ meta, children }) {
  const { isOpen } = useMenuContext();

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
          d={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        >
          <SidebarDefault links={SidebarDocLinks} />
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
