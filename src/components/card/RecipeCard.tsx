import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components";
import React from 'react';
import { RecipeCardProps } from '../interface/interface';

export const RecipeCard: React.FC<RecipeCardProps> = ({
    recipeImage,
    title,
    registerdDate
}) => {
    const onEdit = () => {
        console.log("Editting Recipe");
    }

    const onDelete = () => {
        console.log("Deleting Recipe");
    }

    return (
        <>
            <StyledCard style={{ cursor: 'pointer' }} sx={{ width: 300, height: 340 }}>
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
              <CardActions
                sx={{
                      justifyContent: 'flex-start',
                      padding: 0,
                }}
              >
                <IconButton onClick={onEdit} aria-label="edit" sx={{ color: 'blue' }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={onDelete} aria-label="delete" sx={{ color: 'red' }}>
                  <DeleteIcon />
                </IconButton>
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