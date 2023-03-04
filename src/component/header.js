import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Box
            sx={{
            gridRow:'1/2',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems:'center',
            bgcolor: '#ccd5ae',
            p:5, gap:5, 
            }}
        >
            <Typography variant="h5">Purwadhika Module 2 Slide 7 Exercise</Typography>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:5}}>
                <Link to='/exercise-1'>Exercise 1</Link>
                <Link to='/exercise-2'>Exercise 2</Link>
                <Link to='/exercise-3'>Exercise 3</Link>
            </Box>
        </Box>
    )
}