
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // 保留现有配置
  async rewrites() {
      return [
          {
              source: '/baidu_verify_codeva-E9J6bjSG7K.html', // 访问的 URL
              destination: '/baidu_verify_codeva-E9J6bjSG7K', // 实际的 Next.js 页面
          },
          // 你可以在这里添加更多的重写规则
      ];
  },
  // 其他配置可以继续保留在这里
};

export default nextConfig;