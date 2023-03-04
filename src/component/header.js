import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';

export default function Header(){
    return(
        <Box
            sx={{
            gridRow:'1/2',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems:'center',
            bgcolor: '#ccd5ae',
            p:1, gap:5,
            }}
        >
            <Typography variant="h5">Purwadhika Module 2 Slide 7 Exercise</Typography>
            <Box sx={{display:'flex', gap:1}}>
                <Button color="error" variant="outlined" size="large" href='/purwadhika-react-exercise/exercise-1'>
                    Exercise 1
                </Button>
                <Button color="error" variant="outlined" size="large" href='/purwadhika-react-exercise/exercise-2'>
                    Exercise 2
                </Button>
                <Button color="error" variant="outlined" size="large" href='/purwadhika-react-exercise/exercise-3'>
                    Exercise 3
                </Button>
            </Box>
        </Box>
    )
}