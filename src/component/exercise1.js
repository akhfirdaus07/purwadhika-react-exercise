import React, {useState} from 'react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Exercise1(){
    // const [count, setCount]=useState(0);
    return(
        <Box sx={{
            gridRow:'2/3',
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography variant="h1">0</Typography>
                <Box sx={{
                gridRow:'2/3',
                display:'flex', 
                gap:1, marginTop:5,
            }}>
                    <Button color="info" variant="contained" size="large">
                        Increase
                    </Button>
                    <Button color="warning" variant="contained" size="large" >
                        Decrease
                    </Button>
                    <Button color="error" variant="contained" size="large">
                        Reset
                    </Button>
            </Box>
        </Box>
    )
}