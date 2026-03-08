import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPosts from "./BlogPosts"; // 引入新的客户端组件
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客",
  description: "白腾飞的博客，分享 AI、机器人、智能家居等科技领域的前沿观察和产品使用体验。",
  alternates: {
    canonical: "https://baitengfei.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://baitengfei.com/blog",
    title: "博客 | 白腾飞",
    description: "白腾飞的博客，分享 AI、机器人、智能家居等科技领域的前沿观察和产品使用体验。",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "白腾飞博客" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "博客 | 白腾飞",
    description: "白腾飞的博客，分享 AI、机器人、智能家居等科技领域的前沿观察和产品使用体验。",
    images: ["/og-image.png"],
  },
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}


export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags || [],
    };
  });

  // 按日期降序排序
  const sortedPosts = posts
    .filter(post => !post.tags.includes("services")) // 过滤掉带有 "services" 标签的文章
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <BlogPosts posts={sortedPosts} />
  );
}