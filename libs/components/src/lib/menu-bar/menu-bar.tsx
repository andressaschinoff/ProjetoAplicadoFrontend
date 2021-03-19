import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import MenuItems from '../menu-bar-items/menu-bar-items';
import MenuDrawer from '../menu-bar-drawer/menu-bar-drawer';
import Logo from '../../assets/fruits-vegetables.png';

import {
  LogoSection,
  MenuHeader,
  MenuImg,
  MenuSection,
} from '@feira-na-mao/style';

export function MenuBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleHome = () => router.push('/');
  const handleLogin = () => router.push('/login');

  return (
    <MenuHeader>
      <LogoSection>
        <Box>
          <MenuImg src={Logo} alt="logo" />
        </Box>
        <Hidden xsDown>
          <Typography variant="subtitle1">Feira na Mão</Typography>
        </Hidden>
      </LogoSection>
      <Hidden mdUp>
        <MenuSection>
          <Button onClick={() => setOpen(true)}>
            <MenuIcon />
          </Button>
        </MenuSection>
      </Hidden>
      {open && <MenuDrawer open={open} onClose={() => setOpen(false)} />}
      <Hidden smDown>
        <MenuSection>
          <MenuItems />
        </MenuSection>
      </Hidden>
    </MenuHeader>
  );
}

export default MenuBar;
