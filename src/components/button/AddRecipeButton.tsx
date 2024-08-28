import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { useNavigate } from "react-router-dom";

export const AddRecipeButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/recipes/new");
    };
    return (
        <>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleClick}>
                Add Recipe
            </Button>
        </>
    )
}