import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import SoupHeaderImage from "../../images/SoupHeaderImage.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import { getRecipeList } from "../function/GetRecipeList";


export const Soup: React.FC = () => {
    const [soupRecipeList, setSoupRecipeList] = useState<RecipeCardProps[]>([]);
    const currentCategory = "soup";

    useEffect(() => {

        const fetchSoupRecipes = async () => {
            const recipes = await getRecipeList("soup");
            setSoupRecipeList(recipes);
        };

        fetchSoupRecipes();
    }, []);
    return (
        <>
            <HeroHeader
                backgroundImage={SoupHeaderImage}
                title="Soup Recipes"
                description="This page lists recipes for soups."
                descriptionFontSize={26}
            />
            <Box>
                <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe List</Typography>
                <AddRecipeButton currentCategory={currentCategory} />
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                    {Array.isArray(soupRecipeList) && soupRecipeList.map((soupRecipe, index) => (
                        <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                            <RecipeCard
                                title={soupRecipe.title}
                                id={soupRecipe.id}
                                image={soupRecipe.image}
                                createdAt={soupRecipe.createdAt}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ScrollToTopButton />
        </>
    )
}