import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Breadcrumb from "../../components/Breadcrumb";

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // 将 Markdown 转换为 HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <Breadcrumb 
        currentPage="博客"
        currentPageHref="/blog"
      />
      <article>
      <h1 className="text-xl font-normal">{data.title}</h1>
      <p className="flex items-center font-light text-gray-500 pb-2">
        <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
        {data.date}
      </p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}