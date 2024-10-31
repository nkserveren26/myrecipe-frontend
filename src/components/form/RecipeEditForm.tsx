import React, { useState } from 'react';
import { Categories, FormErrors, Ingredient, RecipeEditFormProps, Step } from '../interface/interface';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { RequiredLabel } from '../label/RequiredLabel';
import { ErrorMessage } from '../common/ErrorMessage';
import { DeleteButton } from '../button/DeleteButton';
import { AddButton } from '../button/AddButton';

export const RecipeEditForm: React.FC<RecipeEditFormProps> = ({ recipeDetail }) => {
    
    // カテゴリーの一覧
    const categories: Categories = {
        '魚': 'fish',
        '肉': 'beef',
        'スープ': 'soup',
        '野菜': 'vegetable',
    };

    const [title, setTitle] = useState(recipeDetail.title);
    const [videoUrl, setVideoUrl] = useState(recipeDetail.videoUrl);
    const [servings, setServings] = useState(recipeDetail.servings);
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [ingredients, setIngredients] = useState<Ingredient[]>(recipeDetail.ingredients);
    const [steps, setSteps] = useState<Step[]>(recipeDetail.steps);
    const [point, setPoint] = useState(recipeDetail.point);

    // 何人前のオプション用配列
    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    // エラーメッセージ格納用
    const [errors, setErrors] = useState<FormErrors>({ title: "", category: "", videoUrl: "", ingredients: "", steps: "" });
    const [formError, setFormError] = useState(""); // 全体エラーメッセージ用

    // サムネイル画像が選択された時の処理
    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnail(file);  // サムネイルをセット
        }
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

    return (
        <>
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
            {errors.title && (
                <ErrorMessage message={errors.title} />
            )}

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
            {errors.category && (
                <ErrorMessage message={errors.category} />
            )}

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
            {errors.videoUrl && (
                <ErrorMessage message={errors.videoUrl} />
            )}

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
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
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
            {errors.ingredients && (
                <ErrorMessage message={errors.ingredients} />
            )}
        </>
    )
}