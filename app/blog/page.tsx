// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
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
    };
  });

  return (
    <div>
      <ul>
        {posts
          .filter(post => post.slug && post.title) // 确保每个post都有slug和title
          .map((post, index) => (
            <li
              key={post.slug}
              className={`pb-4 mb-10 ${index !== posts.length - 1 ? 'border-b border-gray-200' : ''}`} // 分隔线 + 额外下边距
            >
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-xl font-medium hover:text-blue-500 mb-2" // 标题悬浮变蓝，下边距
              >
                {post.title}
              </Link>
              <p className="font-light text-gray-500 my-1 pb-3"> {/* 日期上下边距 */}
                {post.date}
              </p>
              <p className="text-gray-500 font-thin">{post.excerpt}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}