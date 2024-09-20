import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
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
    const theme = useTheme();

    const navigate = useNavigate();

    const handleCardClick = (id: number) => {
        // レシピIDに基づいて/recipes/:idページへ遷移
        navigate(`/recipes/${id}`);
    };
    
    const onEdit = () => {
        console.log("Editting Recipe");
    }

    const onDelete = () => {
        console.log("Deleting Recipe");
    }

    const formatDate: string = createdAt.slice(0, 10);

    return (
        <>
        <StyledCard onClick={() => handleCardClick(id)}  style={{ cursor: 'pointer' }} sx={{ width: 300, height: 310 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={`${process.env.PUBLIC_URL}/${image}`}
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
                <IconButton onClick={onEdit} aria-label="edit" sx={{ color: theme.palette.primary.main, fontSize: 30, pr: 0 }}>
                  <EditNoteIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={onDelete} aria-label="delete" sx={{ color: 'red', fontSize: 30, pl: 0 }}>
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