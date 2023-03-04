import React, {useState, useEffect} from 'react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Exercise1(){
    let [count, setCount]=useState(0);
    useEffect(()=>{
        document.title='React Exercise 2'
    });
    return(
        <Box sx={{
            gridRow:'2/3',display:'flex', gap:8,m:10,
            flexDirection:'column', alignItems:'center'
        }}>
            <Typography variant="h3">Create a stopwatch application</Typography>
            <Box sx={{
                bgcolor:'lightgray',
                borderRadius:5,p:5,
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
                            Start
                        </Button>
                        <Button color="warning" variant="contained" size="small" onClick={()=>{setCount(count-1)}}>
                            Stop
                        </Button>
                        <Button color="error" variant="contained" size="small" onClick={()=>{setCount(count=0)}}>
                            Reset
                        </Button>
                </Box>
            </Box>
        </Box>
    )
}