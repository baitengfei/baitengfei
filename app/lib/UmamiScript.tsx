'use client';

import Script from 'next/script';

interface UmamiScriptProps {
  src?: string;
  websiteId?: string;
}

export default function UmamiScript({ 
  src = process.env.NEXT_PUBLIC_UMAMI_URL || '',
  websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''
}: UmamiScriptProps) {
  // 开发环境不加载统计脚本
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  // 如果没有配置 Umami，则不渲染脚本
  if (!src || !websiteId) {
    console.warn('Umami: 缺少必要的配置，请检查 NEXT_PUBLIC_UMAMI_URL 和 NEXT_PUBLIC_UMAMI_WEBSITE_ID 环境变量');
    return null;
  }

  return (
    <Script
      strategy="afterInteractive"
      src={src}
      data-website-id={websiteId}
      data-do-not-track="true"
      defer
    />
  );
} 