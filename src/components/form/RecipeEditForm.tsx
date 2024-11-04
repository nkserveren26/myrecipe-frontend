import React, { useState } from 'react';
import { Categories, FormErrors, Ingredient, RecipeEditFormProps, Step } from '../interface/interface';
import { Box, Button, CircularProgress, MenuItem, TextField, Typography } from '@mui/material';
import { RequiredLabel } from '../label/RequiredLabel';
import { ErrorMessage } from '../common/ErrorMessage';
import { DeleteButton } from '../button/DeleteButton';
import { AddButton } from '../button/AddButton';
import { stepOptions } from "../variable/ArrayVariables";

export const RecipeEditForm: React.FC<RecipeEditFormProps> = ({ recipeDetail, onSave }) => {
    
    // カテゴリーの一覧
    const categories: Categories = {
        '魚': 'fish',
        '肉': 'beef',
        'スープ': 'soup',
        '野菜': 'vegetable',
    };

    const id: number = recipeDetail.id;
    const [title, setTitle] = useState(recipeDetail.title);
    const [videoUrl, setVideoUrl] = useState(recipeDetail.videoUrl);
    const [servings, setServings] = useState(recipeDetail.servings);
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [ingredients, setIngredients] = useState<Ingredient[]>(recipeDetail.ingredients);
    const [steps, setSteps] = useState<Step[]>(recipeDetail.steps);
    const [point, setPoint] = useState(recipeDetail.point);

    // 何人前のオプション用配列
    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    // エラーメッセージ格納用
    const [errors, setErrors] = useState<FormErrors>({ title: "", category: "", videoUrl: "", ingredients: "", steps: "" });
    const [formError, setFormError] = useState(""); // 全体エラーメッセージ用

    // ロード表示用
    const [loading, setLoading] = useState(false);

    // サムネイル画像が選択された時の処理
    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnail(file);  // サムネイルをセット
        }
    };

    // 材料オブジェクトを更新する関数
    const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    // 材料オブジェクトを追加する関数
    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: "", amount: "" }]);
    };

    // 材料オブジェクトを削除する関数
    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    // 作り方オブジェクトを更新する関数
    const handleStepChange = (index: number, field: keyof Step, value: string | number) => {
        const newSteps = [...steps];

        if (field === "stepNumber") {
            console.log("stepNumber: aaaaaa");
            newSteps[index][field] = value === '準備' ? 0 : parseInt(value as string);
        } else if (field === "description" && typeof value === "string") {
            newSteps[index][field] = value;
        }

        setSteps(newSteps);
    };

    // 任意の作り方オブジェクトを削除する関数
    const handleRemoveStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    // 作り方オブジェクトを追加する関数
    const handleAddStep = () => {
        setSteps([...steps, { stepNumber: 0, description: "" }]);
    };

    // 各入力項目のvalidate
    const validateForm = () => {
        let valid = true;
        const newErrors: FormErrors = { title: "", category: "", videoUrl: "", ingredients: "", steps: "" };

        // タイトルが空の場合
        if (title.trim() === "") { //入力文字列からスペースを削除
            newErrors.title = "タイトルは必須です。";
            valid = false;
        }

        // カテゴリが未選択の場合
        if (category === "") { //入力文字列からスペースを削除
            newErrors.category = "カテゴリを選択してください。";
            valid = false;
        }

        // レシピ動画URLが空の場合
        if (videoUrl.trim() === "") { //入力文字列からスペースを削除
            newErrors.videoUrl = "レシピ動画URLは必須です。";
            valid = false;
        }

        // 材料が1つも入力されていない場合
        if (ingredients.length === 0 || ingredients.some(ingredient => ingredient.name.trim() === "")) {
            newErrors.ingredients = "少なくとも1つの材料を入力してください。";
            valid = false;
        }

        // 作り方が1つも入力されていない場合
        if (steps.length === 0 || steps.some(step => step.description.trim() === "")) {
            newErrors.steps = "少なくとも作り方は1つ以上入力してください。";
            valid = false;
        }

        setErrors(newErrors);

        // 全体のエラーメッセージをセット
        if (!valid) {
            setFormError("入力項目にエラーがあります。内容を確認してください。");

            // 画面の一番上にスクロールする処理を追加
            window.scrollTo({
                top: 0,
                behavior: "smooth", // スムーズにスクロール
            });
        } else {
            setFormError(""); // エラーがない場合は全体のエラーメッセージをリセット
        }

        return valid;
    };

    const handleSave = () => {

        // 入力値のチェック処理
        if (validateForm()) {
            // カテゴリ選択
            const selectedCategory: string = categories[category]; // 選択したカテゴリを英語に変換

            // onSave propsに渡された関数を実行
            onSave({
                id,
                title,
                videoUrl,
                servings,
                category: selectedCategory,
                ingredients,
                steps,
                point
            }, thumbnail);
        } else {
            console.log('バリデーションエラーが発生しました');
        }
        
        
    };

    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                料理名 <RequiredLabel fontSize='18px' />
            </Typography>
            <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                margin="normal"
                placeholder="例: 鮭のムニエル"
                sx={{ border: '1px solid', borderRadius: '8px' }}
            />
            {errors.title && (
                <ErrorMessage message={errors.title} />
            )}

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                何人前 <RequiredLabel fontSize='18px' />
            </Typography>
            <TextField
                select
                value={servings}
                onChange={(e) => setServings(parseInt(e.target.value))}
                variant="outlined"
                margin="normal"
                sx={{ border: '1px solid', borderRadius: '8px', width: 80, textAlign: 'left' }}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                カテゴリ <RequiredLabel fontSize='18px' />
            </Typography>
            <TextField
                select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="outlined"
                margin="normal"
                sx={{ border: '1px solid', borderRadius: '8px', width: 120, textAlign: 'left' }}
            >
                {Object.keys(categories).map((cat) => (
                    <MenuItem key={cat} value={cat}>
                        {cat}
                    </MenuItem>
                ))}
            </TextField>
            {errors.category && (
                <ErrorMessage message={errors.category} />
            )}

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                レシピ動画URL <RequiredLabel fontSize='18px' />
            </Typography>
            <TextField
                fullWidth
                value={videoUrl}  // 動画URL入力欄
                onChange={(e) => setVideoUrl(e.target.value)}  // 動画URLの変更をハンドリング
                variant="outlined"
                margin="normal"
                placeholder="例: https://www.youtube.com/watch?v=example"
                sx={{ border: '1px solid', borderRadius: '8px' }}
            />
            {errors.videoUrl && (
                <ErrorMessage message={errors.videoUrl} />
            )}

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
                レシピのサムネイル画像
            </Typography>
            <input
                accept="image/*"
                type="file"
                onChange={handleThumbnailChange}
            />

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                材料 <RequiredLabel fontSize='18px' />
            </Typography>
            {ingredients.map((ingredient, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <TextField
                        label="材料名"
                        value={ingredient.name}
                        onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                        variant="outlined"
                        sx={{ mr: 2, flex: 1, border: '1px solid', borderRadius: '8px' }}  // 余白と幅の指定
                    />
                    <TextField
                        label="量"
                        value={ingredient.amount}
                        onChange={(e) => handleIngredientChange(index, "amount", e.target.value)}
                        variant="outlined"
                        sx={{ flex: 0.5, border: '1px solid', borderRadius: '8px' }}  // 幅の指定
                    />
                    <DeleteButton onClick={() => handleRemoveIngredient(index)} size="large" />
                </Box>
            ))}
            <AddButton onClick={handleAddIngredient} />
            {errors.ingredients && (
                <ErrorMessage message={errors.ingredients} />
            )}

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
                作り方 <RequiredLabel fontSize='18px' />
            </Typography>
            {steps.map((step, index) => (
                <Box key={index} sx={{ mt: 2 }}>
                    <TextField
                        select
                        label="項番"
                        value={step.stepNumber}
                        onChange={(e) => handleStepChange(index, "stepNumber", e.target.value)}
                        variant="outlined"
                        margin="normal"
                        sx={{ border: '1px solid', borderRadius: '8px', width: 80, textAlign: 'left', m: 0 }}
                    >
                        {stepOptions.map((option, index) => (
                            <MenuItem key={index} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box display="flex" alignItems="center" mt={2}>
                        <TextField
                            label="説明"
                            value={step.description}
                            onChange={(e) => handleStepChange(index, "description", e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{ border: '1px solid', borderRadius: '8px' }}  // 余白と幅の指定
                        />
                        <DeleteButton onClick={() => handleRemoveStep(index)} size="large" />
                    </Box>
                </Box>
            ))}
            <AddButton onClick={handleAddStep} />
            {errors.steps && (
                <ErrorMessage message={errors.steps} />
            )}

            <Box sx={{ mt: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    料理のコツ・ポイント
                </Typography>
                <TextField
                    label="説明"
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{ border: '1px solid', borderRadius: '8px', mt: 2 }}  // 余白と幅の指定
                />
            </Box>
            <Button onClick={handleSave} style={{ display: "none" }} id="saveButton">Save</Button>
        </>
    )
}