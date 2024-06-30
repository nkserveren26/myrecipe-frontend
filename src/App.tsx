import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box sx={{ marginLeft: '3%', marginRight: '3%' }}>
        <Header title='My Recipe' />
      </Box>
    </div>
  );
}

export default App;
