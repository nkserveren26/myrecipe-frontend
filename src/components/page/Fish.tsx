import React, { useEffect, useState } from "react";
import { HeroHeader } from "../header/HeroHeader";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddRecipeButton } from "../button/AddRecipeButton";
import { RecipeCardProps } from "../interface/interface";
import { RecipeCard } from "../card/RecipeCard";
import { ScrollToTopButton } from "../button/ScrollToTopButton";
import { getRecipeList } from "../function/GetRecipeList";
import { useNavigate } from "react-router-dom";
import { RecipeListPage } from "./RecipeListPage";

export const Fish: React.FC = () => {
    
    return (
        <>
            <RecipeListPage
              category="fish"
              backgroundImage={FishHeaderImage}
              title="Fish Recipes"
              description="This page contains a list of recipes for cooking with fish."
            />
        </>
    )
}