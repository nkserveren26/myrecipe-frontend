export interface RecipeCategoryButtonProps {
    buttonLabelName: string,
    buttonBackgroundImage: string,
    destinationUrlPath: string,
    backgroundColorR?: number;  
    backgroundColorG?: number;
    backgroundColorB?: number;
    backgroundOpacity?: number, // ボタン背景画像の背景色の透過度。0~1を設定
}