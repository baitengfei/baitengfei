// app/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 定义文章的类型
export interface PostData {
  slug: string;
  title: string;
  date?: string;
  excerpt: string;
  tags: string[];
  image?: string; // 添加图片字段
  contentHtml?: string;
}

// 指定 Markdown 文件的目录
const postsDirectory = path.join(process.cwd(), 'posts');

// 获取所有文章的 metadata
export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ''); // 去掉 .md 扩展名
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析 markdown 中的 front matter
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<PostData, 'slug' | 'contentHtml'>), // 类型转换
    };
  });

  // 根据日期排序，如果有日期字段
  return allPostsData.sort((a, b) => {
    if (a.date && b.date) {
      return a.date < b.date ? 1 : -1;
    }
    return 0;
  });
}

// 根据 slug 获取单篇文章的数据
export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 使用 gray-matter 解析 markdown
  const matterResult = matter(fileContents);

  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 返回包含 HTML 内容的完整文章数据
  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<PostData, 'slug' | 'contentHtml'>),
  };
}

// 根据标签获取过滤后的文章数据
export function getFilteredPostsData(tag: string): PostData[] {
  const allPostsData = getSortedPostsData(); // 获取所有文章的数据
  return allPostsData.filter(post => Array.isArray(post.tags) && post.tags.includes(tag)); // 根据标签筛选
}