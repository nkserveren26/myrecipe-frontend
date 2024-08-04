import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { RequiredLabel } from "../label/RequiredLabel";

export const AddRecipe: React.FC = () => {

    const [recipeName, setRecipeName] = useState('');
    const [servings, setServings] = useState(1);

    // 何人前のオプション用配列
    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    const handleSubmit = () => {
        // ここでフォームの送信処理を行います。
        //console.log({ recipeName, servings, ingredients });
    };
    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{  margin: 'auto', pt: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>レシピの追加</Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, textAlign: 'left' }}>
                    料理名 <RequiredLabel fontSize='18px' />
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

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, textAlign: 'left' }}>
                    何人前
                </Typography>
                <TextField
                    select
                    value={servings}
                    onChange={(e) => setServings(parseInt(e.target.value))}
                    variant="outlined"
                    margin="normal"
                    sx={{ border: '1px solid', borderRadius: '8px' }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </>
    );
}