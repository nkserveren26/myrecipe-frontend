import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";
import AqquaPazza from "../../images/aqqua_pazza.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import { getRecipeList } from "../function/GetRecipeList";
import { useNavigate } from "react-router-dom";

export const Fish: React.FC = () => {
    const [fishRecipeList, setFishRecipeList] = useState<RecipeCardProps[]>([]);

    useEffect(() => {

        const fetchFishRecipes = async () => {
            const recipes = await getRecipeList("fish");
            setFishRecipeList(recipes);
        };

        fetchFishRecipes();
    }, []);
  
    return (
        <>
            <HeroHeader 
                backgroundImage={FishHeaderImage}
                title="Fish Recipes" 
                description="This page contains a list of recipes for cooking with fish."
                descriptionFontSize={26}
            />
            <Box>
              <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe List</Typography>
              <AddRecipeButton />
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                    {Array.isArray(fishRecipeList) && fishRecipeList.map((fishRecipe, index) => (
                  <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                    <RecipeCard 
                      title={fishRecipe.title}
                      id={fishRecipe.id} 
                      image={fishRecipe.image} 
                      createdAt={fishRecipe.createdAt} 
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <ScrollToTopButton />
        </>
    )
}