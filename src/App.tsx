import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Box, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from './components/page/Top';

function App() {
  return (
    <div className="App">
      <Box sx={{ marginLeft: '4%', marginRight: '4%' }}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header title='My Recipe' />
          <Routes>
            <Route path="/" element={<Top />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
