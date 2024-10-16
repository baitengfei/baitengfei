import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPosts from "./BlogPosts"; // 引入新的客户端组件

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[]; // 添加 tags 属性以便过滤
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
      tags: data.tags || [], // 确保 tags 属性存在，默认为空数组
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