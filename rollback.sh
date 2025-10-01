#!/bin/bash

# 回滚脚本
# 使用方法: ./rollback.sh [commit-hash]

PROJECT_DIR="/home/ecs-user/baitengfei"
APP_NAME="baitengfei"

echo "🔄 开始回滚操作..."

cd $PROJECT_DIR

# 如果没有提供commit hash，显示最近的提交
if [ -z "$1" ]; then
    echo "📝 最近的提交记录："
    git log --oneline -10
    echo ""
    read -p "请输入要回滚到的commit hash: " COMMIT_HASH
else
    COMMIT_HASH="$1"
fi

# 验证commit是否存在
if ! git cat-file -e "$COMMIT_HASH^{commit}" 2>/dev/null; then
    echo "❌ 无效的commit hash: $COMMIT_HASH"
    exit 1
fi

echo "🎯 回滚到: $COMMIT_HASH"
echo "📝 Commit信息: $(git log --oneline -1 $COMMIT_HASH)"

# 确认回滚
read -p "⚠️  确认要回滚吗？这将丢失所有后续的提交！(y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 回滚已取消"
    exit 0
fi

# 执行回滚
echo "🔄 执行回滚..."
git reset --hard $COMMIT_HASH

# 强制推送到远程（危险操作，需要确认）
read -p "⚠️  是否强制推送到远程仓库？这将覆盖远程历史！(y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 强制推送到远程..."
    git push origin main --force
else
    echo "ℹ️  仅本地回滚，未推送到远程"
fi

# 重新构建和部署
echo "🔨 重新构建项目..."
npm ci
npm run build

echo "🔄 重启应用..."
pm2 restart $APP_NAME || pm2 start npm --name "$APP_NAME" -- start

echo "✅ 回滚完成！"
echo "📊 当前应用状态:"
pm2 status $APP_NAME
