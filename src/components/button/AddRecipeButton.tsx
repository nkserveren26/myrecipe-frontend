import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";

export const AddRecipeButton: React.FC = () => {
    return (
        <>
            <Button variant="contained" startIcon={<AddIcon />}>
                Add Recipe
            </Button>
        </>
    )
}