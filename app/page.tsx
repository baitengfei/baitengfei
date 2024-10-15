// app/page.tsx
import { getSortedPostsData } from './lib/posts';
import Home from '../app/Home'; // 引入客户端组件

export default async function Page() {
  const posts = getSortedPostsData(); // 获取所有帖子数据
  return <Home posts={posts} />; // 将数据传递给 Home 组件
}