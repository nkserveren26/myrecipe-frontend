import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import VegetableHeaderImage from "../../images/VegetableHeaderImage.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import { getRecipeList } from "../function/GetRecipeList";


export const Vegetable: React.FC = () => {
    const [vegetableRecipeList, setVegetableRecipeList] = useState<RecipeCardProps[]>([]);

    useEffect(() => {

        const fetchVegetableRecipes = async () => {
            const recipes = await getRecipeList("vegetable");
            setVegetableRecipeList(recipes);
        };

        fetchVegetableRecipes();
    }, []);
    return (
        <>
            <HeroHeader
                backgroundImage={VegetableHeaderImage}
                title="Vegetable Recipes"
                description="This page contains a list of recipes for cooking with vegetable."
                descriptionFontSize={26}
            />
            <Box>
                <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe List</Typography>
                <AddRecipeButton />
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                    {Array.isArray(vegetableRecipeList) && vegetableRecipeList.map((vegetableRecipe, index) => (
                        <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                            <RecipeCard
                                title={vegetableRecipe.title}
                                image={vegetableRecipe.image}
                                createdAt={vegetableRecipe.createdAt}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ScrollToTopButton />
        </>
    )
}