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
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
    };
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-500">
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <p>{new Date(post.date).toLocaleDateString()}</p> {/* 转换为字符串 */}
          </li>
        ))}
      </ul>
    </div>
  );
}