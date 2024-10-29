import React, { useState } from 'react';
import { Ingredient, RecipeEditFormProps, Step } from '../interface/interface';

export const RecipeEditForm: React.FC<RecipeEditFormProps> = ({ recipeDetail }) => {
    const [title, setTitle] = useState(recipeDetail.title);
    const [videoUrl, setVideoUrl] = useState(recipeDetail.videoUrl);
    const [servings, setServings] = useState(recipeDetail.servings);
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [ingredients, setIngredients] = useState<Ingredient[]>(recipeDetail.ingredients);
    const [steps, setSteps] = useState<Step[]>(recipeDetail.steps);
    const [point, setPoint] = useState(recipeDetail.point);

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
        </>
    )
}