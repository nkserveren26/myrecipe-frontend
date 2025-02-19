import React from "react";
import SoupHeaderImage from "../../images/SoupHeaderImage.jpg";
import { RecipeListPage } from "./RecipeListPage";

export const Soup: React.FC = () => {
    
    return (
        <>
            <RecipeListPage
                category="soup"
                backgroundImage={SoupHeaderImage}
                title="Soup Recipes"
                description="This page lists recipes for soups."
            />
        </>
    )
}