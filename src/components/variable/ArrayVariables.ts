import { RecipeCategoryButtonProps } from "../interface/interface";
import BeefImage from "../../images/Beef.jpg";
import FishImage from "../../images/Fish.jpg";
import VegetableImage from "../../images/Vegetable.jpg";
import SoupImage from "../../images/Soup.jpg";

export const RecipeCategoryButtonPropsList: RecipeCategoryButtonProps[] = [
    {
        buttonLabelName: "お肉",
        buttonBackgroundImage: BeefImage,
        destinationUrlPath: "/beef",
    },
    {
        buttonLabelName: "お魚",
        buttonBackgroundImage: FishImage,
        destinationUrlPath: "/fish",
    },
    {
        buttonLabelName: "お野菜",
        buttonBackgroundImage: VegetableImage,
        destinationUrlPath: "/vegetable",
    },
    {
        buttonLabelName: "スープ",
        buttonBackgroundImage: SoupImage,
        destinationUrlPath: "/",
    },
];