import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { RecipeDeleteDialogProps } from "../interface/interface";

export const RecipeDeleteDialog: React.FC<RecipeDeleteDialogProps> = ({openDialog, setOpenDialog, recipeId}) => {

    const [completeDialogOpen, setCompleteDialogOpen] = useState(false);

    const handleCancelDialog = () => {
        setOpenDialog(false); // ダイアログを閉じる
    };


    const handleCloseDialog = () => {
        setCompleteDialogOpen(false);
        setOpenDialog(false); // ダイアログを閉じる
    };

    const handleConfirmDelete = async () => {
        const apiUrl: string = `${process.env.REACT_APP_RECIPE_API_BASE_URL}/${recipeId}`;
        try {
            // ここで削除APIを実行
            const response = await fetch(apiUrl, {
                method: "DELETE",
            });

            setCompleteDialogOpen(true);  // 完了ダイアログを開く
        } catch (error) {
            console.error("Failed to delete recipe:", error);
            alert("削除に失敗しました。");
        }
    };

    return (
        <>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>本当に削除しますか？</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancelDialog} variant="contained" style={{ backgroundColor: '#808080' }}>
                        CANCEL
                    </Button>
                    <Button onClick={handleConfirmDelete} variant="contained" color="error">
                        DELETE
                    </Button>
                </DialogActions>
            </Dialog>

            {/* 削除完了ダイアログ */}
            <Dialog open={completeDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>レシピの削除が完了しました！</DialogTitle>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button onClick={handleCloseDialog} color="primary" variant="contained">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}