// RecipeCategoryButtonのpropsの型
export interface RecipeCategoryButtonProps {
    buttonLabelName: string,
    buttonBackgroundImage: string,
    destinationUrlPath: string,
    backgroundColorR?: number,  
    backgroundColorG?: number,
    backgroundColorB?: number,
    backgroundOpacity?: number, // ボタン背景画像の背景色の透過度。0~1を設定
}

// DeleteButtonのpropsの型
export interface DeleteButtonProps {
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
}

// HeroHeaderのpropsの型
export interface HeroHeaderProps {
    backgroundImage: string,
    title: string,
    description: string,
    descriptionFontSize?: number,
    backgroundColorR?: number,
    backgroundColorG?: number,
    backgroundColorB?: number,
    backgroundOpacity?: number, // 背景画像の背景色の透過度。0~1を設定
}

// RecipeCardのpropsの型
export interface RecipeCardProps {
    title: string,
    recipeImage: string,
    registerdDate: string,
}

// RequiredLabelのpropsの型
export interface RequiredLabelProps {
    text?: string,
    fontSize?: string | number;
}

// レシピ情報の中の材料情報の型
export interface RecipeIngredient {
    name: string,
    amount: string,
}

// レシピ情報の中の作り方情報の型
interface RecipeStep {
    number: string;
    description: string;
}

// 取得するレシピ情報の型
export interface Recipe {
    id: number,
    name: string,
    videoUrl: string,
    ingredients: RecipeIngredient[],
    steps: RecipeStep[],
    point: string,
}

// 材料オブジェクトの型
export interface Ingredient {
    name: string;
    amount: string;
}

// 作り方オブジェクトの型
export interface Step {
    task: string;
    description: string;
}