// app/layout.tsx
import type { Metadata } from "next";
import RootLayout from "./RootLayout"; // 导入客户端组件

export const metadata: Metadata = {
  title: "白腾飞的博客-关注科技和有趣的产品",
  description: "产品经理, 独立开发者, ai, robotics, 机器人，人工智能",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>; // 渲染客户端组件
}