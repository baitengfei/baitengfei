// app/page.tsx
import Home from '../app/Home'; // 引入客户端组件
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://baitengfei.com" },
};

export default function Page() {
  return <Home />;
}