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
                <Button color="error" variant="outlined" href="purwadhika-react-exercise" size="large">
                    Exercise 1
                </Button>
                <Button color="error" variant="outlined" href="exercise-2" size="large" >
                    Exercise 2
                </Button>
                <Button color="error" variant="outlined" href="exercise-3" size="large">
                    Exercise 3
                </Button>
            </Box>
        </Box>
    )
}