import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Breadcrumb from "../../components/Breadcrumb";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const baseUrl = "https://baitengfei.com";

interface PostProps {
  params: Promise<{
    slug: string;
  }>;
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const { data } = post;
  const url = `${baseUrl}/blog/${slug}`;
  const title = data.title || "博客文章";
  const description = data.excerpt || data.description || "白腾飞博客文章";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: data.date,
      authors: ["白腾飞"],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { data, content } = post;

  // 将 Markdown 转换为 HTML
  const processedContent = await remark().use(html, { allowDangerousHtml: true }).process(content);
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
        {data.bilibili && (
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", margin: "1.5rem 0" }}>
            <iframe
              src={`//player.bilibili.com/player.html?bvid=${data.bilibili}&high_quality=1&danmaku=0`}
              frameBorder={0}
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        )}
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}
