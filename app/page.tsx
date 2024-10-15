import { getSortedPostsData } from './lib/posts';


export default function Home() {
  const posts = getSortedPostsData(); // 获取所有文章数据
  const starPosts = posts.filter(post => Array.isArray(post.tags) && post.tags.includes('star'));
  
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <ul className="space-y-6"> {/* 使用竖向间距 */}
          {starPosts.map((post, index) => (
            <li key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}