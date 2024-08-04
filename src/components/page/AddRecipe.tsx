import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const AddRecipe: React.FC = () => {

    const [recipeName, setRecipeName] = useState('');

    const handleSubmit = () => {
        // ここでフォームの送信処理を行います。
        //console.log({ recipeName, servings, ingredients });
    };
    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{  margin: 'auto', pt: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>レシピの追加</Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, textAlign: 'left' }}>
                    料理名 <Typography component="span" sx={{ color: 'red', fontSize: '18px' }}> (必須) </Typography>
                </Typography>
                <TextField
                    fullWidth
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    placeholder="例: 鮭のムニエル"
                    sx={{ border: '1px solid', borderRadius: '8px' }}
                />
            </Box>
        </>
    );
}