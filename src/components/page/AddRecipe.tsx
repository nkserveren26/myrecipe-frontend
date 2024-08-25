import { Box, Button, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { RequiredLabel } from "../label/RequiredLabel";
import { Ingredient } from "../interface/interface";
import DeleteIcon from '@mui/icons-material/Delete';

export const AddRecipe: React.FC = () => {

    // レシピ名
    const [recipeName, setRecipeName] = useState("");

    // 何人前
    const [servings, setServings] = useState(1);

    // 材料
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: "", amount: "" }]);

    const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: "", amount: "" }]);
    };

    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    // 何人前のオプション用配列
    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    const handleSubmit = () => {
        // ここでフォームの送信処理を行います。
        //console.log({ recipeName, servings, ingredients });
    };

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{  margin: 'auto', pt: 5, textAlign: 'left' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>レシピの追加</Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
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

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    何人前
                </Typography>
                <TextField
                    select
                    value={servings}
                    onChange={(e) => setServings(parseInt(e.target.value))}
                    variant="outlined"
                    margin="normal"
                    sx={{ border: '1px solid', borderRadius: '8px', width: 80, textAlign: 'left' }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    材料
                </Typography>
                {ingredients.map((ingredient, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <TextField
                            label="材料名"
                            value={ingredient.name}
                            onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                            variant="outlined"
                            sx={{ mr: 2, flex: 1 }}  // 余白と幅の指定
                        />
                        <TextField
                            label="量"
                            value={ingredient.amount}
                            onChange={(e) => handleIngredientChange(index, "amount", e.target.value)}
                            variant="outlined"
                            sx={{ flex: 0.5 }}  // 幅の指定
                        />
                        <IconButton
                            onClick={() => handleRemoveIngredient(index)}
                            sx={{ ml: 2, color: 'red' }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
                <Button variant="contained" color="primary" onClick={handleAddIngredient}>
                    材料を追加
                </Button>
            </Box>
        </>
    );
}