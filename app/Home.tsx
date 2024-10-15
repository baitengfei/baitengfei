// app/Home.tsx
"use client"; // 指定这是一个客户端组件

import { useState } from 'react';
import Image from 'next/image';
import { PostData } from './lib/posts'; // 导入 PostData 类型

const POSTS_PER_PAGE = 10; // 每页显示的帖子数量

// 为 posts 参数定义类型
export default function Home({ posts }: { posts: PostData[] }) {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码

  // 筛选星标帖子
  const starPosts = posts.filter(post => Array.isArray(post.tags) && post.tags.includes('star'));

  // 计算总页数
  const totalPages = Math.ceil(starPosts.length / POSTS_PER_PAGE);

  // 计算当前页应显示的帖子
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsToDisplay = starPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // 默认图片 URL
  const defaultImage = '/path/to/default-image.jpg'; // 请将此路径替换为您的默认图片路径

  // 滚动到顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
  };

  // 更新当前页码并滚动到顶部
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToTop();
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ul className="space-y-6"> {/* 使用竖向间距 */}
        {postsToDisplay.map((post, index) => (
          <li key={index} className="bg-white rounded-lg shadow-lg p-6 w-full"> 
            <div className="flex">
              <div className="w-1/3">
                <Image 
                  src={post.image ? post.image : defaultImage} // 如果有图片，则使用帖子中的图片，否则使用默认图片
                  alt={post.title}
                  className="w-50 h-50 object-cover rounded-lg" // 控制图片大小
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="text-xl font-normal mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-base font-thin">{post.excerpt}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 分页控制 */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          上一页
        </button>
        
        {/* 显示当前页数和总页数 */}
        <span className="text-gray-700">
          第 {currentPage} 页 / 共 {totalPages} 页
        </span>
        
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          下一页
        </button>
      </div>
    </div>
  );
}