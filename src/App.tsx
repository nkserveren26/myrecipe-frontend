import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Box, Typography } from '@mui/material';
import HeaderImage from "./pexels-janetrangdoan-1099680.jpg";

function App() {
  return (
    <div className="App">
      <Box sx={{ marginLeft: '3%', marginRight: '3%' }}>
        <Header title='My Recipe' />
        <Box
          sx={{
            position: 'relative',
            width: '1200px',
            height: '800px',
            margin: '2%',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={HeaderImage}
            alt="説明画像"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(80%)',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              zIndex: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" component="h2">
              見出し文字
            </Typography>
            <Typography variant="body1">
              １行の説明
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
