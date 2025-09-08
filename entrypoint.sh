#!/bin/sh
set -e

# 環境変数を JS に出力
cat <<EOF > /usr/share/nginx/html/config.js
window._env_ = {
  API_BASE_URL: "$API_BASE_URL",
  API_GET_RECIPES_URL: "$API_GET_RECIPES_URL"
}
EOF

# nginx 起動
exec "$@"