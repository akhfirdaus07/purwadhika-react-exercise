import * as React from 'react';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { hover } from '@testing-library/user-event/dist/hover';

export default function Footer() {
    return (
        <Box
        sx={{
            gridRow:'3/4',
            bgcolor: '#ccd5ae',
            display:'flex', gap:1,
            justifyContent:'center',
            alignItems:'center',
        }}
        >
            <Typography variant="h8">Copyright © 2023 akhfirdaus07</Typography>
            <Link href="https://github.com/akhfirdaus07">
                <FontAwesomeIcon icon={faGithub} size="xl"/>
            </Link>
        </Box>
    );
}