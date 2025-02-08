import { useEffect, useState } from "react";
import { RecipeCardProps, RecipeListPageProps } from "../interface/interface"
import { useNavigate } from "react-router-dom";
import { getRecipeList } from "../function/GetRecipeList";
import { Box, Button, Grid, Typography } from "@mui/material";
import { HeroHeader } from "../header/HeroHeader";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";

export const RecipeListPage: React.FC<RecipeListPageProps> = ({ category, backgroundImage, title, description }) => {

    const [recipeList, setRecipeList] = useState<RecipeCardProps[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipes = await getRecipeList(category);
                setRecipeList(recipes);
            } catch (error) {
                setErrorMessage("レシピのリストを取得できませんでした。時間をおいて再試行してください。");
                console.error(`Error fetching ${category} recipes:`, error);
            }
        };

        fetchRecipes();
    }, [category]);

    // エラーがある場合はエラーメッセージを表示
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
            <HeroHeader backgroundImage={backgroundImage} title={title} description={description} descriptionFontSize={26} />
            <Box>
                <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe List</Typography>
                <AddRecipeButton currentCategory={category} />
                {recipeList.length > 0 ? (
                    <Grid columns={{ xs: 6, sm: 8, md: 12 }} container columnSpacing={6} pt={4} alignItems="center" justifyContent="center">
                        {recipeList.map((recipe, index) => (
                            <Grid item xs={6} sm="auto" md="auto" key={index} pb={6}>
                                <RecipeCard
                                    title={recipe.title}
                                    id={recipe.id}
                                    image={recipe.image}
                                    createdAt={recipe.createdAt}
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