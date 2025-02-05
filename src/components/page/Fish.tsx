import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import { getRecipeList } from "../function/GetRecipeList";
import { useNavigate } from "react-router-dom";

export const Fish: React.FC = () => {
    const [fishRecipeList, setFishRecipeList] = useState<RecipeCardProps[]>([]);
    const currentCategory = "fish";

    // エラー画面表示用
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {

        const fetchFishRecipes = async () => {
            try {
              const recipes = await getRecipeList("fish");
              setFishRecipeList(recipes);
            } catch (error) {
              setErrorMessage("レシピのリストを取得できませんでした。時間をおいて再試行してください。");
              console.error("Error fetching fish recipes:", error);
            }
            
        };

        fetchFishRecipes();
    }, []);

    // エラーメッセージがある場合はエラー画面を表示
    if (errorMessage) {
      return (
        <Box textAlign="center" mt={5}>
          <Typography variant="h5" color="error">{errorMessage}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate("/")}>
            トップページへ戻る
          </Button>
        </Box>
      );
    }
  
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
              <AddRecipeButton currentCategory={currentCategory} />
              {fishRecipeList.length > 0 ? (
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                  {fishRecipeList.map((fishRecipe, index) => (
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
              ) : (
                <Typography variant="h6" textAlign="center" mt={5}>
                  現在、表示できるレシピがありません。
                </Typography>
              )}
            </Box>
            <ScrollToTopButton />
        </>
    )
}