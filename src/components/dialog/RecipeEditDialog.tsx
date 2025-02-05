import { Button, Dialog, DialogActions, CircularProgress, DialogContent, DialogTitle } from "@mui/material";
import { RecipeEditForm } from "../form/RecipeEditForm";
import { RecipeEditDialogProps, SaveRecipeData } from "../interface/interface";
import { useRef, useState } from "react";
import React from "react";
import { CompleteDialog } from "./CompleteDialog";

export const RecipeEditDialog: React.FC<RecipeEditDialogProps> = ({ openDialog, setOpenDialog, recipeDetail }) => {

    // ロード表示用
    const [loading, setLoading] = useState(false);

    //更新処理完了ダイアログ画面用
    const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    const dialogContentRef = useRef<HTMLDivElement | null>(null);

    // レシピの更新処理
    const handleUpdateRecipe = async (updatedRecipe: SaveRecipeData, thumbnail: File|null ) => {
        setLoading(true);  // ローディング開始
        if (!process.env.REACT_APP_RECIPE_API_BASE_URL) {
            throw new Error("REACT_APP_RECIPE_API_BASE_URL is not defined");
        }
        
        console.log("更新データ:", updatedRecipe);

        const apiUrl: string = `${process.env.REACT_APP_RECIPE_API_BASE_URL}/${recipeDetail.id}`;

        // JSONデータを文字列化してFormDataに追加
        const formData: FormData = new FormData();
        formData.append("recipe", new Blob([JSON.stringify(updatedRecipe)], { type: "application/json" }));


        // サムネイル画像をFormDataに追加（存在する場合）
        if (thumbnail) {
            formData.append("thumbnail", thumbnail);
        }
        
        // レシピ更新APIを実行
        try {
            const response = await fetch(apiUrl, {
                method: "PUT",
                body: formData
            });

            if (response.ok) {
                // ステータスコード200-299の場合
                setDialogTitle('レシピの更新が完了しました！');
                setDialogMessage('レシピが正常に更新されました。');
            } else if (response.status === 500) {
                // ステータスコード500の場合
                setDialogTitle('エラーが発生しました');
                setDialogMessage('サーバーエラーが発生しました。再試行してください。');
            } else {
                // その他のエラー
                setDialogTitle('エラーが発生しました');
                setDialogMessage(`予期しないエラー: ステータスコード ${response.status}`);
            }

            setLoading(false);  // ローディング終了
            setCompleteDialogOpen(true);  // 完了ダイアログを開く
        } catch (error) {
            console.error('Error adding recipe:', error);
            setLoading(false);
        }
    };

    const handleCancelDialog = () => {
        setOpenDialog(false); // ダイアログを閉じる
    };
    
    const handleCloseDialog = () => {
        setCompleteDialogOpen(false);
        setOpenDialog(false); // ダイアログを閉じる
        // ページをリロードして最新データを反映
        window.location.reload();
    };

    return (
        <>
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
                <DialogTitle>レシピの編集</DialogTitle>
                <DialogContent ref={dialogContentRef}>
                    <RecipeEditForm recipeDetail={recipeDetail} onSave={handleUpdateRecipe} dialogContentRef={dialogContentRef} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDialog} variant="contained" style={{ backgroundColor: '#808080' }}>CANCEL</Button>
                    {loading ? (
                        // Submitボタンの代わりにローディングスピナーを表示
                        <CircularProgress size={24} />
                    ) : (
                            <Button onClick={() => document.getElementById("saveButton")?.click()} color="primary" variant="contained">SUBMIT</Button>
                    )}
                    
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
    );
}