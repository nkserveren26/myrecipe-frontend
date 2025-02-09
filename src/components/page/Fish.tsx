import React, { useEffect, useState } from "react";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";
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