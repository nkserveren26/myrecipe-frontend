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
        destinationUrlPath: "/soup",
    },
];

export const stepOptions = [
    { label: "準備", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
    { label: "12", value: 12 },
    { label: "13", value: 13 },
    { label: "14", value: 14 },
    { label: "15", value: 15 },
    { label: "16", value: 16 },
    { label: "17", value: 17 },
    { label: "18", value: 18 },
    { label: "19", value: 19 },
    { label: "20", value: 20 }
];