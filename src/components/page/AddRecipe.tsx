import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { RequiredLabel } from "../label/RequiredLabel";
import { Categories, Ingredient, Step } from "../interface/interface";
import { DeleteButton } from "../button/DeleteButton";
import { AddButton } from "../button/AddButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { stepOptions } from "../variable/ArrayVariables";

export const AddRecipe: React.FC = () => {

    const categories: Categories = {
        '魚': 'fish',
        '肉': 'beef',
        'スープ': 'soup',
        '野菜': 'vegetable',
    };

    // レシピ名
    const [title, setTitle] = useState("");

    // 何人前
    const [servings, setServings] = useState(1);

    // カテゴリの状態管理
    const [category, setCategory] = useState('');

    // 動画URL
    const [videoUrl, setVideoUrl] = useState('');

    // サムネイル画像
    const [thumbnail, setThumbnail] = useState<File | null>(null);  

    // 材料
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: "", amount: "" }]);

    // 作り方
    const [steps, setSteps] = useState<Step[]>([{ stepNumber: 1, description: "" }]);

    // 料理のコツ
    const [point, setPoint] = useState("");

    // useNavigate
    const navigate = useNavigate();

    // 前のページに戻る関数
    const handleCancel = () => {
        navigate(-1); // 前の画面に戻る
    };

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
    const handleStepChange = (index: number, field: keyof Step, value: string | number) => {
        const newSteps = [...steps];

        if (field === "stepNumber") {
            console.log("stepNumber: aaaaaa");
            newSteps[index][field] = value === '準備' ? 0 : parseInt(value as string);
        } else if (field === "description" && typeof value === "string") {
            newSteps[index][field] = value;
        }
        
        setSteps(newSteps);
    };

    // 任意の作り方オブジェクトを削除する関数
    const handleRemoveStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    // 作り方オブジェクトを追加する関数
    const handleAddStep = () => {
        setSteps([...steps, { stepNumber: 0, description: "" }]);
    };

    // 何人前のオプション用配列
    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    // サムネイル画像が選択された時の処理
    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnail(file);  // サムネイルをセット
        }
    };


    const handleSubmit = async () => {
        if (!process.env.REACT_APP_RECIPE_API_BASE_URL) {
            throw new Error("REACT_APP_RECIPE_API_BASE_URL is not defined");
        }

        const apiUrl: string = process.env.REACT_APP_RECIPE_API_BASE_URL;

        const selectedCategory = categories[category]; // 選択したカテゴリを英語に変換

        const recipeData = {
            title: title,
            servings: servings,
            category: selectedCategory,  // 英語のカテゴリ名を使用
            image: thumbnail,
            videoUrl: videoUrl,
            ingredients: ingredients,
            steps: steps,
            point: point,
        };

        try {
            const response = await axios.post(apiUrl, recipeData);
            console.log('Recipe added:', response.data);
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{  margin: 'auto', pt: 5, pb: 3, textAlign: 'left' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>レシピの追加</Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    料理名 <RequiredLabel fontSize='18px' />
                </Typography>
                <TextField
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    placeholder="例: 鮭のムニエル"
                    sx={{ border: '1px solid', borderRadius: '8px' }}
                />

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    何人前 <RequiredLabel fontSize='18px' />
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
                    カテゴリ <RequiredLabel fontSize='18px' />
                </Typography>
                <TextField
                    select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    sx={{ border: '1px solid', borderRadius: '8px', width: 120, textAlign: 'left' }}
                >
                    {Object.keys(categories).map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </TextField>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    レシピ動画URL <RequiredLabel fontSize='18px' />
                </Typography>
                <TextField
                    fullWidth
                    value={videoUrl}  // 動画URL入力欄
                    onChange={(e) => setVideoUrl(e.target.value)}  // 動画URLの変更をハンドリング
                    variant="outlined"
                    margin="normal"
                    placeholder="例: https://www.youtube.com/watch?v=example"
                    sx={{ border: '1px solid', borderRadius: '8px' }}
                />

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
                    レシピのサムネイル画像
                </Typography>
                <input
                    accept="image/*"
                    type="file"
                    onChange={handleThumbnailChange}
                />

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    材料 <RequiredLabel fontSize='18px' />
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
                        <DeleteButton onClick={() => handleRemoveIngredient(index)} size="large" />
                    </Box>
                ))}
                <AddButton onClick={handleAddIngredient} />

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                    作り方 <RequiredLabel fontSize='18px' />
                </Typography>
                {steps.map((step, index) => (
                    <Box key={index} sx={{  mt: 2 }}>
                        <TextField
                            select
                            label="項番"
                            value={step.stepNumber}
                            onChange={(e) => handleStepChange(index, "stepNumber", e.target.value)}
                            variant="outlined"
                            margin="normal"
                            sx={{ border: '1px solid', borderRadius: '8px', width: 80, textAlign: 'left', m:0 }}
                        >
                            {stepOptions.map((option, index) => (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Box display="flex" alignItems="center" mt={2}>
                            <TextField
                                label="説明"
                                value={step.description}
                                onChange={(e) => handleStepChange(index, "description", e.target.value)}
                                variant="outlined"
                                fullWidth
                                sx={{ border: '1px solid', borderRadius: '8px' }}  // 余白と幅の指定
                            />
                            <DeleteButton onClick={() => handleRemoveStep(index)} size="large" />
                        </Box>
                    </Box>
                ))}
                <AddButton onClick={handleAddStep} />

                <Box sx={{ mt: 5}}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        料理のコツ・ポイント
                    </Typography>
                    <TextField
                        label="説明"
                        value={point}
                        onChange={(e) => setPoint(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ border: '1px solid', borderRadius: '8px', mt: 2 }}  // 余白と幅の指定
                    />
                </Box>
                <Box display="flex" justifyContent="flex-start" sx={{ mt: 6 }}>
                    <Button type="submit" color="primary" variant="contained" size="large" >
                        SUBMIT
                    </Button>
                    <Button variant="contained" size="large" onClick={handleCancel} sx={{ml: 3}} style={{ backgroundColor: '#808080' }}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </>
    );
}