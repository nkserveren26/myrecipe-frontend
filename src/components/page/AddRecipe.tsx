import { Box, Button, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { RequiredLabel } from "../label/RequiredLabel";
import { Ingredient, Step } from "../interface/interface";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const AddRecipe: React.FC = () => {

    // レシピ名
    const [recipeName, setRecipeName] = useState("");

    // 何人前
    const [servings, setServings] = useState(1);

    // 材料
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: "", amount: "" }]);

    // 作り方
    const [steps, setSteps] = useState<Step[]>([{ task: "", description: "" }]);

    // 材料オブジェクトを更新する関数
    const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    // 材料オブジェクトを追加する関数
    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: "", amount: "" }]);
    };

    // 材料オブジェクトを削除する関数
    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    // 作り方オブジェクトを更新する関数
    const handleStepChange = (index: number, field: keyof Step, value: string) => {
        const newSteps = [...steps];
        newSteps[index][field] = value;
        setSteps(newSteps);
    };

    // 何人前のオプション用配列
    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    // 作り方の項番オプション用配列
    const stepOptions = ["準備", ...Array.from({ length: 10 }, (_, i) => (i + 1).toString())];


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
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center',mt: 2 }}>
                        <TextField
                            label="材料名"
                            value={ingredient.name}
                            onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                            variant="outlined"
                            sx={{ mr: 2, flex: 1, border: '1px solid', borderRadius: '8px' }}  // 余白と幅の指定
                        />
                        <TextField
                            label="量"
                            value={ingredient.amount}
                            onChange={(e) => handleIngredientChange(index, "amount", e.target.value)}
                            variant="outlined"
                            sx={{ flex: 0.5, border: '1px solid', borderRadius: '8px' }}  // 幅の指定
                        />
                        <IconButton
                            onClick={() => handleRemoveIngredient(index)}
                            sx={{ p: 0, ml: 2, color: 'red' }}
                        >
                            <DeleteIcon sx={{ fontSize: '30px' }} />
                        </IconButton>
                    </Box>
                ))}
                <Button
                    variant="contained"
                    onClick={handleAddIngredient}
                    startIcon={<AddIcon />}
                    sx={{mt: 2}}
                >
                    Add
                </Button>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    作り方
                </Typography>
                {steps.map((step, index) => (
                    <Box key={index} sx={{ alignItems: 'center', mt: 1 }}>
                        <TextField
                            select
                            label="項番"
                            value={step.task}
                            onChange={(e) => handleStepChange(index, "task", e.target.value)}
                            variant="outlined"
                            margin="normal"
                            sx={{ border: '1px solid', borderRadius: '8px', width: 80, textAlign: 'left' }}
                        >
                            {stepOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                ))}
            </Box>
        </>
    );
}