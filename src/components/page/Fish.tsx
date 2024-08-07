import React from "react";
import { HeroHeader } from "../header/HeroHeader";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";
import AqquaPazza from "../../images/aqqua_pazza.jpg";
import SabaShioyaki from "../../images/saba_shioyaki.jpg";
import SalmonMeunière from "../../images/salmon_meunière.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";

const fishRecipeList: RecipeCardProps[] = [
    {
        title: "アクアパッツァ",
        recipeImage:AqquaPazza,
        registerdDate: "2024/07/09"

    },
    {
        title: "鯖の塩焼き",
        recipeImage: SabaShioyaki,
        registerdDate: "2024/07/09"

    },
    {
        title: "鮭のムニエル",
        recipeImage: SalmonMeunière,
        registerdDate: "2024/07/09"

    },
    {
        title: "Acqua Pazza",
        recipeImage: AqquaPazza,
        registerdDate: "2024/07/09"

    },
    {
        title: "Acqua Pazza",
        recipeImage: AqquaPazza,
        registerdDate: "2024/07/09"

    },
    {
        title: "Acqua Pazza",
        recipeImage: AqquaPazza,
        registerdDate: "2024/07/09"

    },
];

export const Fish: React.FC = () => {
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
                      recipeImage={fishRecipe.recipeImage} 
                      registerdDate={fishRecipe.registerdDate} 
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <ScrollToTopButton />
        </>
    )
}