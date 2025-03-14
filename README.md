# 料理レシピ管理アプリ - フロントエンド

## プロジェクト概要 (Introduction)
このリポジトリは、レシピ管理アプリのフロントエンド部分のソースコードを管理しています。  
レシピの閲覧、検索、管理を直感的に行えるユーザーインターフェースを提供します。  
バックエンドAPIの仕様や詳細は、以下のリポジトリに記載しています。  

<br>

## 技術スタック (Tech Stack)
- **フレームワーク:** React
- **言語:** TypeScript
- **UIライブラリ:** MUI (Material-UI)
- **状態管理:** React Hooks (useState, useEffect)
- **通信:** Axios

<br>


## 機能一覧

- **トップページ**
  - レシピのカテゴリ一覧を表示
  - 各カテゴリのボタンを押すと、対応するレシピ一覧ページへ遷移
- **レシピ一覧ページ**
  - 選択したカテゴリごとのレシピ一覧を表示
  - レシピをクリックすると、詳細ページへ遷移
- **レシピ詳細ページ**
  - 選択したレシピの詳細情報を表示
  - 材料や手順、追加の調理ヒントを掲載
- **レシピの新規登録・編集・削除**
  - 新しいレシピの追加
  - 既存のレシピの編集・削除をサポート
- **エラーハンドリング**
  - APIリクエストが失敗した場合に適切なエラーメッセージを表示

<br>

## 画面仕様について
本アプリの各画面の詳細仕様については、以下のドキュメントに記載しています。

➡ **[画面仕様ドキュメント](./docs/screens.md)**

各ページの構成要素や入力バリデーション、エラーメッセージなどについて詳しく説明しています。

<br>


## インストールとセットアップ

1. リポジトリをクローン:
   ```sh
   git clone https://github.com/nkserveren26/myrecipe-frontend
   ```
2. プロジェクトディレクトリへ移動:
   ```sh
   cd myrecipe-frontend
   ```
3. 依存関係をインストール:
   ```sh
   npm install
   ```
4. 環境変数を設定:
   - ルートディレクトリに `.env` ファイルを作成
   - 以下の設定を追加:
     ```sh
     REACT_APP_RECIPE_API_BASE_URL=<バックエンドAPIのURL>
     REACT_APP_GET_RECIPES_URL=<カテゴリ別レシピ一覧取得APIのURL>
     ```
5. 開発サーバーを起動:
   ```sh
   npm start
   ```