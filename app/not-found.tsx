import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", minHeight: "60vh" }}>
      <h1 className="text-xl font-normal">404 - 页面不存在</h1>
      <p className="text-gray-500 mt-2">您访问的页面不存在或已被移除。</p>
      <Link href="/" className="mt-4 inline-block underline">
        返回首页
      </Link>
    </main>
  );
}
