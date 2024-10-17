// app/layout.tsx
import type { Metadata } from "next";
import RootLayout from "./RootLayout"; // 导入客户端组件

export const metadata: Metadata = {
  title: "白腾飞的个人博客-AI独立开发者的前沿观察和实践思考",
  description: "AI 时代的独立开发者、产品经理，专注于 AI、机器人、空间计算、智能家居等科技领域的前沿观察和产品使用体验分享，并开发满足特定人群需求的软硬件产品。育儿应用「宝宝时刻」和小游戏「smart room escape」开发者。",
  keywords: "独立开发者，AI 产品开发，机器人，宝宝时刻，小游戏，room escape, ai product, ai developer"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>; // 渲染客户端组件
}