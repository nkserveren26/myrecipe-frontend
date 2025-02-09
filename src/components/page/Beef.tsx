import React, { useEffect, useState } from "react";
import BeefHeaderImage from "../../images/BeefHeaderImage.jpg";
import { RecipeCardProps } from "../interface/interface";
import { getRecipeList } from "../function/GetRecipeList";
import { RecipeListPage } from "./RecipeListPage";

export const Beef: React.FC = () => {
    
    return (
        <>
            <RecipeListPage
                category="beef"
                backgroundImage={BeefHeaderImage}
                title="Beef Recipes"
                description="This page contains a list of recipes for cooking with beef."
            />
        </>
    )
}