import axios from 'axios';
import { RecipeCardProps } from '../interface/interface';

export const getRecipeList = async (categoryName: string): Promise<RecipeCardProps[]> => {
    if (!process.env.REACT_APP_GET_RECIPES_URL) {
        throw new Error("REACT_APP_GET_RECIPES_URL is not defined");
    }

    const apiUrl: string = `${process.env.REACT_APP_GET_RECIPES_URL}?categoryName=${categoryName}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error(`Error getting ${categoryName} recipe list:`, error);
        return [];
    }
};