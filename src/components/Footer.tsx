import * as React from 'react';
import Box from '@mui/material/Box';

import Copyright from './Copyright';

export default function Header() {
  return (
    <Box sx={{ my: 4 }}>
      <Copyright />
    </Box>
  );
}
