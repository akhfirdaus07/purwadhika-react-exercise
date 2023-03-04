import React, {useEffect} from 'react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from '@mui/material';

export default function Exercise3(){
    useEffect(()=>{document.title='React Exercise 3'})

    const styles={
        paperContainer:{
            backgroundImage: `linear-gradient(to bottom right, orange, red, purple)`
        }
    };
    
    return(
        <Box sx={{
            gridRow:'2/3',display:'flex', gap:5,m:8,
            flexDirection:'column', alignItems:'center'
        }}>
            <Typography variant="h3">Create a filter live search</Typography>
            <Box style={styles.paperContainer} sx={{
                display:'flex', 
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                gap:3,borderRadius:5,p:3,
            }}>
                <Box sx={{    
                    gridRow:'2/3',
                    display:'flex', 
                    gap:3,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Typography variant="h6">Search</Typography>
                    <TextField id="outlined-basic" label="Keyword" variant="outlined"/>
                </Box>
                
                <Box sx={{    
                    gridRow:'2/3',
                    display:'grid', 
                    gridTemplateColumns: "1fr 1fr",
                    gap:3, p:1,
                }}>
                    <Button color="success" variant="contained">Banana</Button>
                    <Button color="success" variant="contained">Apple</Button>
                    <Button color="success" variant="contained">Orange</Button>
                    <Button color="success" variant="contained">Mango</Button>
                    <Button color="success" variant="contained">Pineapple</Button>
                    <Button color="success" variant="contained">Watermelon</Button>
                    <Button color="success" variant="contained">Strawberry</Button>
                    <Button color="success" variant="contained">Persimmon</Button>
                </Box>
            </Box>
        </Box>
    )
}