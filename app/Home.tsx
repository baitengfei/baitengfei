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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
              </svg>
            </a>

            {/* Bilibili */}
            <a href="https://space.bilibili.com/385427072" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors" title="Bilibili">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .356-.124.657-.373.906l-1.174 1.12zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.789 1.894v7.52c.02.764.283 1.396.789 1.894.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.13.789-1.894v-7.52c-.02-.764-.283-1.396-.789-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8.24 9.653c.734 0 1.36.262 1.88.787.52.524.78 1.16.78 1.907v.48c0 .747-.26 1.383-.78 1.907-.52.524-1.146.787-1.88.787-.734 0-1.36-.263-1.88-.787-.52-.524-.78-1.16-.78-1.907v-.48c0-.747.26-1.383.78-1.907.52-.525 1.146-.787 1.88-.787zm7.52 0c.734 0 1.36.262 1.88.787.52.524.78 1.16.78 1.907v.48c0 .747-.26 1.383-.78 1.907-.52.524-1.146.787-1.88.787-.734 0-1.36-.263-1.88-.787-.52-.524-.78-1.16-.78-1.907v-.48c0-.747.26-1.383.78-1.907.52-.525 1.146-.787 1.88-.787z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/tengfeibai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors" title="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@tengfeibai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors" title="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
