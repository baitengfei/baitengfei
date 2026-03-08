"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{ padding: "2rem", minHeight: "60vh" }}>
      <h1 className="text-xl font-normal">出错了</h1>
      <p className="text-gray-500 mt-2">页面加载时发生了错误，请稍后再试。</p>
      <div className="mt-4 flex gap-4">
        <button onClick={reset} className="underline">
          重试
        </button>
        <Link href="/" className="underline">
          返回首页
        </Link>
      </div>
    </main>
  );
}
