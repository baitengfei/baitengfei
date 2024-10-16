"use client"; // 确保该组件在客户端运行

import { usePathname } from "next/navigation"; // 导入 usePathname
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); // 获取当前路径

  return (
    <html lang="zh-CN">
      <body>
        <header className="fixed top-0 left-0 w-full bg-gray-100 z-50 flex flex-col items-center">
          <div className="logo-container pt-8 pb-2">  {/* 设置上边距为 40px，下边距为 10px */}
            <Image src="/logo.jpeg" alt="logo" width={80} height={80} className="rounded-full object-cover" />
          </div>
          <nav className="flex justify-center pt-2 pb-4"> {/* 设置 nav 的内边距为 20px */}
            <ul className="flex list-none space-x-8">
              <li className={pathname === "/" ? "active" : ""}>
                <Link href="/" className={`text-2xl font-medium ${pathname === "/" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  首页
                </Link>
              </li>
              <li className={pathname === "/blog" ? "active" : ""}>
                <Link href="/blog" className={`text-2xl font-medium ${pathname === "/blog" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  博客
                </Link>
              </li>
              <li className={pathname === "/about" ? "active" : ""}>
                <Link href="/about" className={`text-2xl font-medium ${pathname === "/about" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  关于
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-[700px] pt-[200px] p-4 mx-auto">
          {children}
        </main>

        <footer className="h-[120px] p-4 bg-gray-100 flex items-center justify-center">
          <p>Copyright &copy; baitengfei.com</p>
        </footer>

        <style jsx>{`
          .active {
            position: relative;
          }

          .active::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;  
            height: 3px;
            background-color: #333;
          }
        `}</style>
      </body>
    </html>
  );
}