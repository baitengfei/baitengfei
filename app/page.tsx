import Image from "next/image";
import { getSortedPostsData } from './lib/posts';

const posts = getSortedPostsData();

export default function Home() {
  const posts = getSortedPostsData(); // Get all posts data
  const starPosts = posts.filter(post => Array.isArray(post.tags) && post.tags.includes('star'));
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <ul>
          {starPosts.map((post, index) => (
            <li key={index} className="mb-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-base">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
