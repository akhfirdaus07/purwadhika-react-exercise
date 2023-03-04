import React, {useState, useEffect} from 'react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Exercise1(){
    const [time, setTime]=useState(0);
    const [start, setStart]=useState(false);
    
    useEffect(()=>{
        document.title='React Exercise 2'

        let interval=null;
        if (start) {
            interval = setInterval(()=>{
                setTime(prevTime => prevTime + 10)
            },10)
        } else {clearInterval(interval)}

        return()=>clearInterval(interval);
    }, [start]);
    
    return(
        <Box sx={{
            gridRow:'2/3',display:'flex', gap:8,m:10,
            flexDirection:'column', alignItems:'center'
        }}>
            <Typography variant="h3">Create a stopwatch application</Typography>
            <Box sx={{
                bgcolor:'lightgray',
                borderRadius:5,p:5, width:0.4,
                display:'flex', 
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Typography variant="h1">
                    {("0"+Math.floor((time/60000)%60)).slice(-2)}:
                    {("0"+Math.floor((time/1000)%60)).slice(-2)}:
                    {("0"+(time/10) % 1000).slice(-2)}
                </Typography>
                <Box sx={{    
                    gridRow:'2/3',
                    display:'flex', 
                    gap:5, marginTop:4,
                }}>
                    <Button color="info" variant="contained" size="medium" onClick={()=>setStart(true)}>
                        Start
                    </Button>
                    <Button color="warning" variant="contained" size="medium" onClick={()=>setStart(false)}>
                        Stop
                    </Button>
                    <Button color="error" variant="contained" size="medium" onClick={()=>{setTime(0);setStart(false);}}>
                        Reset
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}