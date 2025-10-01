import Link from "next/link";

interface BreadcrumbProps {
  currentPage: string;
  parentPage?: { name: string; href: string };
  currentPageHref?: string; // 当前页面的链接，如果提供则当前页面也可点击
}

export default function Breadcrumb({ currentPage, parentPage, currentPageHref }: BreadcrumbProps) {
  // 截断过长的标题
  const truncateTitle = (title: string, maxLength: number = 30) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  };

  return (
    <nav className="mb-8">
      <div className="flex items-center text-base" style={{maxWidth: '700px', margin: '0 auto'}}>
        <Link 
          href="/" 
          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
          首页
        </Link>
        
        {parentPage && (
          <>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
            <Link 
              href={parentPage.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {parentPage.name}
            </Link>
          </>
        )}
        
        <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
        </svg>
        {currentPageHref ? (
          <Link 
            href={currentPageHref}
            className="text-gray-600 hover:text-gray-900 transition-colors" 
            title={currentPage}
          >
            {truncateTitle(currentPage)}
          </Link>
        ) : (
          <span className="text-gray-900 font-medium" title={currentPage}>
            {truncateTitle(currentPage)}
          </span>
        )}
      </div>
    </nav>
  );
}