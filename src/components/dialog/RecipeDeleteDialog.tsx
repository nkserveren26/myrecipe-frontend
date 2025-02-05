import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { RecipeDeleteDialogProps } from "../interface/interface";
import { useNavigate } from "react-router-dom";
import { CompleteDialog } from "./CompleteDialog";

export const RecipeDeleteDialog: React.FC<RecipeDeleteDialogProps> = ({openDialog, setOpenDialog, recipeId}) => {

    // 削除処理完了ダイアログ画面用
    const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    // useNavigate
    const navigate = useNavigate();

    const handleCancelDialog = () => {
        setOpenDialog(false); // ダイアログを閉じる
    };


    const handleCloseDialog = () => {
        setCompleteDialogOpen(false);
        setOpenDialog(false); // ダイアログを閉じる
        navigate(-1); // 前の画面に戻る
    };

    const handleConfirmDelete = async () => {
        const apiUrl: string = `${process.env.REACT_APP_RECIPE_API_BASE_URL}/${recipeId}`;
        try {
            // ここで削除APIを実行
            const response = await fetch(apiUrl, {
                method: "DELETE",
            });

            if (response.ok) {
                // ステータスコード200-299の場合
                setDialogTitle('レシピの削除が完了しました！');
                setDialogMessage('レシピが正常に削除されました。');
            } else if (response.status === 500) {
                // ステータスコード500の場合
                setDialogTitle('エラーが発生しました');
                setDialogMessage('サーバーエラーが発生しました。再試行してください。');
            } else {
                // その他のエラー
                setDialogTitle('エラーが発生しました');
                setDialogMessage(`予期しないエラー: ステータスコード ${response.status}`);
            }

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

            {/* 完了ダイアログ */}
            <CompleteDialog
                open={completeDialogOpen}
                title={dialogTitle}
                message={dialogMessage}
                onClose={handleCloseDialog}
            />
        </>
    )
}