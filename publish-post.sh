#!/bin/bash

# 快速发布文章脚本
# 使用方法: ./publish-post.sh "文章标题" "文章内容"

if [ $# -lt 2 ]; then
    echo "❌ 使用方法: $0 \"文章标题\" \"文章内容\""
    echo "📝 示例: $0 \"我的新文章\" \"这是文章的内容...\""
    exit 1
fi

TITLE="$1"
CONTENT="$2"
DATE=$(date '+%Y-%m-%d')
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# 生成文件名（使用标题的拼音或英文）
FILENAME=$(echo "$TITLE" | sed 's/[^a-zA-Z0-9\u4e00-\u9fa5]/-/g' | tr '[:upper:]' '[:lower:]')
FILENAME="${FILENAME}-${DATE}.md"

# 创建文章文件
POST_FILE="posts/$FILENAME"

cat > "$POST_FILE" << EOF
---
title: "$TITLE"
date: "$DATE"
excerpt: ""
tags: []
---

$CONTENT
EOF

echo "📝 文章已创建: $POST_FILE"
echo "📄 标题: $TITLE"
echo "📅 日期: $DATE"

# 询问是否立即发布
read -p "🚀 是否立即发布到网站？(y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 开始发布..."
    ./deploy.sh
else
    echo "ℹ️ 文章已保存，你可以稍后运行 ./deploy.sh 来发布"
fi
