import React from "react";
import { DeleteButtonProps } from "../interface/interface";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteButton: React.FC<DeleteButtonProps>  = ({
    onClick, 
    size= "medium"
}) => {
    return (
        <>
            <IconButton onClick={onClick} color="error">
                <DeleteIcon fontSize={size} />
            </IconButton>
        </>
    );
}