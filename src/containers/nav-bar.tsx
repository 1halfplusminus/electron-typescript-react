import React from 'react';

import { Link } from '@reach/router';
import { NavMenuItem } from '../components/nav-menu-item';
import { Box } from '../components/core/box';

export const NavBar = () => {
  return (
    <Box flexDirection="row">
      <NavMenuItem>
        <Link to="/">Home</Link>
      </NavMenuItem>
      <NavMenuItem>
        <Link to="/dashboard">Dashboard</Link>
      </NavMenuItem>
    </Box>
  );
};
