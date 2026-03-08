import { getFilteredPostsData } from '../lib/posts';
import PostsList from '../components/PostsList';
import Breadcrumb from "../components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "我的产品",
  description: "白腾飞开发的软硬件产品，包括育儿应用「宝宝时刻」和密室逃脱游戏「逃脱智能的房子」。",
  alternates: { canonical: "https://baitengfei.com/my-products" },
  openGraph: {
    type: "website",
    url: "https://baitengfei.com/my-products",
    title: "我的产品 | 白腾飞",
    description: "白腾飞开发的软硬件产品，包括育儿应用「宝宝时刻」和密室逃脱游戏「逃脱智能的房子」。",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "白腾飞的产品" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "我的产品 | 白腾飞",
    description: "白腾飞开发的软硬件产品，包括育儿应用「宝宝时刻」和密室逃脱游戏「逃脱智能的房子」。",
    images: ["/og-image.png"],
  },
};

export default async function MyProductsPage() {
  const productsPosts = getFilteredPostsData('app');
  
  return (
    <main>
      <Breadcrumb currentPage="我的产品" />
      <PostsList posts={productsPosts} />
    </main>
  );
}
