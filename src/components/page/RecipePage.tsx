import { Box, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export const RecipePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // 正規表現を使用してIDが整数であることを確認
    const isInteger = (str: string) => /^[0-9]+$/.test(str);

    if (!id || !isInteger(id)) {
        return <div>Invalid recipe ID</div>;
    };

    // IDを10進数として解釈して整数に変換
    const recipeId = parseInt(id, 10);

    // 例: データを配列から取得
    const recipes = [
        { id: 1, name: "アクアパッツァ", videoUrl: "https://www.youtube.com/watch?v=b06xfSfwqjc" },
        { id: 2, name: 'Recipe 2', description: 'This is recipe 2' },
        // その他のレシピデータ
    ];

    // 実際は取得したidでバックエンドAPI経由でクエリしてデータを取得する想定
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <>
            <Box pt={3} pb={4}>
                <Typography pb={3} fontWeight="bold" variant="h4">{recipe.name}</Typography>
                <Box display="flex" justifyContent="center">
                    <ReactPlayer 
                        url={recipe.videoUrl} 
                        controls={true} 
                        width="100%"
                        height="500px"
                    />
                </Box>
            </Box>
            <Box>
                <Typography pb={1} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                    材料
                </Typography>
            </Box>
        </>
    );
}