import React, {useEffect, useState} from 'react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from '@mui/material';

export default function Exercise3(){
    useEffect(()=>{document.title='React Exercise 3'});

    const itemList=[
        "Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon", "Strawberry", "Persimmon"
    ]
    const [filteredList, setFilteredList] = new useState(itemList);    
    
    const styles={
        paperContainer:{
            backgroundImage: `linear-gradient(to bottom right, orange, red, purple)`
        }
    };

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) =>{ 
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
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
                    <TextField id="outlined-basic" label="Keyword" variant="outlined" onChange={filterBySearch}/>
                </Box>
                
                <Box sx={{    
                    gridRow:'2/3',
                    display:'grid', 
                    gridTemplateColumns: "1fr 1fr",
                    gap:3, p:1,
                }}>
                    {filteredList.map((item,index)=>(
                        <Button color="success" variant="contained">{item}</Button>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}