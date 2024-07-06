import { RecipeCategoryButtonProps } from "../interface/interface";
import BeefImage from "../../images/Beef.jpg";
import FishImage from "../../images/Fish.jpg";

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
];