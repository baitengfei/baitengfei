# 自动部署文档

本文档介绍如何配置和使用自动化部署系统，实现文章发布后快速上线。

## 部署架构

- **GitHub Actions**: 自动构建和部署
- **服务器**: 云服务器运行 Next.js 应用
- **PM2**: 进程管理器，保持应用运行

## 初次配置

### 1. GitHub 仓库设置

在 GitHub 仓库的 Settings > Secrets and variables > Actions 中添加以下密钥：

| 密钥名称 | 说明 | 示例 |
|---------|------|------|
| `HOST` | 服务器 IP 地址 | `123.456.789.0` |
| `USERNAME` | 服务器用户名 | `root` 或 `ubuntu` |
| `SSH_KEY` | SSH 私钥内容 | 完整的私钥文件内容 |

### 2. 服务器端配置

```bash
# 1. 安装 Node.js 和 npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. 安装 PM2
sudo npm install -g pm2

# 3. 克隆项目到服务器
git clone https://github.com/your-username/baitengfei.git
cd baitengfei

# 4. 安装依赖
npm ci

# 5. 构建项目
npm run build

# 6. 启动应用
pm2 start npm --name "baitengfei" -- start

# 7. 保存 PM2 配置
pm2 save
pm2 startup
```

### 3. 修改部署配置

编辑 `.github/workflows/deploy.yml` 文件，更新以下内容：

```yaml
# 修改服务器上的项目路径
cd /path/to/your/website  # 改为实际路径，如: cd /home/ubuntu/baitengfei

# 修改 PM2 应用名称
pm2 reload your-app-name  # 改为: pm2 reload baitengfei
```

## 日常使用

### 方法一：快速发布文章（推荐）

```bash
# 使用快速发布脚本
./publish-post.sh "文章标题" "文章内容"

# 示例
./publish-post.sh "我的新文章" "这是文章的内容，支持多行文本..."
```

### 方法二：手动添加文章后部署

```bash
# 1. 在 posts/ 目录创建新的 .md 文件
# 2. 运行智能部署脚本
./deploy.sh
```

### 方法三：手动 Git 操作

```bash
# 1. 添加新文章
# 在 posts/ 目录创建新的 .md 文件

# 2. 提交更改
git add .
git commit -m "发布新文章: 文章标题"
git push origin main

# 3. 等待自动部署完成（约2-5分钟）
```

### 方法四：直接在 GitHub 网页编辑

1. 在 GitHub 仓库中进入 `posts/` 目录
2. 点击 "Add file" > "Create new file"
3. 创建新的 `.md` 文件
4. 提交更改，自动触发部署

## 智能部署特性

### 变更检测
系统会自动检测以下类型的变更：
- **文章变更** (`posts/` 目录)：需要重新构建
- **代码变更** (`app/`, `components/`, `lib/` 目录)：需要重新构建
- **配置变更** (`package.json`, `next.config.mjs` 等)：需要重新构建
- **其他变更**：跳过构建

### 部署优化
- **增量部署**：只对相关变更进行构建
- **依赖检测**：只有 `package.json` 变更时才重新安装依赖
- **状态反馈**：提供详细的部署状态信息

## 部署流程说明

1. **触发条件**: 推送到 `main` 分支
2. **构建过程**: GitHub Actions 自动执行
   - 检出代码
   - 安装 Node.js 环境
   - 安装依赖 (`npm ci`)
   - 构建项目 (`npm run build`)
3. **部署过程**: 通过 SSH 连接服务器
   - 拉取最新代码 (`git pull`)
   - 安装依赖
   - 重新构建
   - 重启 PM2 进程

## 常见问题排查

### 1. 部署失败

检查 GitHub Actions 日志：
1. 进入仓库 Actions 页面
2. 查看最新的 workflow 运行记录
3. 检查失败的步骤

### 2. SSH 连接失败

```bash
# 在本地测试 SSH 连接
ssh -i /path/to/private-key username@server-ip
```

### 3. PM2 相关问题

```bash
# 在服务器上检查 PM2 状态
pm2 status
pm2 logs baitengfei

# 重启应用
pm2 restart baitengfei
```

### 4. 端口和防火墙

确保服务器防火墙开放相应端口：
```bash
# Ubuntu/Debian
sudo ufw allow 3000

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

## 高级配置

### 1. 添加构建缓存

在 `.github/workflows/deploy.yml` 中已包含 npm 缓存配置，可加速构建。

### 2. 多环境部署

可以创建多个分支对应不同环境：
- `main`: 生产环境
- `staging`: 测试环境

### 3. 回滚机制

```bash
# 使用回滚脚本（推荐）
./rollback.sh

# 或者手动回滚
git log --oneline -10  # 查看最近提交
git reset --hard <commit-hash>
npm run build
pm2 restart baitengfei
```

## 监控和维护

### 1. 检查部署状态

- GitHub Actions 页面查看部署历史
- 服务器日志: `pm2 logs baitengfei`

### 2. 性能监控

```bash
# 查看应用资源使用
pm2 monit

# 查看系统资源
htop
df -h
```

### 3. 定期维护

```bash
# 清理 PM2 日志
pm2 flush

# 更新依赖
npm update
npm audit fix
```

## 安全建议

1. **SSH 密钥**: 使用专用的部署密钥，不要使用个人密钥
2. **服务器访问**: 限制 SSH 访问，使用非标准端口
3. **权限控制**: 使用专用的部署用户，避免使用 root
4. **定期更新**: 保持服务器和依赖包的更新

## 故障恢复

如果自动部署失败，可以手动在服务器上执行：

```bash
cd /path/to/baitengfei
git pull origin main
npm ci
npm run build
pm2 restart baitengfei
```

## 使用示例

### 发布新文章
```bash
# 方法1: 使用快速发布脚本
./publish-post.sh "我的新文章" "这是文章的内容..."

# 方法2: 手动创建文件后部署
echo "---" > posts/my-new-post.md
echo "title: 我的新文章" >> posts/my-new-post.md
echo "date: 2024-01-01" >> posts/my-new-post.md
echo "excerpt: 文章摘要" >> posts/my-new-post.md
echo "tags: []" >> posts/my-new-post.md
echo "---" >> posts/my-new-post.md
echo "" >> posts/my-new-post.md
echo "文章内容..." >> posts/my-new-post.md
./deploy.sh
```

### 更新代码
```bash
# 修改代码后
git add .
git commit -m "更新功能"
git push origin main
# 自动触发部署
```

### 紧急回滚
```bash
# 查看最近的提交
git log --oneline -5

# 回滚到指定版本
./rollback.sh abc1234
```

---

**注意**: 首次配置完成后，每次发布文章只需运行 `./publish-post.sh` 或 `./deploy.sh` 即可自动完成部署。