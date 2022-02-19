import ActiveLink from '@/components/activeLink';
import { Box, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';

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

export default function Sidebar(props) {
  return (
    <Box
      w={'full'}
      h={'full'}
      p={4}
      pb={40}
      overflowY={'auto'}
      borderRight={{ base: 'none', md: '1px' }}
      borderRightColor={{
        md: useColorModeValue('gray.200', 'gray.700'),
      }}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Box d={{ base: 'none', md: 'block' }}>
        <List>
          {props.links.map((link) => (
            <ListItem key={link.label}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box d={{ base: 'block', md: 'none' }}>
        <List>
          <ListItem>
            <NavLink href={'/docs'}>Docs</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href={'/resources'}>Resources</NavLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
