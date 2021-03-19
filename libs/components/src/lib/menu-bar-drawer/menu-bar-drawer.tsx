import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Drawer } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { MenuDrawerContainer } from '@feira-na-mao/style';

export interface Props {
  open: boolean;
  onClose: () => void;
}

function MenuDrawer(props: Props) {
  const { push } = useRouter();

  const { open, onClose } = props;

  const handleHome = () => {
    push(`/`);
    onClose();
  };

  const handleLogin = () => {
    push(`/login`);
    onClose();
  };

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <Drawer anchor="right" variant="persistent" open={open} onClose={onClose}>
      <MenuDrawerContainer>
        <Button onClick={() => onClose()}>
          <Close />
        </Button>
        <Button onClick={handleHome}>Home</Button>
        <Button onClick={handleLogin}>
          {/* {signed && person?.isActive ? 'Perfil' : 'Login'} */}
          'Login'
        </Button>
      </MenuDrawerContainer>
    </Drawer>
  );
}

export default MenuDrawer;
