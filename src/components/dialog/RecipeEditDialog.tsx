import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { RecipeEditForm } from "../form/RecipeEditForm";
import { RecipeEditDialogProps, SaveRecipeData } from "../interface/interface";
import { useRef, useState } from "react";

export const RecipeEditDialog: React.FC<RecipeEditDialogProps> = ({ openDialog, setOpenDialog, recipeDetail }) => {

    // ロード表示用
    const [loading, setLoading] = useState(false);
    const [completeDialogOpen, setCompleteDialogOpen] = useState(false);

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

            console.log("更新完了");

            setLoading(false);  // ローディング終了
            setCompleteDialogOpen(true);  // 完了ダイアログを開く
        } catch (error) {
            console.error('Error adding recipe:', error);
            setLoading(false);
        }
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
                    <Button onClick={handleCloseDialog} variant="contained" style={{ backgroundColor: '#808080' }}>キャンセル</Button>
                    <Button onClick={() => document.getElementById("saveButton")?.click()} color="primary" variant="contained">保存</Button>
                </DialogActions>
            </Dialog>

            {/* 更新完了ダイアログ */}
            <Dialog open={completeDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>レシピの更新が完了しました！</DialogTitle>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button onClick={handleCloseDialog} color="primary" variant="contained">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}