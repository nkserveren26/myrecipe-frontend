// RecipeCategoryButtonのpropsの型
export interface RecipeCategoryButtonProps {
    buttonLabelName: string,
    buttonBackgroundImage: string,
    destinationUrlPath: string,
    backgroundColorR?: number;  
    backgroundColorG?: number;
    backgroundColorB?: number;
    backgroundOpacity?: number, // ボタン背景画像の背景色の透過度。0~1を設定
}

// RecipeCategoryButtonのpropsの型
export interface HeroHeaderProps {
    backgroundImage: string,
    title: string,
    description: string,
    descriptionFontSize?: number,
}