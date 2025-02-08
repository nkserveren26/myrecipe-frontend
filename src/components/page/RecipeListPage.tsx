import { useEffect, useState } from "react";
import { RecipeCardProps, RecipeListPageProps } from "../interface/interface"
import { useNavigate } from "react-router-dom";
import { getRecipeList } from "../function/GetRecipeList";
import { Box, Button, Typography } from "@mui/material";

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
        <></>
    )
}