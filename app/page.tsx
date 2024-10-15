import { getSortedPostsData } from './lib/posts';
import Image from 'next/image';

export default function Home() {
  const posts = getSortedPostsData(); // 获取所有帖子数据
  const starPosts = posts.filter(post => Array.isArray(post.tags) && post.tags.includes('star'));

  // 默认图片 URL
  const defaultImage = '/path/to/default-image.jpg'; // 请将此路径替换为您的默认图片路径

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ul className="space-y-6"> {/* 使用竖向间距 */}
        {starPosts.map((post, index) => (
          <li key={index} className="bg-white rounded-lg shadow-lg p-6 w-full"> 
            <div className="flex">
              <div className="w-1/3">
                <Image 
                  src={post.image ? post.image : defaultImage} // 如果有图片，则使用帖子中的图片，否则使用默认图片
                  alt={post.title}
                  className="w-50 h-50 object-cover rounded-lg" // 控制图片大小
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="text-xl font-normal mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-base font-thin">{post.excerpt}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}