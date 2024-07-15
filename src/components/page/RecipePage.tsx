import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Recipe } from "../interface/interface";

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
    const recipes: Recipe[] = [
        { 
            id: 1, 
            name: "アクアパッツァ", 
            videoUrl: "https://www.youtube.com/watch?v=b06xfSfwqjc",
            ingredients: [
                { name: 'カレイ', amount: '200g' },
                { name: '塩', amount: '小さじ1/2' },
                { name: 'アサリ (170g)', amount: '10個' },
                { name: 'ミニトマト', amount: '6個' },
                { name: '水', amount: '400ml' },
                { name: 'EVオリーブオイル (焼く用)', amount: '大さじ1' },
                { name: 'EVオリーブオイル (仕上げ用)', amount: '50ml' },
                { name: 'イタリアンパセリ', amount: '適量' },
            ],
         },
        { 
            id: 2, 
            name: 'Recipe 2',
            videoUrl: "https://www.youtube.com/watch?v=b06xfSfwqjc",
            ingredients: [
                { name: "玉ねぎ", amount: "1個" },
                { name: "にんじん", amount: "1本" },
                { name: "じゃがいも", amount: "2個" },
            ],

        },
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
                <Typography variant="body1" sx={{ textAlign: 'left', fontSize: '16px' }}>2人前</Typography>
                <Box sx={{ marginTop: 2 }}>
                    {recipe.ingredients.map((ingredient, index) => (
                        <Grid container key={index} sx={{ marginBottom: 2 }}>
                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                <Typography variant="body1" sx={{ fontSize: '20px' }}>{ingredient.name}</Typography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Typography variant="body1" sx={{ fontSize: '20px' }}>{ingredient.amount}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </Box>
        </>
    );
}