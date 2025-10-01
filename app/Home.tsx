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
            <p className="text-gray-600 mb-2">产品经理 | AI Builder</p>
            <p className="text-sm text-gray-400 italic">「万物有灵」</p>
          </div>
          <div className="flex flex-col items-end space-y-3">
            {/* 社交图标 */}
            <div className="flex space-x-4">
              {/* 邮箱 */}
              <a href="mailto:iterrybai@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors" title="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>

              {/* Bilibili */}
              <a href="https://space.bilibili.com/385427072" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors group" title="Bilibili">
                <svg className="w-6 h-6" viewBox="0 0 48 48">
                  <path fill="currentColor" d="M36.5,12h-7.086l3.793-3.793c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L26.586,12 h-5.172l-5.207-5.207c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L18.586,12H12.5C9.467,12,7,14.467,7,17.5v15 c0,3.033,2.467,5.5,5.5,5.5h2c0,0.829,0.671,1.5,1.5,1.5s1.5-0.671,1.5-1.5h14c0,0.829,0.671,1.5,1.5,1.5s1.5-0.671,1.5-1.5h2 c3.033,0,5.5-2.467,5.5-5.5v-15C42,14.467,39.533,12,36.5,12z M39,32.5c0,1.378-1.122,2.5-2.5,2.5h-24c-1.378,0-2.5-1.122-2.5-2.5 v-15c0-1.378,1.122-2.5,2.5-2.5h24c1.378,0,2.5,1.122,2.5,2.5V32.5z"></path>
                  <rect width="2.75" height="7.075" x="30.625" y="18.463" fill="currentColor" transform="rotate(-71.567 32.001 22)"></rect>
                  <rect width="7.075" height="2.75" x="14.463" y="20.625" fill="currentColor" transform="rotate(-18.432 17.998 21.997)"></rect>
                  <path fill="currentColor" d="M28.033,27.526c-0.189,0.593-0.644,0.896-1.326,0.896c-0.076-0.013-0.139-0.013-0.24-0.025 c-0.013,0-0.05-0.013-0.063,0c-0.341-0.05-0.745-0.177-1.061-0.467c-0.366-0.265-0.808-0.745-0.947-1.477 c0,0-0.29,1.174-0.896,1.49c-0.076,0.05-0.164,0.114-0.253,0.164l-0.038,0.025c-0.303,0.164-0.682,0.265-1.086,0.278 c-0.568-0.051-0.947-0.328-1.136-0.821l-0.063-0.164l-1.427,0.656l0.05,0.139c0.467,1.124,1.465,1.768,2.74,1.768 c0.922,0,1.667-0.303,2.209-0.909c0.556,0.606,1.288,0.909,2.209,0.909c1.856,0,2.55-1.288,2.765-1.843l0.051-0.126l-1.427-0.657 L28.033,27.526z"></path>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/tengfeibai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors" title="X (Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.095 10.316L22.286 1h-1.94L13.23 9.088L7.551 1H1l8.59 12.231L1 23h1.94l7.51-8.543L16.45 23H23l-8.905-12.684zm-2.658 3.022l-.872-1.218L3.64 2.432h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.926-8.3z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@tengfeibai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors" title="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.016 2.016 0 0 0-1.414-1.414C20.055 4.5 12 4.5 12 4.5s-8.055 0-10.084.272A2.016 2.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.016 2.016 0 0 0 1.414 1.414C3.945 19.5 12 19.5 12 19.5s8.055 0 10.084-.272a2.016 2.016 0 0 0 1.414-1.414C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* 二维码 */}
            <div className="relative group">
              <Image
                src="/images/qrcode.jpg"
                alt="微信公众号"
                width={80}
                height={80}
                className="rounded-lg border border-gray-200 transition-transform group-hover:scale-110"
              />
              <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                微信公众号
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 详细介绍区域 */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
          <Image
            src="/logo.jpeg"
            alt="白腾飞"
            width={125}
            height={125}
            className="object-cover flex-shrink-0 rounded-md md:mt-4 mx-auto md:mx-0"
          />
          <div className="space-y-4 text-sm md:text-base">
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
