#!/bin/bash

# 服务器端智能部署脚本
# 使用方法: ./server-deploy.sh

PROJECT_DIR="/home/ecs-user/baitengfei"
APP_NAME="baitengfei"

echo "🚀 开始服务器端部署..."

cd $PROJECT_DIR

# 拉取最新代码
echo "📥 拉取最新代码..."
git reset --hard origin/main
git pull origin main

# 检查是否有相关变更
CHANGED_FILES=$(git diff HEAD~1 --name-only 2>/dev/null || echo "")

if [ -z "$CHANGED_FILES" ]; then
    echo "ℹ️ 没有检测到变更，跳过部署"
    exit 0
fi

# 检查是否需要构建
NEED_BUILD=false

if echo "$CHANGED_FILES" | grep -qE "^(posts/|app/|components/|lib/|package\.json|next\.config\.mjs|tailwind\.config\.js|tsconfig\.json)"; then
    NEED_BUILD=true
fi

if [ "$NEED_BUILD" = true ]; then
    echo "📦 检测到需要构建的变更，开始构建..."
    
    # 检查是否有 package.json 变更
    if echo "$CHANGED_FILES" | grep -q "package.json"; then
        echo "📋 检测到依赖变更，重新安装依赖..."
        npm ci
    fi
    
    # 构建项目
    echo "🔨 构建项目..."
    npm run build
    
    # 重启应用 (尝试多种 pm2 路径)
    echo "🔄 重启应用..."
    if command -v pm2 &> /dev/null; then
        pm2 restart $APP_NAME || pm2 start npm --name "$APP_NAME" -- start
    elif [ -f ~/.npm-global/bin/pm2 ]; then
        ~/.npm-global/bin/pm2 restart $APP_NAME || ~/.npm-global/bin/pm2 start npm --name "$APP_NAME" -- start
    else
        npx pm2 restart $APP_NAME || npx pm2 start npm --name "$APP_NAME" -- start
    fi
    
    echo "✅ 部署完成！"
else
    echo "ℹ️ 没有检测到需要构建的变更，跳过构建"
fi

# 显示部署状态
echo "📊 当前应用状态:"
if command -v pm2 &> /dev/null; then
    pm2 status $APP_NAME
elif [ -f ~/.npm-global/bin/pm2 ]; then
    ~/.npm-global/bin/pm2 status $APP_NAME
else
    npx pm2 status $APP_NAME
fi

echo "🎉 部署流程完成！"
