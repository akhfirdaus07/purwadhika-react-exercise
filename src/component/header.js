import { Box } from "@mui/system"
import { Button } from "@mui/material"

export default function Header(){
    return(
        <Box
            sx={{
            gridRow:'1/2',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: '#ccd5ae',
            p:1, gap:5,
            }}
        >
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
    )
}