import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from "styled-components";
import React from 'react';
import { RecipeCardProps } from '../interface/interface';

export const RecipeCard: React.FC<RecipeCardProps> = ({
    recipeImage,
    title,
    registerdDate
}) => {
    return (
        <>
            <StyledCard style={{ cursor: 'pointer' }} sx={{ width: 345, height: 310 }}>
              <CardMedia
                sx={{ height: 160 }}
                image={`${process.env.PUBLIC_URL}/${recipeImage}`}
              />
              <CardContent>
                <Box height={95}>
                  <Typography fontWeight="bold" variant="h6" >
                      {title}
                  </Typography>
                </Box>
                <Typography >
                  {registerdDate}
                </Typography>
              </CardContent>
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