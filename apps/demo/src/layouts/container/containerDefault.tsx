import NavbarDefault from '@/layouts/navbar/navbarDefault';
import FooterDefault from '@/layouts/footer/footerDefault';
import { Box, Container } from '@chakra-ui/react';

function ContainerDefault({ children }) {
  return (
    <>
      <Container maxW="container.xl">
        <NavbarDefault />
      </Container>
      <Box as={'main'}>{children}</Box>
      <FooterDefault />
    </>
  );
}

export default ContainerDefault;
