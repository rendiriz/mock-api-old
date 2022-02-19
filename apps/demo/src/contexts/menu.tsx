import { createContext, useContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const MenuContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const MenuProvider = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MenuContext.Provider value={{ isOpen, onOpen, onClose }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export function useMenuContext() {
  return useContext(MenuContext);
}
