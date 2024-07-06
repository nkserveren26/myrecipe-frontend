import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeCategoryButtonProps } from '../interface/interface';

// レシピカテゴリボタンのコンポーネント
export const RecipeCategoryButton: React.FC<RecipeCategoryButtonProps> = ({
    buttonLabelName,
    buttonBackgroundImage,
    destinationUrlPath,
    backgroundColorR = 0,
    backgroundColorG = 0,
    backgroundColorB = 0,
    backgroundOpacity = 0.25
}) => {
    
    const navigate = useNavigate();

    // ルーティングを行う関数
    const handleButtonClick = () => {
        navigate(destinationUrlPath); // 遷移先のURLを指定
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
                    src={buttonBackgroundImage}
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
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: `rgba(${backgroundColorR}, ${backgroundColorG}, ${backgroundColorB}, ${backgroundOpacity})`, // propsで渡された色と透明度を使用
                        zIndex: 2,
                    }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        color: 'white', // 必要に応じてテキストカラーを変更
                        fontWeight: 'bold',
                        fontSize: '30px',
                    }}
                >
                    {buttonLabelName}
                </Typography>
            </Button>
        </>
    );
}