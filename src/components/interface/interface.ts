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

// AddButtonのpropsの型
export interface AddButtonProps {
    onClick: () => void;
    label?: string;
    sx?: object;
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
    id: number,
    title: string,
    image: string,
    createdAt: string,
}

// RequiredLabelのpropsの型
export interface RequiredLabelProps {
    text?: string,
    fontSize?: string | number;
}

// 取得するレシピ情報の型
export interface RecipeDetail {
    id: number,
    title: string,
    servings: number,
    videoUrl: string,
    ingredients: Ingredient[],
    steps: Step[],
    point: string,
}

// 登録するレシピ情報の型
export interface SaveRecipeData {
    id: number,
    title: string,
    servings: number,
    category: string,
    videoUrl: string,
    ingredients: Ingredient[],
    steps: Step[],
    point: string,
}

// 材料オブジェクトの型
export interface Ingredient {
    name: string;
    amount: string;
}

// 作り方オブジェクトの型
export interface Step {
    stepNumber: number;
    description: string;
}

export interface Categories {
    [key: string]: string;
}

// ErrorMessageのPropsの型
export interface ErrorMessageProps {
    message: string;
}

// AddRecipeButtonのPropsの型
export interface AddRecipeButtonProps {
    currentCategory: string;
}

// 各入力項目のvalidateエラーメッセージを格納するオブジェクトの型
export interface FormErrors {
    title: string;
    category: string;
    videoUrl: string;
    ingredients: string;
    steps: string;
}

// RecipeEditFormのProps
export interface RecipeEditFormProps {
    recipeDetail: RecipeDetail;
    onSave: (updatedRecipe: SaveRecipeData, thumbnail: File|null ) => void;
    dialogContentRef: React.RefObject<HTMLDivElement>;
}

// RecipeEditDialogのProps
export interface RecipeEditDialogProps {
    openDialog: boolean;
    setOpenDialog: (openDialog: boolean) => void;
    recipeDetail: RecipeDetail; // RecipeDetailをpropsとして渡す
}

// RecipeDeleteDialogのProps
export interface RecipeDeleteDialogProps {
    openDialog: boolean;
    setOpenDialog: (openDialog: boolean) => void;
    recipeId: number;
}

// DividerのProps
export interface DividerProps {
    color?: string;
    thickness?: string;
    marginY?: number;
}