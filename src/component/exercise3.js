import React, {useState} from 'react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Exercise3(){
    const [count, setCount]=useState(0);

    const styles={
        paperContainer:{
            backgroundImage: `linear-gradient(to bottom right, orange, red, purple)`
        }
    }
    return(
        <Box style={styles.paperContainer} sx={{
            bgcolor:'#d4a373',
            margin:15,
            marginLeft:60,
            marginRight:60,
            borderRadius:10,
            gridRow:'2/3',
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography variant="h1">{count}</Typography>
                <Box sx={{    
                    gridRow:'2/3',
                    display:'flex', 
                    gap:1, marginTop:4,
                }}>
                    <Button color="info" variant="contained" size="small" onClick={()=>{setCount(count+1)}}>
                        Increase
                    </Button>
                    <Button color="warning" variant="contained" size="small" onClick={()=>{setCount(count-1)}}>
                        Decrease
                    </Button>
                    <Button color="error" variant="contained" size="small" onClick={()=>{setCount(count=0)}}>
                        Reset
                    </Button>
            </Box>
        </Box>
    )
}

// Banana Apple Orange Mango Pineapple Watermelon Strawberry Persimmon