import React from "react";
import VegetableHeaderImage from "../../images/VegetableHeaderImage.jpg";
import { RecipeListPage } from "./RecipeListPage";

export const Vegetable: React.FC = () => {
    
    return (
        <>
            <RecipeListPage
                category="vegetable"
                backgroundImage={VegetableHeaderImage}
                title="Vegetable Recipes"
                description="This page contains a list of recipes for cooking with vegetable."
            />
        </>
    )
}