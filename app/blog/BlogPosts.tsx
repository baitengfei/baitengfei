"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  category?: string;
}

interface BlogPostsProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 10; // 每页显示10篇文章

export default function BlogPosts({ posts }: BlogPostsProps) {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 选中的分类
  const [selectedTag, setSelectedTag] = useState<string | null>(null); // 选中的标签

  // 获取所有唯一的分类
  const allCategories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))
    .sort();

  // 先根据分类过滤
  const categoryFilteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  // 获取当前分类下的所有标签，过滤掉 star 和 app
  const allTags = Array.from(new Set(categoryFilteredPosts.flatMap(post => post.tags)))
    .filter(tag => tag !== 'star' && tag !== 'app')
    .sort();

  // 再根据标签过滤
  const filteredPosts = selectedTag
    ? categoryFilteredPosts.filter(post => post.tags.includes(selectedTag))
    : categoryFilteredPosts;
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE); // 总页数

  // 计算当前页应显示的帖子
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsToDisplay = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  // 当分类改变时重置标签和页码
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedTag(null); // 重置标签选择
    setCurrentPage(1);
  };

  // 当标签改变时重置到第一页
  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  // 确保当前页不超过总页数
  const safeTotalPages = Math.max(totalPages, 1);
  const safeCurrentPage = Math.min(currentPage, safeTotalPages);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Breadcrumb currentPage="博客" />

        {/* 分类过滤器 - 导航样式 */}
        <div style={{maxWidth: '700px', margin: '0 auto', marginBottom: '1.5rem'}}>
          <nav className="flex gap-6 border-b border-gray-200">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`pb-2 text-sm transition-colors relative ${
                selectedCategory === null
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              全部
              {selectedCategory === null && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
              )}
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`pb-2 text-sm transition-colors relative ${
                  selectedCategory === category
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                )}
              </button>
            ))}
          </nav>
        </div>

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
            .map((post) => (
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
            disabled={safeCurrentPage === 1}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            上一页
          </button>
          <span className="text-sm text-gray-500">
            第 {safeCurrentPage} 页，共 {safeTotalPages} 页
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, safeTotalPages))}
            disabled={safeCurrentPage === safeTotalPages}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}