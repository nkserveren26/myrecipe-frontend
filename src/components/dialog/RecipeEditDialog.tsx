import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { RecipeEditForm } from "../form/RecipeEditForm";
import { RecipeEditDialogProps } from "../interface/interface";

export const RecipeEditDialog: React.FC<RecipeEditDialogProps> = ({ openDialog, setOpenDialog, recipeDetail }) => {
    
    // レシピの更新処理
    const handleUpdateRecipe = () => {
        // 更新処理をここに追加
        console.log("更新データ:");
        // 必要であればAPIコールやステートの更新を行います
    };
    
    const handleCloseDialog = () => {
        setOpenDialog(false); // ダイアログを閉じる
    };

    return (
        <>
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
                <DialogTitle>レシピの編集</DialogTitle>
                <DialogContent>
                    <RecipeEditForm recipeDetail={recipeDetail} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} variant="contained" style={{ backgroundColor: '#808080' }}>キャンセル</Button>
                    <Button onClick={handleUpdateRecipe} color="primary" variant="contained">保存</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}