import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './component/header';
import Footer from './component/footer';
import Exercise1 from './component/exercise1';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Box sx={{
        bgcolor: '#fefae0',
        display: 'grid', 
        gridTemplateRows: '10vh 85vh 5vh',
      }}
    >
      <Header />

      <Routes>
        <Route exact path="purwadhika-react-exercise" element={<Exercise1 />} />
        {/* <Route exact path="exercise-2" element={<Exercise2 />} />
        <Route exact path="exercise-3" element={<Exercise2 />} /> */}
      </Routes>

      <Footer />
    </Box>
  );
}