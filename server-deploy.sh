#!/bin/bash

# 服务器端部署脚本
# GitHub Actions 已完成构建，此脚本仅负责重启应用

APP_NAME="baitengfei"

echo "🚀 开始重启应用..."

# 重启应用 (尝试多种 pm2 路径)
if command -v pm2 &> /dev/null; then
    pm2 restart $APP_NAME || pm2 start npm --name "$APP_NAME" -- start
elif [ -f ~/.npm-global/bin/pm2 ]; then
    ~/.npm-global/bin/pm2 restart $APP_NAME || ~/.npm-global/bin/pm2 start npm --name "$APP_NAME" -- start
else
    npx pm2 restart $APP_NAME || npx pm2 start npm --name "$APP_NAME" -- start
fi

echo "✅ 重启完成！"

# 显示应用状态
if command -v pm2 &> /dev/null; then
    pm2 status $APP_NAME
elif [ -f ~/.npm-global/bin/pm2 ]; then
    ~/.npm-global/bin/pm2 status $APP_NAME
else
    npx pm2 status $APP_NAME
fi
