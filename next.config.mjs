/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,

  // 图片优化
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30天缓存
  },

  // HTTP 响应头优化：静态资源长缓存
  async headers() {
    return [
      {
        source: "/(.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif|woff|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
