import { Box, Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeHeaderImage from "../../HomeHeaderImage.jpg";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { RecipeCategoryButton } from '../buttons/RecipeCategoryButton';

export const Top: React.FC = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/"); // 遷移先のURLを指定
    };

    return (
        <>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '600px',
                overflow: 'hidden',
                marginTop: '2%',
                marginBottom: '4%',
                borderRadius: '8px',
              }}
            >
              <Box
                component="img"
                src={HomeHeaderImage}
                alt="説明画像"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  zIndex: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  My Recipe
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '24px' }}>
                  This app is my favorite recipe list.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe Category</Typography>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Add Recipe
                </Button>
                <Grid columns={{ xs: 6, sm: 8, md: 12 }} pt={4} container columnSpacing={6} alignItems="center" justifyContent="center">
                  <Grid item xs={6} sm="auto" md="auto" pb={6}>
                        <Button
                            onClick={handleButtonClick}
                            sx={{
                                position: 'relative',
                                width: '400px',
                                height: '150px',
                                padding: 0,
                                borderRadius: '8px', // 長方形の角を丸くする場合
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textTransform: 'none', // ボタンラベルのテキスト変換を無効にする
                                '&:hover .backgroundImage': {
                                    transform: 'scale(1.1)', // 背景画像を少し拡大
                                    transition: 'transform 0.5s ease', // アニメーションの遷移を設定
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={HomeHeaderImage}
                                className="backgroundImage"
                                sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    zIndex: 1,
                                    transition: 'transform 0.5s ease',
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    position: 'relative',
                                    zIndex: 2,
                                    color: 'white', // 必要に応じてテキストカラーを変更
                                    fontWeight: 'bold',
                                    fontSize: '30px',
                                }}
                            >
                                お肉
                            </Typography>
                        </Button>
                        <RecipeCategoryButton buttonLabelName="お肉" buttonBackgroundImage={HomeHeaderImage} destinationUrlPath="/" />
                  </Grid>
                </Grid>
            </Box>
        </>
    )
}