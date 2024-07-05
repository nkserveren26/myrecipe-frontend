import { Box, Button, Typography } from '@mui/material';
import HomeHeaderImage from "../../HomeHeaderImage.jpg";
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RecipeCategoryButton: React.FC = () => {
    
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/"); // 遷移先のURLを指定
    };
    return (
        <>
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
        </>
    );
}