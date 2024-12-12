import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";
import { RecipeDeleteDialogProps } from "../interface/interface";

export const RecipeDeleteDialog: React.FC<RecipeDeleteDialogProps> = ({openDialog, setOpenDialog, recipeId}) => {

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleConfirmDelete = async () => {
        const apiUrl: string = `${process.env.REACT_APP_RECIPE_API_BASE_URL}/${recipeId}`;
        try {
            // ここで削除APIを実行
            const response = await fetch(apiUrl, {
                method: "DELETE",
            });
        } catch (error) {
            console.error("Failed to delete recipe:", error);
            alert("削除に失敗しました。");
        }
    };

    return (
        <>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>本当に削除しますか？</DialogTitle>
                <DialogActions>
                    <Button onClick={handleDialogClose} variant="outlined" color="primary">
                        キャンセル
                    </Button>
                    <Button onClick={handleConfirmDelete} variant="contained" color="secondary">
                        削除
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}