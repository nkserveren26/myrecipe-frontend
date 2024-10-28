import React, { useState } from 'react';
import { RecipeEditFormProps } from '../interface/interface';

export const RecipeEditForm: React.FC<RecipeEditFormProps> = ({ recipeDetail }) => {
    const [title, setTitle] = useState(recipeDetail.title);
    const [videoUrl, setVideoUrl] = useState(recipeDetail.videoUrl);
    return (
        <></>
    )
}