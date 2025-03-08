# 画面仕様

このドキュメントでは、本アプリの各画面の仕様を説明します。

## 📌 目次
- [画面仕様](#画面仕様)
  - [📌 目次](#-目次)
  - [共通要素](#共通要素)
  - [1. トップページ](#1-トップページ)
  - [2. レシピ一覧ページ](#2-レシピ一覧ページ)
  - [3. レシピ詳細ページ](#3-レシピ詳細ページ)
  - [4. レシピ追加ページ](#4-レシピ追加ページ)
  - [5. レシピ編集ページ](#5-レシピ編集ページ)
  - [6. レシピ削除ページ](#6-レシピ削除ページ)

<br >

## 共通要素
アプリの各ページで共通して使用される要素を説明します。

### ヘッダー
![ヘッダー](images/header.png)
- 画面上部に固定表示される共通ヘッダー
- タイトルをクリックするとトップページに遷移

### 画面上部へスクロールするボタン
![スクロールボタン](images/scroll_to_top_button.png)
- 画面下部に表示され、押下するとページの先頭へスクロールします。

[🔼 目次へ戻る](#📌-目次)

## 1. トップページ
このページでは、レシピ管理アプリのトップ画面を表示します。  
ユーザーはカテゴリを選択してレシピ一覧に移動できます。
### 画面全体図
![トップページ](images/top-page.png)

### 構成要素
- **カテゴリ一覧**
![カテゴリーボタン](images/category_button.png)
  - 各カテゴリのボタンをクリックすると、対応するレシピ一覧ページに遷移
    -  "お肉" ボタン → `Beef Recipes` 画面へ
    -  "お魚" ボタン → `Fish Recipes` 画面へ
    -  "お野菜 ボタン → `Vegetable Recipes` 画面へ
    -  "スープ" ボタン → `Soup Recipes` 画面へ
  

[🔼 目次へ戻る](#📌-目次)

## 2. レシピ一覧ページ
各カテゴリ（魚、肉、野菜、スープ）のレシピを一覧表示するページです。  

### 画面全体図
#### お魚レシピ一覧  
![魚レシピ一覧](images/recipe-list-fish.png) 

#### お肉レシピ一覧
![肉レシピ一覧](images/recipe-list-beef.png)

#### 野菜レシピ一覧  
![野菜レシピ一覧](images/recipe-list-vegetable.png)  

#### スープレシピ一覧  
![スープレシピ一覧](images/recipe-list-soup.png)

### カテゴリ別の違い
画面の構成は同じですが、表示されるレシピがカテゴリごとに異なります。
- **魚カテゴリ**: 魚料理のレシピが一覧表示されます。
- **肉カテゴリ**: 肉料理のレシピが一覧表示されます。
- **野菜カテゴリ**: 野菜を使った料理のレシピが一覧表示されます。
- **スープカテゴリ**: スープ料理のレシピが一覧表示されます。

### 構成要素
- **レシピ一覧**  
  ![レシピカード](images/recipe-card.png)  
  - 各レシピがカード形式で表示される  
  - カードをクリックすると、レシピ詳細ページへ遷移
- **レシピ追加ボタン**
  ![レシピ追加ボタン](images/add_recipe_button.png)
  - ボタンをクリックすると、レシピ追加ページへ遷移
  - 新しいレシピを登録する際に使用

## 3. レシピ詳細ページ
このページでは、選択したレシピの詳細情報を表示します。  
編集や削除の操作が可能です。  
### 画面全体図
![レシピ詳細ページ](images/recipe-detail.png)

### 構成要素
- **レシピタイトル**
  ![レシピタイトル](images/recipe-title.png)
  - レシピ名を表示
- **レシピ動画**
  ![レシピ動画](images/recipe-movie.png)
  - レシピ動画を表示
- **材料リスト**
  ![材料リスト](images/ingredients-list.png)
  - 各材料とその分量を表示
- **作り方**
  ![作り方](images/steps.png)
  - ステップごとに作り方を表示
- **コツ・ポイント**
  ![作り方](images/recipe-point.png)
  - レシピのコツ・ポイントを表示
- **アクションボタン**
  ![アクションボタン](images/action-button.png)
  - クリックすると `Edit` と `Delete` の選択肢が表示されます。
  - `Edit` をクリックすると **編集ダイアログ** が表示されます。
  - `Delete` をクリックすると **削除ダイアログ** が表示されます。

[🔼 目次へ戻る](#📌-目次)


## 4. レシピ追加ページ
このページでは、新しいレシピを登録できます。  
ユーザーは、レシピ名、カテゴリ、材料、作り方、レシピ動画URL、画像などを入力し、レシピを保存できます。

### 画面全体図
![レシピ追加ページ](images/recipe-new.png)
### 構成要素
- **レシピタイトル** 
  ![レシピタイトル](images/add-page-recipe-title.png) 
  料理の名前を入力するテキストフィールド。
  - 必須項目
  - 例: 鮭のムニエル

- **何人前**  
  ![何人前](images/add-page-recipe-servings.png)
  料理の分量を選択するセレクトボックス。
  - 必須項目
  - 例: 1人前、2人前など

- **カテゴリ**  
  ![カテゴリ](images/add-page-recipe-category.png)
  料理の種類を選択するセレクトボックス。
  - 必須項目
  - 例: 和食、洋食、中華など

- **レシピ動画URL**  
  ![レシピ動画URL](images/add-page-recipe-movie-url.png)
  レシピのYouTube動画のURLを入力するテキストフィールド。
  - 必須項目
  - 例: https://www.youtube.com/watch?v=example

- **レシピのサムネイル画像**  
  ![レシピサムネイル画像](images/add-page-recipe-thumbnail.png)
  料理の画像をアップロードするファイル入力欄。
  - 任意項目

- **材料**  
  ![材料](images/add-page-recipe-ingredients.png)
  料理に必要な材料を入力するリスト形式の入力欄。
  - 必須項目
  - 各材料に対し「材料名」と「量」を入力可能
  - 追加・削除が可能
    - 材料を追加する際は「ADD」ボタンを押下
    - 入力した材料を削除する際は「量」横のゴミ箱ボタンを押下

- **作り方**  
  ![作り方](images/add-page-recipe-steps.png)
  調理手順を入力するリスト形式の入力欄。
  - 必須項目
  - 各手順に対し「項番」と「説明」を入力可能
  - 項番には「1番からの番号」および「準備」の2種類が存在し、手順の流れを明確にできます。
  ![項番](images/add-page-recipe-steps-number.png)
  - 追加・削除が可能
    - 手順を追加する際は「ADD」ボタンを押下
    ![ADDボタン](images/add-page-recipe-steps-add-button.png)
    - 入力した手順を削除する際は「説明」テキストボックス横のゴミ箱ボタンを押下
    ![ゴミ箱ボタン](images/add-page-recipe-steps-trash-can-button.png)

- **料理のコツ・ポイント**  
  ![コツ・ポイント](images/add-page-recipe-steps-point.png)
  料理を作る際の注意点やコツを入力するテキストフィールド。
  - 任意項目

- **SUBMITボタン**  
  ![SUBMITボタン](images/add-page-recipe-submit-button.png)
  入力内容を送信するボタン。  
  このボタンを押下することでレシピの登録が実行されます。  
  登録処理が完了すると、完了ダイアログ画面が表示されます。

- **CANCELボタン**  
  ![CANCELボタン](images/add-page-recipe-cancel-button.png)
  入力内容を破棄して元の画面に戻るボタン。

### 入力バリデーション
- 必須項目が未入力の場合、エラーメッセージを表示。
  ![入力エラーメッセージ](images/add-page-recipe-validate-error.png)
  - **料理名**: 「タイトルは必須です。」
  ![料理名未入力メッセージ](images/add-page-recipe-error-title-required.png)
  - **カテゴリ**: 「カテゴリを選択してください。」
  ![カテゴリ未選択メッセージ](images/add-page-recipe-error-category-required.png)
  - **レシピ動画URL**: 「レシピ動画URLは必須です。」
  ![レシピ動画URL未入力メッセージ](images/add-page-recipe-error-video-url-required.png)
  - **材料**: 「少なくとも1つの材料を入力してください。」
  ![材料未入力メッセージ](images/add-page-recipe-error-ingredients-required.png)
  - **作り方**: 「作り方は1つ以上入力してください。」
  ![作り方未入力メッセージ](images/add-page-recipe-error-steps-required.png)

### 完了ダイアログ
![完了ダイアログ](images/add-page-recipe-complete-dialog.png)
登録処理が成功した際に、完了メッセージを表示するダイアログを表示。

[🔼 目次へ戻る](#📌-目次)

## 5. レシピ編集ページ
このページでは、レシピを編集できます。  
ユーザーは、レシピ名、カテゴリ、材料、作り方、レシピ動画URL、画像などを入力し、レシピを保存できます。

### 画面全体図
![レシピ編集ダイアログ](images/edit-dialog.gif)

### 構成要素
- **レシピタイトル** 
  ![レシピタイトル](images/edit-page-recipe-title.png) 
  料理の名前を入力するテキストフィールド。
  - 必須項目
  - 例: 鮭のムニエル

- **何人前**  
  ![何人前](images/edit-page-recipe-servings.png)
  料理の分量を選択するセレクトボックス。
  - 必須項目
  - 例: 1人前、2人前など

- **カテゴリ**  
  ![カテゴリ](images/edit-page-recipe-category.png)
  料理の種類を選択するセレクトボックス。
  - 必須項目
  - 例: 和食、洋食、中華など

- **レシピ動画URL**  
  ![レシピ動画URL](images/edit-page-recipe-movie-url.png)
  レシピのYouTube動画のURLを入力するテキストフィールド。
  - 必須項目
  - 例: https://www.youtube.com/watch?v=example

- **レシピのサムネイル画像**  
  ![レシピサムネイル画像](images/edit-page-recipe-thumbnail.png)
  料理の画像をアップロードするファイル入力欄。
  - 任意項目

- **材料**  
  ![材料](images/edit-page-recipe-ingredients.png)
  料理に必要な材料を入力するリスト形式の入力欄。
  - 必須項目
  - 各材料に対し「材料名」と「量」を入力可能
  - 追加・削除が可能
    - 材料を追加する際は「ADD」ボタンを押下
    - 入力した材料を削除する際は「量」横のゴミ箱ボタンを押下

- **作り方**  
  ![作り方](images/edit-page-recipe-steps.png)
  調理手順を入力するリスト形式の入力欄。
  - 必須項目
  - 各手順に対し「項番」と「説明」を入力可能
  - 項番には「1番からの番号」および「準備」の2種類が存在し、手順の流れを明確にできます。
  ![項番](images/add-page-recipe-steps-number.png)
  - 追加・削除が可能
    - 手順を追加する際は「ADD」ボタンを押下
    ![ADDボタン](images/add-page-recipe-steps-add-button.png)
    - 入力した手順を削除する際は「説明」テキストボックス横のゴミ箱ボタンを押下
    ![ゴミ箱ボタン](images/add-page-recipe-steps-trash-can-button.png)

- **料理のコツ・ポイント**  
  ![コツ・ポイント](images/edit-page-recipe-steps-point.png)
  料理を作る際の注意点やコツを入力するテキストフィールド。
  - 任意項目

- **SUBMITボタン**  
  ![SUBMITボタン](images/edit-page-recipe-submit-button.png)
  入力内容を送信するボタン。  
  このボタンを押下することでレシピの登録が実行されます。  
  登録処理が完了すると、完了ダイアログ画面が表示されます。

- **CANCELボタン**  
  ![CANCELボタン](images/edit-page-recipe-cancel-button.png)
  入力内容を破棄して元の画面に戻るボタン。


### 完了ダイアログ
![完了ダイアログ](images/edit-page-recipe-complete-dialog.png)
登録処理が成功した際に、完了メッセージを表示するダイアログを表示。  
CLOSEボタンを押すと、更新したレシピの画面に戻ります。  


  [🔼 目次へ戻る](#📌-目次)


## 6. レシピ削除ページ
レシピ詳細ページのDeleteボタンを押すと表示されるダイアログ画面で、レシピを削除できます。  

### 画面全体図
![レシピ削除ダイアログ](images/delete-dialog.gif)

### 構成要素
- **確認メッセージ**  
  ![確認メッセージ](images/delete-page-recipe-confirm-message.png)  
  「本当に削除しますか？」という確認テキストを表示。  
- **CANCELボタン**
  ![CANCELボタン](images/delete-page-recipe-cancel-button.png)  
  削除をキャンセルし、元の画面に戻るボタン。  
- **DELETEボタン**
  ![DELETEボタン](images/delete-page-recipe-delete-button.png)  
  レシピを削除するボタン。  
  このボタンを押すと、レシピの削除が実行されます。  
  削除処理が完了すると、完了ダイアログが表示されます。  

### 完了ダイアログ
![完了ダイアログ](images/delete-page-recipe-complete-dialog.gif)
削除処理が成功した際に、完了メッセージを表示するダイアログを表示。  
CLOSEボタンを押すと、トップページの画面に戻ります。

  [🔼 目次へ戻る](#📌-目次)