import * as React from 'react';
import { loadCSS } from 'fg-loadcss';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

export default function Footer() {
  React.useEffect(() => {
    const node = loadCSS(
      'https://kit.fontawesome.com/3f64b12415.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Box
      sx={{
        gridRow:'3/4',
        bgcolor: '#ccd5ae',
      }}
    >
      <Icon className="fa-brands fa-github" />
    </Box>
  );
}