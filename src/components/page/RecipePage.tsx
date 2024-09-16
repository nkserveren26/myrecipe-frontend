import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { RecipeDetail } from "../interface/interface";
import { DropdownButton } from "../button/DropdownButton";
import zIndex from "@mui/material/styles/zIndex";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import axios from "axios";

export const RecipePage: React.FC = () => {
    // リクエストパラメータにあるidパラメータを取得
    const { id } = useParams<{ id: string }>();

    const [recipeDetail, setRecipeDetail] = useState<RecipeDetail>();

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            if (!process.env.REACT_APP_GET_RECIPE_DETAIL_URL) {
                throw new Error("REACT_APP_GET_RECIPE_DETAIL_URL is not defined");
            }

            const apiUrl: string = `${process.env.REACT_APP_GET_RECIPE_DETAIL_URL}/${id}`;

            try {
                const response = await axios.get(apiUrl);
                setRecipeDetail(response.data);
            } catch (error) {
                console.error(`Error getting recipe ${id} detail:`, error);
            }
        };

        fetchRecipeDetail();
    }, []);

    // 正規表現を使用してIDが整数であることを確認
    const isInteger = (str: string) => /^[0-9]+$/.test(str);

    if (!id || !isInteger(id)) {
        return <div>Invalid recipe ID</div>;
    };

    // IDを10進数として解釈して整数に変換
    const recipeId = parseInt(id, 10);

    if (!recipeDetail) {
        return <div>Recipe not found</div>;
    }

    return (
        <>
            <Box pt={3} pb={5}>
                <Box display="flex" alignItems="center" justifyContent="space-between" pb={3}>
                    <Box flex={1} display="flex" justifyContent="center">
                        <Typography pl={15} fontWeight="bold" variant="h4">
                            {recipeDetail.title}
                        </Typography>
                    </Box>
                    <DropdownButton />
                </Box>
                <Box display="flex" justifyContent="center">
                    <ReactPlayer 
                        url={recipeDetail.videoUrl} 
                        controls={true} 
                        width="100%"
                        height="500px"
                    />
                </Box>
            </Box>
            <Box>
                <Typography pb={1} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                    材料
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', fontSize: '16px' }}>2人前</Typography>
                <Box sx={{ marginTop: 2 }}>
                    {recipeDetail.ingredients.map((ingredient, index) => (
                        <Grid container key={index} sx={{ marginBottom: 2 }}>
                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                <Typography variant="body1" sx={{ fontSize: '20px' }}>{ingredient.name}</Typography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Typography variant="body1" sx={{ fontSize: '20px' }}>{ingredient.amount}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </Box>
            <Box mt={7}>
                <Typography pb={1} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                    作り方
                </Typography>
                <Box mt={2} >
                    {recipeDetail.steps.map((step, index) => (
                        <Grid container key={index} sx={{ marginBottom: 3 }}>
                            <Grid item xs={step.stepNumber === 0 ? 0.6 : 0.4} style={{ textAlign: 'left' }}>
                                <Typography variant="body1" sx={{ fontSize: '19px', fontWeight: 'bold' }}>
                                    {step.stepNumber === 0 ? '準備' : step.stepNumber}.
                                </Typography>
                            </Grid>
                            <Grid item xs={step.stepNumber === 0 ? 11.4 : 11.6} style={{ textAlign: 'left' }}>
                                <Typography variant="body1" sx={{ fontSize: '20px' }}>
                                    {step.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </Box>
            <Box mt={6}>
                <Typography pb={2} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                    料理のコツ・ポイント
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', textAlign: 'left', whiteSpace: 'pre-line' }}>
                    {recipeDetail.point}
                </Typography>
            </Box>
            <ScrollToTopButton />
        </>
    );
}