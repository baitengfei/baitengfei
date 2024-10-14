// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article>
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}