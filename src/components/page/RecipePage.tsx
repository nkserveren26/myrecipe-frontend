import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { RecipeDetail } from "../interface/interface";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import axios from "axios";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { RecipeEditDialog } from "../dialog/RecipeEditDialog";
import { RecipeDeleteDialog } from "../dialog/RecipeDeleteDialog";
import { Divider } from "../divider/Divider";
import { DividerWithColor } from "../divider/DividerWithColor";

export const RecipePage: React.FC = () => {
    // リクエストパラメータにあるidパラメータを取得
    const { id } = useParams<{ id: string }>();

    const [recipeDetail, setRecipeDetail] = useState<RecipeDetail>();

    const [loading, setLoading] = useState(true);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openEditDialog, setOpenEditDialog] = useState(false); // 編集ダイアログ表示状態
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // 削除ダイアログ表示状態

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            if (!process.env.REACT_APP_RECIPE_API_BASE_URL) {
                throw new Error("REACT_APP_RECIPE_API_BASE_URL is not defined");
            }

            const apiUrl: string = `${process.env.REACT_APP_RECIPE_API_BASE_URL}/${id}`;

            try {
                const response = await axios.get(apiUrl);
                setRecipeDetail(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 500) {
                        setErrorMessage('サーバーでエラーが発生しました。時間をおいて再試行してください。');
                    } else {
                        setErrorMessage('レシピの取得に失敗しました。');
                    }
                } else {
                    setErrorMessage('予期しないエラーが発生しました。');
                }
                console.error(`Error getting recipe ${id} detail:`, error);
            } finally {
                setLoading(false);  // ローディング完了
            }
        };

        fetchRecipeDetail();
    }, [id]);

    // ボタンがクリックされたときに呼ばれるハンドラ
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // メニューが閉じられたときに呼ばれるハンドラ
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        setOpenEditDialog(true);  // ダイアログを表示
        handleClose(); // メニューを閉じる
    };

    const handleDelete = () => {
        setOpenDeleteDialog(true);  // ダイアログを表示
        handleClose(); // メニューを閉じる
    };

    // データ取得中は以下の画面を表示
    if (loading) {
        return <div>Loading...</div>;
    }

    if (errorMessage) {
        return (
            <div>
                <Typography variant="h5" color="error" align="center">
                    {errorMessage}
                </Typography>
            </div>
        );
    }


    if (!recipeDetail) {
        return <div>Recipe not found</div>;
    }

    return (
        <>
            {recipeDetail ? (
                <div>
                    <Box pt={3} pb={5}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" pb={3}>
                            <Box flex={1} display="flex" justifyContent="center">
                                <Typography pl={15} fontWeight="bold" variant="h4">
                                    {recipeDetail.title}
                                </Typography>
                            </Box>
                            <Box>
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick}
                                    endIcon={<ArrowDropDownIcon />}
                                >
                                    Action
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl} // メニューのアンカー要素を設定
                                    keepMounted
                                    open={Boolean(anchorEl)} // anchorElがnullでない場合、メニューを表示
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                </Menu>
                                
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <ReactPlayer
                                url={recipeDetail.videoUrl}
                                controls={true}
                                width="100%"
                                height="500px"
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography pb={0.5} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                            {`材料（${recipeDetail.servings}人前）`}
                        </Typography>
                        <DividerWithColor colorLeft="rgba(255, 99, 71, 1)" colorRight="rgba(0, 0, 0, 0.1)" thickness="2px" marginY={0} textWidth="20%" />
                        <Box sx={{ marginTop: 4 }}>
                            {recipeDetail.ingredients.map((ingredient, index) => (
                                <Box key={index}>
                                    <Grid container sx={{ marginBottom: 2 }}>
                                        <Grid item xs={6} style={{ textAlign: 'left' }}>
                                            <Typography variant="body1" sx={{ fontSize: '18px' }}>{ingredient.name}</Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                                            <Typography variant="body1" sx={{ fontSize: '18px' }}>{ingredient.amount}</Typography>
                                        </Grid>
                                    </Grid>
                                    {/* 項目の下に線を挿入 */ }
                                    <Divider color="rgba(0, 0, 0, 0.1)" thickness="1px" marginY={2} />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box mt={7}>
                        <Typography pb={0.5} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                            作り方
                        </Typography>
                        <DividerWithColor colorLeft="rgba(255, 99, 71, 1)" colorRight="rgba(0, 0, 0, 0.1)" thickness="2px" marginY={0} textWidth="20%" />
                        <Box mt={4} >
                            {recipeDetail.steps.map((step, index) => (
                                <Box key={index}>
                                    <Grid container sx={{ marginBottom: 2 }}>
                                        <Grid item xs={step.stepNumber === 0 ? 0.6 : 0.4} style={{ textAlign: 'left' }}>
                                            <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                                {step.stepNumber === 0 ? '準備' : step.stepNumber}.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={step.stepNumber === 0 ? 11.4 : 11.6} style={{ textAlign: 'left' }}>
                                            <Typography variant="body1" sx={{ fontSize: '18px' }}>
                                                {step.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    {/* 項目の下に線を挿入 */}
                                    <Divider color="rgba(0, 0, 0, 0.1)" thickness="1px" marginY={2} />
                                </Box>
                            ))} 
                        </Box>
                    </Box>
                    <Box mt={6}>
                        <Typography pb={0.5} fontWeight="bold" variant="h5" sx={{ textAlign: 'left' }}>
                            コツ・ポイント
                        </Typography>
                        <DividerWithColor colorLeft="rgba(255, 99, 71, 1)" colorRight="rgba(0, 0, 0, 0.1)" thickness="2px" marginY={0} textWidth="20%" />
                        <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'left', whiteSpace: 'pre-line' }} pt={4}>
                            {recipeDetail.point}
                        </Typography>
                    </Box>
                    <ScrollToTopButton />

                    {/* レシピ編集用ダイアログ */}
                    <RecipeEditDialog openDialog={openEditDialog} setOpenDialog={setOpenEditDialog} recipeDetail={recipeDetail} />

                    {/* 削除確認ダイアログ */}
                    <RecipeDeleteDialog openDialog={openDeleteDialog} setOpenDialog={setOpenDeleteDialog} recipeId={recipeDetail.id} />

                </div>
            ) : (
                <div>No recipe data found.</div>
            )}
            
        </>
    );
}