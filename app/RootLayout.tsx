"use client"; // 将该组件标记为客户端组件

import { usePathname } from "next/navigation"; // 导入 usePathname 钩子
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 获取当前路径

  return (
    <html lang="zh-CN">
      <body>
        <header>
          <div className="logo-container">
            <Image src="/logo.jpeg" alt="logo" width={100} height={100} className="logo" />
          </div>
          <nav>
            <ul>
              <li className={pathname === "/" ? "active" : ""}><Link href="/">首页</Link></li>
              <li className={pathname === "/blog" ? "active" : ""}><Link href="/blog">博客</Link></li>
              <li className={pathname === "/about" ? "active" : ""}><Link href="/about">关于</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>Copyright &copy; baitengfei.com</p>
        </footer>
      </body>
    </html>
  );
}