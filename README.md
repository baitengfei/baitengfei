# 白腾飞的个人博客

一个基于 Next.js 构建的现代化个人博客网站，支持 Markdown 文章发布和自动化部署。

## ✨ 特性

- 🚀 **现代化技术栈**: Next.js 15 + React 18 + TypeScript
- 📝 **Markdown 支持**: 支持 Front Matter 元数据
- 🎨 **响应式设计**: 基于 Tailwind CSS 的美观界面
- 🔄 **自动化部署**: GitHub Actions + PM2 自动化部署流程
- 📊 **访问统计**: 集成 Umami 网站分析
- 🔍 **SEO 优化**: 自动生成 sitemap
- ⚡ **性能优化**: 静态生成和图片优化

## 🏗️ 项目结构

```
baitengfei/
├── app/                    # Next.js App Router
│   ├── about/             # 关于页面
│   ├── ai-applications/   # AI应用页面
│   ├── blog/              # 博客相关页面
│   │   ├── [slug]/        # 动态文章页面
│   │   └── BlogPosts.tsx  # 博客列表组件
│   ├── components/        # 可复用组件
│   ├── lib/               # 工具函数
│   └── my-products/       # 我的产品页面
├── posts/                 # Markdown 文章目录
├── public/                # 静态资源
├── .github/workflows/     # GitHub Actions 配置
└── scripts/               # 部署脚本
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 本地开发

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/baitengfei.git
   cd baitengfei
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问网站**
   打开 [http://localhost:3000](http://localhost:3000)

### 构建和部署

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 📝 发布文章

### 方法一：使用部署脚本（推荐）

1. **创建文章文件**
   在 `posts/` 目录创建新的 `.md` 文件，例如 `my-new-post.md`：

   ```markdown
   ---
   title: "我的新文章"
   date: "2024-01-01"
   excerpt: "这是文章的摘要"
   tags: ["技术", "博客"]
   ---

   # 文章标题

   这是文章的内容...
   ```

2. **运行部署脚本**
   ```bash
   ./deploy.sh
   ```
   > 💡 **注意**: `deploy.sh` 会自动处理 Git 提交和推送，无需手动操作

### 方法二：使用快速发布脚本

```bash
./publish-post.sh "文章标题" "文章内容"
```

### 方法三：GitHub 网页编辑

1. 在 GitHub 仓库中进入 `posts/` 目录
2. 点击 "Add file" > "Create new file"
3. 创建新的 `.md` 文件
4. 提交更改，自动触发部署

## 🔧 更新代码

### 方法一：使用部署脚本（推荐）

```bash
# 修改代码后，直接运行：
./deploy.sh
```
> 💡 **注意**: 脚本会自动检测变更类型、提交代码、推送到 GitHub 并触发自动部署

### 方法二：手动 Git 操作

```bash
# 修改代码后：
git add .
git commit -m "更新功能"
git push origin main
# 推送后 GitHub Actions 自动触发部署
```

> ⚠️ **重要**: 不要同时使用两种方法，选择其中一种即可！

## 🔧 自动化部署

项目配置了完整的自动化部署流程：

### GitHub Actions 工作流

- **触发条件**: 推送到 `main` 分支
- **智能检测**: 自动识别变更类型（文章/代码/配置）
- **增量部署**: 只对相关变更进行构建
- **状态反馈**: 详细的部署进度和结果

### 部署脚本

- `deploy.sh`: 智能部署脚本，检测变更类型
- `server-deploy.sh`: 服务器端部署脚本
- `publish-post.sh`: 快速发布文章脚本
- `rollback.sh`: 安全回滚脚本

## 📊 监控和维护

### 检查部署状态

- GitHub Actions 页面查看部署历史
- 服务器日志: `pm2 logs baitengfei`

### 性能监控

```bash
# 查看应用资源使用
pm2 monit

# 查看系统资源
htop
df -h
```

### 回滚操作

```bash
# 查看最近的提交
git log --oneline -5

# 回滚到指定版本
./rollback.sh <commit-hash>
```

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: Markdown + Front Matter
- **部署**: GitHub Actions + PM2 + Nginx
- **分析**: Umami
- **字体**: Geist

## 📁 文章格式

文章使用 Markdown 格式，支持 Front Matter 元数据：

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
image: "图片URL"  # 可选
---

# 文章内容

使用 Markdown 语法编写内容...
```

## 📋 使用示例

### 发布新文章
```bash
# 方法1: 使用快速发布脚本（最简单）
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
./deploy.sh  # 自动提交、推送、部署
```

### 更新代码
```bash
# 方法1: 使用部署脚本（推荐）
# 修改代码后
./deploy.sh  # 自动提交、推送、部署

# 方法2: 手动 Git 操作
# 修改代码后
git add .
git commit -m "更新功能"
git push origin main
# GitHub Actions 自动触发部署
```

### 紧急回滚
```bash
# 查看最近的提交
git log --oneline -5

# 回滚到指定版本
./rollback.sh abc1234
```

## 🔒 环境变量

创建 `.env.local` 文件（本地开发）：

```env
# Umami 配置（可选）
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
NEXT_PUBLIC_UMAMI_SCRIPT_URL=https://your-umami-instance.com/script.js
```

## 📚 相关文档

- [部署文档](DEPLOYMENT.md) - 详细的部署配置说明
- [Umami 设置](UMAMI_SETUP.md) - 网站分析配置指南

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**作者**: 白腾飞  
**网站**: [https://your-domain.com](https://your-domain.com)
