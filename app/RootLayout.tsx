"use client"; // 确保该组件在客户端运行

import Image from "next/image";
import UmamiScript from "./lib/UmamiScript";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="zh-CN">
      <body>
        <main className="max-w-[900px] pt-[60px] mx-auto px-4">
          {children}
        </main>

        <footer className="h-[120px] p-4 bg-white flex flex-col items-center justify-center">
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
        
        {/* Umami 数据统计 */}
        <UmamiScript />
      </body>
    </html>
  );
}