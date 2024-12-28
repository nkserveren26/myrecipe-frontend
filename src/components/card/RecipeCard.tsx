import { Box, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import styled from "styled-components";
import React from 'react';
import { RecipeCardProps } from '../interface/interface';
import { useNavigate } from 'react-router-dom';

export const RecipeCard: React.FC<RecipeCardProps> = ({
    id,
    image,
    title,
    createdAt
}) => {
    
    const navigate = useNavigate();

    const handleCardClick = (id: number) => {
        // レシピIDに基づいて/recipes/:idページへ遷移
        navigate(`/recipes/${id}`);
    };

    const formatDate: string = createdAt.slice(0, 10);

    return (
        <>
        <StyledCard onClick={() => handleCardClick(id)}  style={{ cursor: 'pointer' }} sx={{ width: 300, height: 280 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={image}
              />
              <CardContent
                sx={{
                    textAlign: 'left',
                    pt: 1,
                    pl: 1,
                    pb: 0
                }}
              >
                <Box height={50} >
                  <Typography fontWeight="bold" variant="h6" sx={{fontSize: 16}}>
                      {title}
                  </Typography>
                </Box>
                <Typography >
                  {formatDate}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                      justifyContent: 'flex-start',
                      padding: 0,
                }}
              >
              </CardActions>
            </StyledCard>
        </>
    )
}

// Cardのレイアウト
const StyledCard = styled(Card)`
// マウスをホバーするとCardを少し膨らませるアニメーション
  && {
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.04, 1.04);
    }
  }
`;