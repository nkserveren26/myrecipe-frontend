import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Box, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from './components/page/Top';
import { Fish } from './components/page/Fish';
import { ScrollToTop } from './components/scroll/ScrollToTop';
import { Beef } from './components/page/Beef';
import { Vegetable } from './components/page/Vegetable';

function App() {
  return (
    <div className="App">
      <Box sx={{ marginLeft: '4%', marginRight: '4%' }}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header title='My Recipe' />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/fish" element={<Fish />} />
            <Route path="/beef" element={<Beef />} />
            <Route path="/vegetable" element={<Vegetable />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
