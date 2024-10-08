import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import BeefHeaderImage from "../../images/BeefHeaderImage.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import { getRecipeList } from "../function/GetRecipeList";
import { useNavigate } from "react-router-dom";


export const Beef: React.FC = () => {
    const [beefRecipeList, setBeefRecipeList] = useState<RecipeCardProps[]>([]);

    const navigate = useNavigate();
    const currentCategory = "beef";

    useEffect(() => {
        const fetchBeefRecipes = async () => {
            const recipes = await getRecipeList("beef");
            setBeefRecipeList(recipes);
        };

        fetchBeefRecipes();
    }, []);
    return (
        <>
            <HeroHeader 
                backgroundImage={BeefHeaderImage}
                title="Beef Recipes" 
                description="This page contains a list of recipes for cooking with beef."
                descriptionFontSize={26}
            />
            <Box>
              <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe List</Typography>
              <AddRecipeButton currentCategory={currentCategory} />
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                    {Array.isArray(beefRecipeList) && beefRecipeList.map((beefRecipe, index) => (
                        <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                          <RecipeCard 
                            id={beefRecipe.id}
                            title={beefRecipe.title} 
                            image={beefRecipe.image} 
                            createdAt={beefRecipe.createdAt} 
                          />
                        </Grid>
                    ))}
              </Grid>
            </Box>
            <ScrollToTopButton />
        </>
    )
}