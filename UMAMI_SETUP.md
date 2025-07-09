# Umami 数据统计集成指南

## 方案选择

### 选择 1：Umami Cloud（推荐）
- 最简单的方式，无需自己维护服务器
- 免费额度：3个网站，每月10K事件
- 官网：https://cloud.umami.is

### 选择 2：自托管
- 完全控制数据
- 使用 Vercel + Supabase 免费方案
- 需要更多技术配置

## 快速开始（使用 Umami Cloud）

### 1. 注册账户
访问 https://cloud.umami.is 注册账户

### 2. 添加网站
- 登录后点击 "Add website"
- 填写网站名称：白腾飞的个人博客
- 填写域名：baitengfei.com

### 3. 获取跟踪代码
添加网站后，你会得到：
- Script URL: `https://cloud.umami.is/script.js`
- Website ID: 类似 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` 的字符串

### 4. 配置环境变量

#### 方法一：使用 .env.local 文件（推荐）
在项目根目录创建 `.env.local` 文件：

```bash
# ==============================================
# Umami Analytics 配置
# ==============================================

# Umami 脚本地址
# 如果使用 Umami Cloud，通常是：https://cloud.umami.is/script.js
# 如果自托管，则是你的 Umami 实例地址，如：https://umami.yourdomain.com/script.js
NEXT_PUBLIC_UMAMI_URL=https://cloud.umami.is/script.js

# 网站 ID
# 从 Umami 控制台获取，格式类似：xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here

# ==============================================
# 获取配置的步骤：
# 1. 访问 https://cloud.umami.is 注册账户
# 2. 点击 "Add website" 添加网站
# 3. 网站名称：白腾飞的个人博客
# 4. 域名：baitengfei.com
# 5. 保存后获取 Website ID
# 6. 将上面的 your-website-id-here 替换为真实的 ID
# ==============================================
```

**重要提醒**：
- `.env.local` 文件不会被提交到 Git 仓库中（已在 .gitignore 中排除）
- 环境变量名必须以 `NEXT_PUBLIC_` 开头才能在客户端使用
- 修改环境变量后需要重新构建和重启应用

#### 方法二：系统环境变量
在服务器上设置环境变量：

```bash
# 临时设置（重启后失效）
export NEXT_PUBLIC_UMAMI_URL=https://cloud.umami.is/script.js
export NEXT_PUBLIC_UMAMI_WEBSITE_ID=你的网站ID

# 永久设置（添加到 ~/.bashrc 或 ~/.profile）
echo 'export NEXT_PUBLIC_UMAMI_URL=https://cloud.umami.is/script.js' >> ~/.bashrc
echo 'export NEXT_PUBLIC_UMAMI_WEBSITE_ID=你的网站ID' >> ~/.bashrc
source ~/.bashrc
```

#### 方法三：Docker 环境变量（如果使用 Docker）
在 docker-compose.yml 中：

```yaml
version: '3.8'
services:
  nextjs-app:
    build: .
    environment:
      - NEXT_PUBLIC_UMAMI_URL=https://cloud.umami.is/script.js
      - NEXT_PUBLIC_UMAMI_WEBSITE_ID=你的网站ID
```

#### 方法四：PM2 配置（如果使用 PM2）
创建 ecosystem.config.js：

```javascript
module.exports = {
  apps: [{
    name: 'baitengfei-blog',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_UMAMI_URL: 'https://cloud.umami.is/script.js',
      NEXT_PUBLIC_UMAMI_WEBSITE_ID: '你的网站ID'
    }
  }]
}
```

### 5. 构建和部署
```bash
# 构建项目
npm run build

# 启动生产服务器
npm start

# 或使用 PM2
pm2 start ecosystem.config.js
```

## 验证集成

### 检查环境变量（服务器部署）
在服务器上验证环境变量是否正确设置：

```bash
# 检查环境变量
echo $NEXT_PUBLIC_UMAMI_URL
echo $NEXT_PUBLIC_UMAMI_WEBSITE_ID

# 或者查看 Next.js 应用中的环境变量
node -e "console.log('UMAMI_URL:', process.env.NEXT_PUBLIC_UMAMI_URL)"
node -e "console.log('WEBSITE_ID:', process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID)"
```

### 验证集成效果
1. 确保应用已重新构建和部署
2. 访问你的网站 (https://baitengfei.com)
3. 打开浏览器开发者工具 (F12)
4. 查看 Network 标签页，应该能看到从 `cloud.umami.is` 加载的脚本
5. 在 Console 中检查是否有相关错误信息
6. 登录 Umami 控制台查看是否收到访问数据（可能需要等待几分钟）

### 服务器部署注意事项
- 确保服务器可以访问外网（cloud.umami.is）
- 如果使用防火墙，确保不阻止 HTTPS 请求
- 重启应用后环境变量才会生效
- 使用 `npm run build` 重新构建以应用环境变量变更

## 功能特点

- ✅ 隐私友好，不使用 Cookie
- ✅ GDPR 合规
- ✅ 轻量级，不影响网站性能
- ✅ 实时数据统计
- ✅ 支持自定义事件追踪
- ✅ 多种图表和报告

## 高级配置

### 排除特定 IP
在 Umami 控制台的网站设置中可以排除特定 IP 地址。

### 自定义事件追踪
```javascript
// 追踪按钮点击
umami.track('button-click', { button: 'download' });

// 追踪页面停留时间
umami.track('page-view', { duration: 30 });
```

### 开发环境排除
在开发环境中不加载统计脚本：
```javascript
// 在 UmamiScript.tsx 中添加
if (process.env.NODE_ENV === 'development') {
  return null;
}
```

## 故障排除

### 脚本未加载
- 检查环境变量是否正确设置
- 确认网站ID格式正确
- 检查网络连接

### 数据未显示
- 等待几分钟，数据可能有延迟
- 检查 Umami 控制台是否有错误信息
- 确认域名设置正确

## 成本分析

### Umami Cloud 免费版
- 3个网站
- 每月10K事件
- 1年数据保留

### 自托管成本
- Vercel: 免费
- Supabase: 免费（500MB数据库）
- 总成本: 0元/月

### 在自己的服务器上托管 Umami
如果你想完全控制数据，也可以在自己的服务器上托管 Umami：

**优势**：
- 完全控制数据和隐私
- 不受第三方服务限制
- 可以自定义功能

**要求**：
- 需要 Node.js 环境
- 需要 PostgreSQL 或 MySQL 数据库
- 需要一定的运维能力

**快速安装**：
```bash
# 克隆 Umami 仓库
git clone https://github.com/umami-software/umami.git
cd umami

# 安装依赖
npm install

# 配置数据库连接
# 编辑 .env 文件，设置 DATABASE_URL

# 构建和启动
npm run build
npm start
```

如果选择自托管，你的环境变量配置需要改为：
```bash
NEXT_PUBLIC_UMAMI_URL=https://umami.yourdomain.com/script.js
NEXT_PUBLIC_UMAMI_WEBSITE_ID=你的网站ID
```

## 相关链接

- [Umami 官方文档](https://umami.is/docs)
- [Next.js Script 组件文档](https://nextjs.org/docs/api-reference/next/script)
- [自托管教程](https://umami.is/docs/install) 