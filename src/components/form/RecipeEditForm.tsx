import React, { useState } from 'react';
import { Categories, FormErrors, Ingredient, RecipeEditFormProps, Step } from '../interface/interface';
import { MenuItem, TextField, Typography } from '@mui/material';
import { RequiredLabel } from '../label/RequiredLabel';
import { ErrorMessage } from '../common/ErrorMessage';

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
        </>
    )
}