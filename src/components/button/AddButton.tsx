import { Button } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { AddButtonProps } from "../interface/interface";

export const AddButton: React.FC<AddButtonProps> = ({ 
    onClick, 
    label = "Add", 
    sx 
}) => {
    return (
        <>
            <Button
                variant="contained"
                onClick={onClick}
                startIcon={<AddIcon />}
                sx={{ mt: 2, ...sx }}
            >
                {label}
            </Button>
        </>
    );
}