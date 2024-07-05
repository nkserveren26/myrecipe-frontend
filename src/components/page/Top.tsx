import { Box, Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeHeaderImage from "../../HomeHeaderImage.jpg";
import React from 'react';
import { RecipeCategoryButton } from '../button/RecipeCategoryButton';

export const Top: React.FC = () => {

    return (
        <>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '600px',
                overflow: 'hidden',
                marginTop: '2%',
                marginBottom: '4%',
                borderRadius: '8px',
              }}
            >
              <Box
                component="img"
                src={HomeHeaderImage}
                alt="説明画像"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
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
                <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  My Recipe
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '24px' }}>
                  This app is my favorite recipe list.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe Category</Typography>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Add Recipe
                </Button>
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} pt={4} container columnSpacing={6} alignItems="center" justifyContent="center">
                  <Grid item xs={6} sm="auto" md="auto" pb={6}>
                        <RecipeCategoryButton buttonLabelName="お肉" buttonBackgroundImage={HomeHeaderImage} destinationUrlPath="/" />
                  </Grid>
                </Grid>
            </Box>
        </>
    )
}