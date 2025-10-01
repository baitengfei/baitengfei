#!/bin/bash

# 智能部署脚本
echo "🚀 开始智能部署..."

# 检查是否有变更
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现文件变更，准备提交..."
    
    # 检测变更类型
    CHANGED_FILES=$(git diff --name-only --cached 2>/dev/null || git diff --name-only)
    
    # 检查是否只是文章变更
    if echo "$CHANGED_FILES" | grep -q "^posts/" && ! echo "$CHANGED_FILES" | grep -qE "^(app/|components/|lib/|package\.json|next\.config\.mjs|tailwind\.config\.js|tsconfig\.json)"; then
        echo "📄 检测到仅文章变更，执行快速部署..."
        COMMIT_MSG="发布新文章: $(date '+%Y-%m-%d %H:%M:%S')"
    else
        echo "🔧 检测到代码或配置变更，执行完整部署..."
        COMMIT_MSG="更新代码: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    # 提交变更
    git add .
    git commit -m "$COMMIT_MSG"
    git push origin main
    
    echo "✅ 已推送到 GitHub，自动部署将在几分钟内完成"
    echo "🔍 你可以在 GitHub Actions 页面查看部署进度"
else
    echo "ℹ️ 没有文件变更，无需部署"
fi

echo "🎉 部署流程完成！"