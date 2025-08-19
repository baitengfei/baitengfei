#!/bin/bash

# 快速部署脚本
echo "开始部署..."

# 构建项目
echo "构建项目..."
npm run build

# 提交到 git（如果有变更）
if [ -n "$(git status --porcelain)" ]; then
    echo "发现文件变更，提交到 git..."
    git add .
    git commit -m "发布新文章: $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "已推送到 GitHub，自动部署将在几分钟内完成"
else
    echo "没有文件变更"
fi

echo "部署完成！"