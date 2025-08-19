import { getFilteredPostsData } from '../lib/posts';
import PostsList from '../components/PostsList';
import Breadcrumb from "../components/Breadcrumb";

export default async function MyProductsPage() {
  const productsPosts = getFilteredPostsData('app');
  
  return (
    <main>
      <Breadcrumb currentPage="我的产品" />
      <PostsList posts={productsPosts} />
    </main>
  );
}
