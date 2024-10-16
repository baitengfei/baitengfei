"use client"; // 指定这是客户端组件

import { useState } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

interface BlogPostsProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 10; // 每页显示10篇文章

export default function BlogPosts({ posts }: BlogPostsProps) {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE); // 总页数

  // 计算当前页应显示的帖子
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsToDisplay = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div>
      <ul>
        {postsToDisplay
          .filter((post) => post.slug && post.title) // 确保每个post都有slug和title
          .map((post, index) => (
            <li
              key={post.slug}
              className={`pb-4 mb-10 ${
                index !== postsToDisplay.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`} // 分隔线 + 额外下边距
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-medium hover:font-bold mb-2"
              >
                {post.title}
              </Link>
              <p className="font-light text-gray-500 my-1">
                {post.date}
              </p>
              <p className="text-gray-500 font-thin">{post.excerpt}</p>
            </li>
          ))}
      </ul>

      {/* 分页控制 */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          上一页
        </button>
        <span className="px-4 py-2">
          第 {currentPage} 页，共 {totalPages} 页
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          下一页
        </button>
      </div>
    </div>
  );
}