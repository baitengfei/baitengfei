// app/layout.tsx
import type { Metadata } from "next";
import RootLayout from "./RootLayout"; // 导入客户端组件

const baseUrl = "https://baitengfei.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "白腾飞的个人博客 - AI独立开发者的前沿观察和实践思考",
    template: "%s | 白腾飞",
  },
  description: "AI 时代的独立开发者、产品经理，专注于 AI、机器人、空间计算、智能家居等科技领域的前沿观察和产品使用体验分享，并开发满足特定人群需求的软硬件产品。育儿应用「宝宝时刻」和小游戏「smart room escape」开发者。",
  keywords: "独立开发者，AI 产品经理，人工智能，机器人，宝宝时刻，小游戏，room escape, ai product, ai developer",
  authors: [{ name: "白腾飞", url: baseUrl }],
  creator: "白腾飞",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseUrl,
    siteName: "白腾飞的个人博客",
    title: "白腾飞的个人博客 - AI独立开发者的前沿观察和实践思考",
    description: "AI 时代的独立开发者、产品经理，专注于 AI、机器人、空间计算、智能家居等科技领域的前沿观察和产品使用体验分享。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "白腾飞的个人博客",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "白腾飞的个人博客 - AI独立开发者的前沿观察和实践思考",
    description: "AI 时代的独立开发者、产品经理，专注于 AI、机器人、空间计算、智能家居等科技领域的前沿观察和产品使用体验分享。",
    images: ["/og-image.png"],
    creator: "@baitengfei",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>; // 渲染客户端组件
}