import NextLink from 'next/link';
import { NavbarLinks } from '@/config/menu';
import Logo from '@/components/logo';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useMenuContext } from '@/contexts/menu';

const NavLink = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('teal.700', 'teal.200'),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useMenuContext();

  return (
    <>
      <Flex
        h={16}
        w={'full'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <IconButton
          variant={'ghost'}
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'center'}>
          <NextLink href="/">
            <a>
              <Logo />
            </a>
          </NextLink>
        </HStack>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={{ base: 'none', md: 4 }}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {NavbarLinks.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>

            <Box display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
              <Box
                height={5}
                borderLeft={'1px'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              ></Box>
            </Box>

            <HStack as={'nav'} spacing={4}>
              <Button
                colorScheme={'teal'}
                variant={'link'}
                onClick={toggleColorMode}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
