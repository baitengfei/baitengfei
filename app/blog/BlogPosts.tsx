"use client"; // 指定这是客户端组件

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

interface BlogPostsProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 10; // 每页显示10篇文章

export default function BlogPosts({ posts }: BlogPostsProps) {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const [selectedTag, setSelectedTag] = useState<string | null>(null); // 选中的标签
  
  // 获取所有唯一的标签，过滤掉 star 和 app
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))
    .filter(tag => tag !== 'star' && tag !== 'app')
    .sort();
  
  // 根据选中的标签过滤文章
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE); // 总页数

  // 计算当前页应显示的帖子
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsToDisplay = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  // 当标签改变时重置到第一页
  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Breadcrumb currentPage="博客" />
        
        {/* 标签过滤器 */}
        <div style={{maxWidth: '700px', margin: '0 auto', marginBottom: '2rem'}}>
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => handleTagChange(null)}
              className={`px-3 py-1 text-sm transition-colors border rounded ${
                selectedTag === null
                  ? 'text-gray-900 border-gray-900 bg-gray-50'
                  : 'text-gray-500 border-gray-300 hover:text-gray-700 hover:border-gray-400'
              }`}
            >
              全部
            </button>
            {allTags.map((tag) => {
              return (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-3 py-1 text-sm transition-colors border rounded ${
                    selectedTag === tag
                      ? 'text-gray-900 border-gray-900 bg-gray-50'
                      : 'text-gray-500 border-gray-300 hover:text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
        
        <ul style={{maxWidth: '700px', margin: '0 auto'}} className="space-y-8">
          {postsToDisplay
            .filter((post) => post.slug && post.title) // 确保每个post都有slug和title
            .map((post, index) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h2 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {post.date}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* 分页控制 - 固定在底部 */}
      <div style={{maxWidth: '700px', margin: '0 auto'}} className="py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            上一页
          </button>
          <span className="text-sm text-gray-500">
            第 {currentPage} 页，共 {totalPages} 页
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}