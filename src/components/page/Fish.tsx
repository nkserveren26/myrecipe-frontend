import React from "react";
import { HeroHeader } from "../header/HeroHeader";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";
import { Box, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";

export const Fish: React.FC = () => {
    return (
        <>
            <HeroHeader 
                backgroundImage={FishHeaderImage}
                title="Fish Recipes" 
                description="This page contains a list of recipes for cooking with fish."
                descriptionFontSize={26}
            />
            <Box>
                <Typography paddingBottom={3} fontWeight="bold" variant="h4">Recipe List</Typography>
                <AddRecipeButton />
            </Box>
        </>
    )
}