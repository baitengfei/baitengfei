import { getPostData, getSortedPostsData, PostData } from '../../lib/posts';
import { Metadata } from 'next';

// 定义组件的 props 类型
interface PostPageProps {
  params: {
    slug: string;
  };
}

// 获取文章详情页的 metadata（SEO 优化）
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
    description: postData.excerpt,
  };
}

// 动态生成文章详情页面
export default async function PostPage({ params }: PostPageProps) {
  const postData: PostData = await getPostData(params.slug);

  return (
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
    </div>
  );
}

// 如果要预渲染所有路径，使用 generateStaticParams
export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();
  return allPostsData.map((post) => ({
    slug: post.slug,
  }));
}