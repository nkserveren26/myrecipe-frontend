import { RecipeCategoryButtonProps } from "../interface/interface";
import BeefImage from "../../images/Beef.jpg";
import FishImage from "../../images/Fish.jpg";
import VegetableImage from "../../images/Vegetable.jpg";
import SoupImage from "../../images/Soup.jpg";

export const RecipeCategoryButtonPropsList: RecipeCategoryButtonProps[] = [
    {
        buttonLabelName: "お肉",
        buttonBackgroundImage: BeefImage,
        destinationUrlPath: "/",
    },
    {
        buttonLabelName: "お魚",
        buttonBackgroundImage: FishImage,
        destinationUrlPath: "/",
    },
    {
        buttonLabelName: "お野菜",
        buttonBackgroundImage: VegetableImage,
        destinationUrlPath: "/",
    },
    {
        buttonLabelName: "スープ",
        buttonBackgroundImage: SoupImage,
        destinationUrlPath: "/",
    },
];