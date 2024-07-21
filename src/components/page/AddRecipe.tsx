import { Box, Typography } from "@mui/material";
import React from "react";

export const AddRecipe: React.FC = () => {

    const handleSubmit = () => {
        // ここでフォームの送信処理を行います。
        //console.log({ recipeName, servings, ingredients });
    };
    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{  margin: 'auto', pt: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>レシピの追加</Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, textAlign: 'left' }}>料理名</Typography>
            </Box>
        </>
    );
}