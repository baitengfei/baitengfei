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
                <Link href="/" className={`text-[1.375rem] font-medium ${pathname === "/" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  首页
                </Link>
              </li>
              <li className={pathname === "/blog" ? "active" : ""}>
                <Link href="/blog" className={`text-[1.375rem] font-medium ${pathname === "/blog" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  博客
                </Link>
              </li>
              <li className={pathname === "/ai-applications" ? "active" : ""}>
                <Link href="/ai-applications" className={`text-[1.375rem] font-medium ${pathname === "/ai-applications" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  AI 应用
                </Link>
              </li>
              <li className={pathname === "/my-products" ? "active" : ""}>
                <Link href="/my-products" className={`text-[1.375rem] font-medium ${pathname === "/my-products" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  产品
                </Link>
              </li>
              <li className={pathname === "/about" ? "active" : ""}>
                <Link href="/about" className={`text-[1.375rem] font-medium ${pathname === "/about" ? "font-bold text-black" : "text-gray-700"} transition hover:font-bold hover:text-black`}>
                  关于
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-[700px] pt-[200px] p-4 mx-auto">
          {children}
        </main>

        <footer className="h-[120px] p-4 bg-gray-100 flex flex-col items-center justify-center">
          <p>Copyright &copy; baitengfei.com</p>
          <div className="m-0">
              <div className="flex items-center space-x-2">
                <a 
                  href="http://beian.miit.gov.cn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-600"
                >
                  京ICP备2024052148号-4
                </a>
                <Image 
                  src="/备案图标.png" 
                  alt="footer image" 
                  width={15} 
                  height={15} 
                  className="object-cover" 
                />
                <a 
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=11010502056264" 
                  rel="noreferrer" 
                  target="_blank" 
                  className="text-xs text-gray-600"
                >
                  京公网安备11010502056264
                </a>
              </div>
            </div>
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