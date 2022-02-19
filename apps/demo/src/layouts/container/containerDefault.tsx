import { NavbarLinks } from '@/config/menu';
import NavbarDefault from '@/layouts/navbar/navbarDefault';
import SidebarDefault from '@/layouts/sidebar/sidebarDefault';
import FooterDefault from '@/layouts/footer/footerDefault';
import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';
import { useMenuContext } from '@/contexts/menu';

function ContainerDefault({ children }) {
  const { isOpen } = useMenuContext();

  return (
    <>
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
          h={'calc(100vh - 4rem)'}
          top={16}
          flexShrink={0}
          w={{ base: 'full', md: 64 }}
          zIndex={20}
          d={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        >
          <SidebarDefault links={NavbarLinks} />
        </Box>
        <Box
          as={'article'}
          d={'flex'}
          pos={'relative'}
          w={'full'}
          maxW={'full'}
          minW={0}
          px={4}
          pb={16}
        >
          <Box as={'main'} zIndex={10} w={'container.xl'} minW={0} mx={'auto'}>
            {children}
          </Box>
        </Box>
      </Flex>
      <FooterDefault />
    </>
  );
}

export default ContainerDefault;
