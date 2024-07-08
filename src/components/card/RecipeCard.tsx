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
            <StyledCard style={{ cursor: 'pointer' }} sx={{ width: 300, height: 280 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={recipeImage}
              />
              <CardContent
                sx={{
                    textAlign: 'left',
                }}
              >
                <Box height={40}>
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