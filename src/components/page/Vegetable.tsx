import React from "react";
import { HeroHeader } from "../header/HeroHeader";
import VegetableHeaderImage from "../../images/VegetableHeaderImage.jpg";
import AqquaPazza from "../../images/aqqua_pazza.jpg";
import SabaShioyaki from "../../images/saba_shioyaki.jpg";
import ChickenCabbageGarlicStirFry from "../../images/chicken_cabbage_garlic_stir_fry.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";

const VegetableRecipeList: RecipeCardProps[] = [
    {
        title: "チキンとキャベツのガーリック炒め",
        recipeImage: ChickenCabbageGarlicStirFry,
        registerdDate: "2024/07/11"

    },
    {
        title: "鯖の塩焼き",
        recipeImage: SabaShioyaki,
        registerdDate: "2024/11/15"

    },
    {
        title: "鮭のムニエル",
        recipeImage: ChickenCabbageGarlicStirFry,
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

export const Vegetable: React.FC = () => {
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
                    {Array.isArray(VegetableRecipeList) && VegetableRecipeList.map((vegetableRecipe, index) => (
                        <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                            <RecipeCard
                                title={vegetableRecipe.title}
                                recipeImage={vegetableRecipe.recipeImage}
                                registerdDate={vegetableRecipe.registerdDate}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}