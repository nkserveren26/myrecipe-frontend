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
import { Soup } from './components/page/Soup';
import { RecipePage } from './components/page/RecipePage';
import { AddRecipe } from './components/page/AddRecipe';

function App() {
  return (
    <div className="App">
      <Box sx={{ marginLeft: '7%', marginRight: '7%' }}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header title='My Recipe' />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/fish" element={<Fish />} />
            <Route path="/beef" element={<Beef />} />
            <Route path="/vegetable" element={<Vegetable />} />
            <Route path="/soup" element={<Soup />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
            <Route path="/recipes/new" element={<AddRecipe />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
