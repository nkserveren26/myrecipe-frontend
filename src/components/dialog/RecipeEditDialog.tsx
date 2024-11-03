import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { RecipeEditForm } from "../form/RecipeEditForm";
import { RecipeDetail, RecipeEditDialogProps, SaveRecipeData } from "../interface/interface";

export const RecipeEditDialog: React.FC<RecipeEditDialogProps> = ({ openDialog, setOpenDialog, recipeDetail }) => {
    
    // レシピの更新処理
    const handleUpdateRecipe = (updatedRecipe: SaveRecipeData, thumbnail: File|null ) => {
        // 更新処理をここに追加
        console.log("更新データ:", updatedRecipe);

        // サムネイル画像の処理
        
        // レシピ更新APIを実行
    };
    
    const handleCloseDialog = () => {
        setOpenDialog(false); // ダイアログを閉じる
    };

    return (
        <>
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
                <DialogTitle>レシピの編集</DialogTitle>
                <DialogContent>
                    <RecipeEditForm recipeDetail={recipeDetail} onSave={handleUpdateRecipe} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} variant="contained" style={{ backgroundColor: '#808080' }}>キャンセル</Button>
                    <Button onClick={() => document.getElementById("saveButton")?.click()} color="primary" variant="contained">保存</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}