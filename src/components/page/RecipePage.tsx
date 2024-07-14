import React from "react";
import { useParams } from "react-router-dom";

const RecipePage: React.FC = () => {
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
        { id: 1, name: 'Recipe 1', description: 'This is recipe 1' },
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
        </>
    );
}