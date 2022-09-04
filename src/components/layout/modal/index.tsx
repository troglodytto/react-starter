import { Backdrop, Box, Fade, Modal as MuiModal } from '@mui/material';
import {
  createContext,
  ReactNode,
  useMemo,
  useState,
  FC,
  useContext,
} from 'react';
import styled from 'styled-components';

interface IGlobalModalContext {
  open: (node: ReactNode) => void;
  close: () => void;
}
export const GlobalModalContext = createContext<IGlobalModalContext>({
  open: _node => {},
  close: () => {},
});

export const useModal = () => {
  const context = useContext(GlobalModalContext);
  return context;
};

export const Modal = styled(MuiModal)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100vw;
  height: 100vh;
`;

export const PopupBox = styled(Box)`
  background-color: white !important;
  z-index: 1400; // 100 More than z-index of 'Modal'
  border-radius: 6px;
  width: min(40rem, 95vw);
  padding: 48px;

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const GlobalModalContextProvider: FC<WithChildren> = ({ children }) => {
  const [component, setComponent] = useState<ReactNode | null>(null);

  const isOpen = useMemo(() => !!component, [component]);

  const modal = useMemo<IGlobalModalContext>(
    () => ({
      open: node => setComponent(node),
      close: () => setComponent(null),
    }),
    []
  );

  return (
    <GlobalModalContext.Provider value={modal}>
      {children}
      <Modal
        open={isOpen}
        onClose={modal.close}
        BackdropComponent={Backdrop}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}>
        <Fade in={isOpen}>
          <PopupBox>{component}</PopupBox>
        </Fade>
      </Modal>
    </GlobalModalContext.Provider>
  );
};

export default GlobalModalContextProvider;
