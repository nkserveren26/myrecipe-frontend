import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import BeefHeaderImage from "../../images/BeefHeaderImage.jpg";
import AqquaPazza from "../../images/aqqua_pazza.jpg";
import SabaShioyaki from "../../images/saba_shioyaki.jpg";
import ChickenCabbageGarlicStirFry from "../../images/chicken_cabbage_garlic_stir_fry.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import axios from "axios";

/*
const BeefRecipeList: RecipeCardProps[] = [
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
*/

export const Beef: React.FC = () => {
    const [beefRecipeList, setBeefRecipeList] = useState<RecipeCardProps[]>([]);

    useEffect(() => {

        const getBeefRecipeList = async () => {
            try {
                if (!process.env.REACT_APP_GET_RECIPES_URL) {
                    throw new Error("REACT_APP_GET_RECIPES_URL is not defined");
                }

                const apiUrl: string = `${process.env.REACT_APP_GET_RECIPES_URL}?categoryName=beef`;
                // APIから、カテゴリが肉のレシピ一覧を取得
                const response = await axios.get(apiUrl);
                const data = [response.data] as const;
                //取得したデータをbeefRecipeListにセット
                setBeefRecipeList(...data);

            } catch (error) {
                console.error("Error getting beef recipe list:", error);
            }
        }

        getBeefRecipeList();
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
              <AddRecipeButton />
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                    {Array.isArray(beefRecipeList) && beefRecipeList.map((beefRecipe, index) => (
                        <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                          <RecipeCard 
                            title={beefRecipe.title} 
                            imagePath={beefRecipe.imagePath} 
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