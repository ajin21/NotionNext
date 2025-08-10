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

            /* ===== 更多样式美化 ===== */

      /* 页面整体美化 */
      #theme-gitbook {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      }

      /* 滚动条美化 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #1d4ed8, #7c3aed);
      }

      .dark ::-webkit-scrollbar-track {
        background: #374151;
      }

      .dark ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #60a5fa, #a78bfa);
      }

      /* 代码块美化 */
      pre {
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;
      }

      pre::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
      }

      .dark pre {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border-color: #475569;
      }

      code {
        background: rgba(59, 130, 246, 0.1);
        color: #1e40af;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
        font-size: 0.9em;
      }

      .dark code {
        background: rgba(96, 165, 250, 0.2);
        color: #93c5fd;
      }

      /* 引用块美化 */
      blockquote {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
        border-left: 4px solid #3b82f6;
        padding: 16px 20px;
        margin: 20px 0;
        border-radius: 0 8px 8px 0;
        position: relative;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      blockquote::before {
        content: '"';
        font-size: 4em;
        color: rgba(59, 130, 246, 0.2);
        position: absolute;
        top: -10px;
        left: 10px;
        font-family: serif;
      }

      .dark blockquote {
        background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%);
        border-left-color: #60a5fa;
      }

      .dark blockquote::before {
        color: rgba(96, 165, 250, 0.3);
      }

      /* 表格美化 */
      table {
        border-collapse: separate;
        border-spacing: 0;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        margin: 20px 0;
      }

      .dark table {
        background: #1f2937;
      }

      th {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        padding: 16px;
        text-align: left;
        font-weight: 600;
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
        background-color: rgba(59, 130, 246, 0.05);
      }

      .dark tr:hover td {
        background-color: rgba(96, 165, 250, 0.1);
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

      /* 按钮美化 */
      button, .btn {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
      }

      button:hover, .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        background: linear-gradient(135deg, #1d4ed8, #7c3aed);
      }

      /* 输入框美化 */
      input, textarea {
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        padding: 10px 12px;
        transition: all 0.3s ease;
        background: white;
      }

      input:focus, textarea:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        transform: translateY(-1px);
      }

      .dark input, .dark textarea {
        background: #374151;
        border-color: #4b5563;
        color: white;
      }

      .dark input:focus, .dark textarea:focus {
        border-color: #60a5fa;
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
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

      /* 标题美化 */
      h1, h2, h3, h4, h5, h6 {
        position: relative;
        color: #1f2937;
        font-weight: 700;
      }

      .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        color: #f9fafb;
      }

      h1::after, h2::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        border-radius: 2px;
      }

      /* 导航菜单美化 */
      .menu-item {
        transition: all 0.2s ease;
        border-radius: 6px;
        margin: 2px 0;
      }

      .menu-item:hover {
        background: rgba(59, 130, 246, 0.1);
        transform: translateX(4px);
      }

      .dark .menu-item:hover {
        background: rgba(96, 165, 250, 0.15);
      }

      /* 搜索框美化 */
      .search-input {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(59, 130, 246, 0.2);
        border-radius: 25px;
        padding: 12px 20px;
        transition: all 0.3s ease;
      }

      .search-input:focus {
        background: white;
        border-color: #3b82f6;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
      }

      .dark .search-input {
        background: rgba(31, 41, 55, 0.9);
        border-color: rgba(96, 165, 250, 0.3);
        color: white;
      }

      .dark .search-input:focus {
        background: #1f2937;
        border-color: #60a5fa;
      }

      /* 加载动画 */
      .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f4f6;
        border-top: 4px solid #3b82f6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* 标签云美化 */
      .tag-cloud .tag {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        background: linear-gradient(135deg, #f8fafc, #e2e8f0);
        border-radius: 20px;
        color: #475569;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid rgba(59, 130, 246, 0.1);
      }

      .tag-cloud .tag:hover {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      }

      .dark .tag-cloud .tag {
        background: linear-gradient(135deg, #374151, #4b5563);
        color: #d1d5db;
        border-color: rgba(96, 165, 250, 0.2);
      }

      /* 分页按钮美化 */
      .pagination {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin: 30px 0;
      }

      .pagination a, .pagination span {
        padding: 10px 16px;
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid #e5e7eb;
        background: white;
        color: #374151;
      }

      .pagination a:hover {
        background: #3b82f6;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      }

      .pagination .current {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        border-color: transparent;
      }

      .dark .pagination a, .dark .pagination span {
        background: #374151;
        border-color: #4b5563;
        color: #d1d5db;
      }

      .dark .pagination a:hover {
        background: #60a5fa;
        color: #1f2937;
      }

      /* 回到顶部按钮美化 */
      .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        z-index: 1000;
      }

      .back-to-top:hover {
        transform: translateY(-4px) scale(1.1);
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
      }

      /* 文章元信息美化 */
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
        color: #3b82f6;
      }

      .dark .article-meta .meta-item i {
        color: #60a5fa;
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

    `}</style>
  )
}

export { Style }
