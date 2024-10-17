import { getFilteredPostsData } from '../lib/posts';
import Home from '../Home';

export default async function MyProductsPage() {
  const productsPosts = getFilteredPostsData('app');
  return <Home posts={productsPosts} />;
}
