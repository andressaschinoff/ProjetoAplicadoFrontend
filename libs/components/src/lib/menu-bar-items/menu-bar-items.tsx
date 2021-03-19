import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { MenuItemsHeader, MenuItemsOptions } from '@feira-na-mao/style';

export function MenuItems() {
  const { push } = useRouter();

  const handleHome = () => push(`/`);
  const handleLogin = () => push(`/login`);

  return (
    <MenuItemsHeader>
      <MenuItemsOptions className="menu-options">
        <li>
          <Button onClick={handleHome}>
            <Typography id="text" variant="subtitle1">
              Home
            </Typography>
          </Button>
        </li>
        <li>
          <Button onClick={handleLogin}>
            <Typography id="text" variant="subtitle1">
              {/* {signed && person?.isActive ? "Perfil" : "Login"} */}
            </Typography>
          </Button>
        </li>
      </MenuItemsOptions>
      <Box className="icon-user">
        <AccountCircleIcon
          style={{ width: '50px', height: '50px' }}
          fontSize="large"
        />
      </Box>
    </MenuItemsHeader>
  );
}

export default MenuItems;
