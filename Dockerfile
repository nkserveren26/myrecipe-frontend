# 1. ビルド用ステージ
FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# 2. 配信用ステージ
FROM nginx:1.25-alpine

# デフォルトの設定ファイルを削除
RUN rm /etc/nginx/conf.d/default.conf

# カスタム設定をコピー
COPY nginx.conf /etc/nginx/conf.d

# ビルド成果物を配置
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
