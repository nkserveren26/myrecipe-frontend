import { Box, Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeHeaderImage from "../../images/HomeHeaderImage.jpg";

import React from 'react';
import { RecipeCategoryButton } from '../button/RecipeCategoryButton';
import { RecipeCategoryButtonPropsList } from '../variable/ArrayVariables';
import { HeroHeader } from '../header/HeroHeader';

export const Top: React.FC = () => {

    return (
        <>
            <HeroHeader
              backgroundImage={HomeHeaderImage}
              title="My Recipe"
              description="This app is my favorite recipe list."
              descriptionFontSize={24}
            />
            <Box>
              <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe Category</Typography>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Add Recipe
                </Button>
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} pt={4} container columnSpacing={6} alignItems="center" justifyContent="center">
                  {RecipeCategoryButtonPropsList.map((props, index) => (
                    <Grid item xs={6} sm="auto" md="auto" pb={8} key={index}>
                      <RecipeCategoryButton 
                        buttonLabelName={props.buttonLabelName} 
                        buttonBackgroundImage={props.buttonBackgroundImage} 
                        backgroundColorR={props.backgroundColorR}
                        backgroundColorG={props.backgroundColorG}
                        backgroundColorB={props.backgroundColorB}
                        backgroundOpacity={props.backgroundOpacity}
                        destinationUrlPath={props.destinationUrlPath} />
                    </Grid>
                  ))}
                </Grid>
            </Box>
        </>
    )
}