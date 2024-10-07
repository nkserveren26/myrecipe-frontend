import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddRecipeButtonProps } from "../interface/interface";

export const AddRecipeButton: React.FC<AddRecipeButtonProps> = ({ currentCategory }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/recipes/new", { state: { category: currentCategory } });
    };
    return (
        <>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleClick}>
                Add Recipe
            </Button>
        </>
    )
}