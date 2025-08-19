// app/Home.tsx
"use client"; // 指定这是一个客户端组件

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen space-y-3">
      {/* 个人信息区域 */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium mb-2">白腾飞</h1>
            <p className="text-gray-600">产品经理 | AI Builder</p>
          </div>
          <div className="flex space-x-4">
            {/* 邮箱 */}
            <a href="mailto:iterrybai@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors" title="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>

            {/* Bilibili */}
            <a href="https://space.bilibili.com/385427072" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors" title="Bilibili">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.5-3h15l-1.5-7.5h-12L6 20.25Z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/tengfeibai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors" title="X (Twitter)">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@tengfeibai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors" title="YouTube">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 详细介绍区域 */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-start space-x-6">
          <Image 
            src="/logo.jpeg" 
            alt="白腾飞" 
            width={125} 
            height={125} 
            className="object-cover flex-shrink-0 rounded-md mt-4"
          />
          <div className="space-y-4">
            <p>
              我是一个科技行业的从业者，职位是产品经理，当下正尝试借助 AI 做独立开发者。
            </p>
            <p>
              我的职业生涯始于对“物联网”这个概念的憧憬，逐步进入了智能硬件领域，并恰好赶上了 NLP、深度学习、知识图谱等技术爆发的年代，完整经历了智能手表、智能音箱、家庭机器人等近年来明星品类的发展和兴亡。
            </p>
            <p>
              个人有过两年餐饮机器人的创业经历，目前在专注大模型技术的应用和落地。
            </p>
            <p>
              Believe in AI & Connect the dots.
            </p>
          </div>
        </div>
      </div>

      {/* 核心链接区域 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Link 
          href="/blog" 
          className="bg-white shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <h3 className="font-medium text-custom-blue mb-2">我的博客</h3>
          <p className="text-sm text-gray-600 mb-2">分享观察、思考和有趣的产品</p>
        </Link>

        <Link 
          href="/my-products" 
          className="bg-white shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <h3 className="font-medium text-custom-blue mb-2">我的作品</h3>
          <p className="text-sm text-gray-600 mb-2">我开发的软硬件产品</p>
        </Link>

        <Link 
          href="/ai-applications" 
          className="bg-white shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <h3 className="font-medium text-custom-blue mb-2">产品体验</h3>
          <p className="text-sm text-gray-600 mb-2">分享好用的 AI 软件</p>
        </Link>
      </div>

    </div>
  );
}
