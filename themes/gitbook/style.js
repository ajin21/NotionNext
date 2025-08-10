/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      .dark body {
        background-color: black;
      }

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      /* ===== 超链接样式美化 - 主色调 #22C55E ===== */
      
      /* 文章内容区域的超链接 */
      .notion-page a,
      .notion-text a,
      article a,
      .post-content a {
        color: #22C55E;
        text-decoration: none;
        position: relative;
        transition: color 0.2s ease;
      }

      .notion-page a:hover,
      .notion-text a:hover,
      article a:hover,
      .post-content a:hover {
        color: #16A34A;
      }

      /* 暗色模式下的超链接 */
      .dark .notion-page a,
      .dark .notion-text a,
      .dark article a,
      .dark .post-content a {
        color: #4ADE80;
      }

      .dark .notion-page a:hover,
      .dark .notion-text a:hover,
      .dark article a:hover,
      .dark .post-content a:hover {
        color: #22C55E;
      }

      /* 外部链接图标 */
      .notion-page a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):before,
      .notion-text a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):before,
      article a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):before,
      .post-content a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):before {
        content: "🔗";
        font-size: 0.8em;
        margin-right: 4px;
        opacity: 0.7;
      }

      /* 超链接底部滑动线条效果 */
      .notion-page a::after,
      .notion-text a::after,
      article a::after,
      .post-content a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background: #22C55E;
        transition: width 0.3s ease;
      }

      .notion-page a:hover::after,
      .notion-text a:hover::after,
      article a:hover::after,
      .post-content a:hover::after {
        width: 100%;
      }

      .dark .notion-page a::after,
      .dark .notion-text a::after,
      .dark article a::after,
      .dark .post-content a::after {
        background: #4ADE80;
      }



      /* 导航区域的超链接 */
      .nav-link,
      nav a {
        color: #374151;
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .nav-link:hover,
      nav a:hover {
        color: #22C55E;
      }

      .dark .nav-link,
      .dark nav a {
        color: #d1d5db;
      }

      .dark .nav-link:hover,
      .dark nav a:hover {
        color: #4ADE80;
      }

      /* 页脚超链接 */
      footer a {
        color: #6b7280;
        text-decoration: underline;
        transition: color 0.2s ease;
      }

      footer a:hover {
        color: #22C55E;
      }

      .dark footer a {
        color: #9ca3af;
      }

      .dark footer a:hover {
        color: #4ADE80;
      }

      /* ===== 更多样式美化 ===== */

      /* 页面整体美化 */
      #theme-gitbook {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      }

      /* 滚动条美化 - 明显点 */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f5f9;
        border-radius: 3px;
      }

      ::-webkit-scrollbar-thumb {
        background: #94a3b8;
        border-radius: 3px;
        transition: background 0.2s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #64748b;
      }

      .dark ::-webkit-scrollbar-track {
        background: #1e293b;
      }

      .dark ::-webkit-scrollbar-thumb {
        background: #64748b;
      }

      .dark ::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }

      /* 代码块美化 - 简洁设计 */
      pre {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 16px;
        position: relative;
        overflow-x: auto;
        border-left: 4px solid #22C55E;
      }

      .dark pre {
        background: #1e293b;
        border-color: #475569;
        border-left-color: #4ADE80;
      }

      code {
        background: rgba(34, 197, 94, 0.1);
        color: #166534;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
        font-size: 0.9em;
      }

      .dark code {
        background: rgba(74, 222, 128, 0.15);
        color: #4ADE80;
      }

      /* 引用块美化 - 简洁设计 */
      blockquote {
        background: rgba(34, 197, 94, 0.05);
        border-left: 4px solid #22C55E;
        padding: 16px 20px;
        margin: 20px 0;
        border-radius: 0 6px 6px 0;
        font-style: italic;
        color: #374151;
      }

      .dark blockquote {
        background: rgba(74, 222, 128, 0.1);
        border-left-color: #4ADE80;
        color: #d1d5db;
      }

      /* 表格美化 - 简洁设计 */
      table {
        border-collapse: separate;
        border-spacing: 0;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #e5e7eb;
        margin: 20px 0;
      }

      .dark table {
        background: #1f2937;
        border-color: #374151;
      }

      th {
        background: #22C55E;
        color: white;
        padding: 12px 16px;
        text-align: left;
        font-weight: 600;
      }

      .dark th {
        background: #16A34A;
      }

      td {
        padding: 12px 16px;
        border-bottom: 1px solid #e5e7eb;
        transition: background-color 0.2s ease;
      }

      .dark td {
        border-bottom-color: #374151;
      }

      tr:hover td {
        background-color: rgba(34, 197, 94, 0.05);
      }

      .dark tr:hover td {
        background-color: rgba(74, 222, 128, 0.1);
      }

      /* 图片美化 */
      img {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        max-width: 100%;
        height: auto;
      }

      img:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }

      /* 按钮美化 - 简洁设计 */
      button, .btn {
        background: #22C55E;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s ease;
        font-weight: 500;
      }

      button:hover, .btn:hover {
        background: #16A34A;
      }

      /* 输入框美化 - 简洁设计 */
      input, textarea {
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 10px 12px;
        transition: border-color 0.2s ease;
        background: white;
      }

      input:focus, textarea:focus {
        outline: none;
        border-color: #22C55E;
      }

      .dark input, .dark textarea {
        background: #374151;
        border-color: #4b5563;
        color: white;
      }

      .dark input:focus, .dark textarea:focus {
        border-color: #4ADE80;
      }

      /* 卡片阴影美化 */
      .card, .blog-card, .post-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }

      .card:hover, .blog-card:hover, .post-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }

      .dark .card, .dark .blog-card, .dark .post-card {
        background: #1f2937;
        border-color: rgba(255, 255, 255, 0.1);
      }

      /* 标题美化 - 分级设计 */
      h1, h2, h3, h4, h5, h6 {
        position: relative;
        color: #1f2937;
        font-weight: 700;
        line-height: 1.4;
        margin: 24px 0 16px 0;
      }

      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #f9fafb;
      }

      /* 一级标题 - 最突出 */
      h1 {
        font-size: 2.25rem;
        font-weight: 800;
        margin: 32px 0 24px 0;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
      }

      .dark h1 {
        border-bottom-color: #374151;
      }

      h1::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 60px;
        height: 4px;
        background: #22C55E;
        border-radius: 2px;
      }

      .dark h1::after {
        background: #4ADE80;
      }

      /* 二级标题 - 左侧装饰条 */
      h2 {
        font-size: 1.875rem;
        font-weight: 700;
        padding-left: 16px;
        border-left: 4px solid #22C55E;
        margin: 28px 0 20px 0;
      }

      .dark h2 {
        border-left-color: #4ADE80;
      }

      h2::before {
        content: '';
        position: absolute;
        left: -4px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(to bottom, #22C55E, #16A34A);
        border-radius: 2px;
      }

      .dark h2::before {
        background: linear-gradient(to bottom, #4ADE80, #22C55E);
      }

      /* 三级标题 - 简洁圆点 */
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        padding-left: 20px;
        margin: 24px 0 16px 0;
      }

      h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: #22C55E;
        border-radius: 50%;
      }

      .dark h3::before {
        background: #4ADE80;
      }

      /* 四级标题及以下 - 简单样式 */
      h4, h5, h6 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #374151;
      }

      .dark h4, .dark h5, .dark h6 {
        color: #d1d5db;
      }

      h4::before {
        content: '▸';
        color: #22C55E;
        margin-right: 8px;
        font-weight: bold;
      }

      .dark h4::before {
        color: #4ADE80;
      }

      /* 导航菜单美化 - 简洁设计 */
      .menu-item {
        transition: background-color 0.2s ease;
        border-radius: 6px;
        margin: 2px 0;
      }

      .menu-item:hover {
        background: rgba(34, 197, 94, 0.1);
      }

      .dark .menu-item:hover {
        background: rgba(74, 222, 128, 0.15);
      }



      /* 加载动画 - 简洁设计 */
      .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid #f3f4f6;
        border-top: 3px solid #22C55E;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* 标签云美化 - 简洁设计 */
      .tag-cloud .tag {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        background: #f8fafc;
        border-radius: 16px;
        color: #475569;
        text-decoration: none;
        transition: all 0.2s ease;
        border: 1px solid #e2e8f0;
      }

      .tag-cloud .tag:hover {
        background: #22C55E;
        color: white;
        border-color: #22C55E;
      }

      .dark .tag-cloud .tag {
        background: #374151;
        color: #d1d5db;
        border-color: #4b5563;
      }

      .dark .tag-cloud .tag:hover {
        background: #4ADE80;
        color: #1f2937;
        border-color: #4ADE80;
      }

      /* 分页按钮美化 - 简洁设计 */
      .pagination {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin: 30px 0;
      }

      .pagination a, .pagination span {
        padding: 8px 12px;
        border-radius: 6px;
        text-decoration: none;
        transition: all 0.2s ease;
        border: 1px solid #e5e7eb;
        background: white;
        color: #374151;
      }

      .pagination a:hover {
        background: #22C55E;
        color: white;
        border-color: #22C55E;
      }

      .pagination .current {
        background: #22C55E;
        color: white;
        border-color: #22C55E;
      }

      .dark .pagination a, .dark .pagination span {
        background: #374151;
        border-color: #4b5563;
        color: #d1d5db;
      }

      .dark .pagination a:hover {
        background: #4ADE80;
        color: #1f2937;
        border-color: #4ADE80;
      }

      .dark .pagination .current {
        background: #4ADE80;
        color: #1f2937;
        border-color: #4ADE80;
      }

      /* 回到顶部按钮美化 - 简洁设计 */
      .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 48px;
        height: 48px;
        background: #22C55E;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.2s ease;
        z-index: 1000;
      }

      .back-to-top:hover {
        background: #16A34A;
      }

      /* 文章元信息美化 - 简洁设计 */
      .article-meta {
        display: flex;
        gap: 16px;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #e5e7eb;
        margin-bottom: 20px;
      }

      .dark .article-meta {
        border-bottom-color: #374151;
      }

      .article-meta .meta-item {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #6b7280;
        font-size: 0.9em;
      }

      .dark .article-meta .meta-item {
        color: #9ca3af;
      }

      .article-meta .meta-item i {
        color: #22C55E;
      }

      .dark .article-meta .meta-item i {
        color: #4ADE80;
      }

      /* 侧边栏美化 */
      .sidebar {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }

      .dark .sidebar {
        background: rgba(31, 41, 55, 0.8);
      }

      /* 通知/提示框美化 */
      .notification {
        padding: 16px 20px;
        border-radius: 8px;
        margin: 16px 0;
        border-left: 4px solid;
        position: relative;
        overflow: hidden;
      }

      .notification::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.1;
        pointer-events: none;
      }

      .notification.info {
        background: rgba(59, 130, 246, 0.1);
        border-left-color: #3b82f6;
        color: #1e40af;
      }

      .notification.success {
        background: rgba(16, 185, 129, 0.1);
        border-left-color: #10b981;
        color: #065f46;
      }

      .notification.warning {
        background: rgba(245, 158, 11, 0.1);
        border-left-color: #f59e0b;
        color: #92400e;
      }

      .notification.error {
        background: rgba(239, 68, 68, 0.1);
        border-left-color: #ef4444;
        color: #991b1b;
      }

      .dark .notification.info { color: #93c5fd; }
      .dark .notification.success { color: #6ee7b7; }
      .dark .notification.warning { color: #fbbf24; }
      .dark .notification.error { color: #fca5a5; }

      /* ===== 外部链接特殊处理 ===== */
      
      /* 外部链接新窗口打开提示 */
      .notion-page a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after,
      .notion-text a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after,
      article a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after,
      .post-content a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after {
        content: "↗";
        font-size: 0.8em;
        margin-left: 4px;
        opacity: 0.7;
        color: #22C55E;
        font-weight: bold;
      }

      .dark .notion-page a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after,
      .dark .notion-text a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after,
      .dark article a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after,
      .dark .post-content a[href^="http"]:not([href*="localhost"]):not([href*="127.0.0.1"]):after {
        color: #4ADE80;
      }

      /* 外部链接悬停提示 */
      .external-link-tooltip {
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .external-link-tooltip.show {
        opacity: 1;
        transform: translateY(-5px);
      }

      .external-link-tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-top-color: #1f2937;
      }

      .dark .external-link-tooltip {
        background: #374151;
      }

      .dark .external-link-tooltip::after {
        border-top-color: #374151;
      }
    `}</style>
  )
}

export { Style }
