import React from "react";
import { HeroHeader } from "../header/HeroHeader";
import FishHeaderImage from "../../images/FishHeaderImage.jpg";

export const Fish: React.FC = () => {
    return (
        <>
            <HeroHeader 
                backgroundImage={FishHeaderImage}
                title="Fish Recipes" 
                description="This page contains a list of recipes for cooking with fish."
                descriptionFontSize={26}
            />
        </>
    )
}