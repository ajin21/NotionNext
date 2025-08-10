/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* ===== 原始基础样式 ===== */
      
      /* 1. 暗色模式背景色 */
      .dark body {
        background-color: black;
      }

      /* 2. 底部按钮组阴影 */
      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      /* ===== 图标优化模块 ===== */
      
      /* 1. 修复 Notion 自定义 emoji 显示问题 */
      img[data-src*="notion://custom_emoji"],
      img[src*="notion://custom_emoji"] {
        display: inline-block !important;   /* 强制显示 */
        width: 24px !important;             /* 固定宽度 */
        height: 24px !important;            /* 固定高度 */
        object-fit: contain;                /* 保持比例 */
        vertical-align: middle;             /* 垂直居中 */
        margin-right: 8px;                  /* 右边距 */
        border-radius: 4px;                 /* 圆角 */
        background: rgba(16, 185, 129, 0.1); /* 淡绿背景 */
        padding: 2px;                       /* 内边距 */
        transition: all 0.2s ease;         /* 平滑过渡 */
      }

      /* 2. 图标悬停效果 */
      img[data-src*="notion://custom_emoji"]:hover,
      img[src*="notion://custom_emoji"]:hover {
        background: rgba(16, 185, 129, 0.15); /* 悬停时背景稍深 */
        transform: scale(1.05);             /* 轻微放大 */
      }

      /* 3. 暗色模式图标样式 */
      .dark img[data-src*="notion://custom_emoji"],
      .dark img[src*="notion://custom_emoji"] {
        background: rgba(52, 211, 153, 0.12); /* 暗色模式背景 */
      }

      .dark img[data-src*="notion://custom_emoji"]:hover,
      .dark img[src*="notion://custom_emoji"]:hover {
        background: rgba(52, 211, 153, 0.18); /* 暗色模式悬停背景 */
      }

      /* 4. 通用图标样式优化 */
      .icon,
      .logo-icon,
      [class*="icon"] {
        display: inline-block;              /* 行内块元素 */
        vertical-align: middle;             /* 垂直居中 */
        transition: all 0.2s ease;         /* 平滑过渡 */
      }

      /* 5. SVG 图标优化 */
      svg.icon,
      .icon svg {
        width: 24px;                        /* 标准图标大小 */
        height: 24px;                       /* 标准图标大小 */
        fill: currentColor;                 /* 使用当前文字颜色 */
        stroke: currentColor;               /* 使用当前文字颜色 */
      }

      /* 6. 图标加载失败时的后备样式 */
      img[data-src*="notion://custom_emoji"][src*="data:image/gif"] {
        background: linear-gradient(135deg, #10B981, #059669); /* 渐变背景 */
        position: relative;                 /* 相对定位 */
      }

      img[data-src*="notion://custom_emoji"][src*="data:image/gif"]::after {
        content: '📚';                      /* 书本 emoji 作为后备 */
        position: absolute;                 /* 绝对定位 */
        top: 50%;                          /* 垂直居中 */
        left: 50%;                         /* 水平居中 */
        transform: translate(-50%, -50%);  /* 居中对齐 */
        font-size: 14px;                   /* 字体大小 */
      }

      /* ===== 以下为可选样式模块 ===== */
      /* 需要时可以逐个添加，每个模块都有详细注释 */

      /* ===== 超链接模块 - 丝滑动画悬停效果 ===== */
      
      /* 1. 文章内容区域的超链接基础样式 */
      .notion-page a,
      .notion-text a,
      article a,
      .post-content a {
        color: #10B981;                      /* 翡翠绿 */
        text-decoration: none;               /* 去除默认下划线 */
        position: relative;                  /* 为伪元素定位 */
        display: inline;                     /* 行内元素，保持文字流 */
        padding: 2px 4px;                    /* 适度内边距 */
        margin: 0;                          /* 无外边距 */
        border-radius: 4px;                 /* 圆角 */
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 丝滑缓动 */
        vertical-align: baseline;            /* 基线对齐 */
        line-height: 1;                     /* 固定行高避免跳动 */
        background: transparent;             /* 透明背景 */
        overflow: hidden;                    /* 隐藏溢出 */
      }

      /* 2. 动态下划线 - 从左到右展开 */
      .notion-page a::before,
      .notion-text a::before,
      article a::before,
      .post-content a::before {
        content: '';                         /* 创建伪元素 */
        position: absolute;                  /* 绝对定位 */
        bottom: 2px;                        /* 底部位置 */
        left: 4px;                          /* 对齐内边距 */
        width: 0;                           /* 初始宽度为0 */
        height: 2px;                        /* 下划线高度 */
        background: linear-gradient(90deg, #10B981, #34D399, #6EE7B7); /* 三色渐变 */
        transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 丝滑展开 */
        border-radius: 1px;                 /* 圆角下划线 */
        box-shadow: 0 0 8px rgba(16, 185, 129, 0.3); /* 发光效果 */
      }

      /* 3. 背景动画 - 从中心向外扩展 */
      .notion-page a::after,
      .notion-text a::after,
      article a::after,
      .post-content a::after {
        content: '';                         /* 创建伪元素 */
        position: absolute;                  /* 绝对定位 */
        top: 0;                             /* 顶部对齐 */
        left: 50%;                          /* 水平居中 */
        width: 0;                           /* 初始宽度为0 */
        height: 100%;                       /* 全高 */
        background: linear-gradient(135deg, 
          rgba(16, 185, 129, 0.1) 0%, 
          rgba(52, 211, 153, 0.08) 50%, 
          rgba(110, 231, 183, 0.06) 100%
        );                                  /* 渐变背景 */
        border-radius: 4px;                 /* 圆角 */
        transform: translateX(-50%) scaleX(0); /* 居中并缩放为0 */
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 缩放动画 */
        z-index: -1;                        /* 置于文字下方 */
      }

      /* 4. 悬停时的主要效果 */
      .notion-page a:hover,
      .notion-text a:hover,
      article a:hover,
      .post-content a:hover {
        color: #059669;                     /* 深翡翠绿 */
        transform: translateY(-1px);        /* 轻微上浮 */
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); /* 柔和阴影 */
      }

      /* 5. 悬停时下划线展开 */
      .notion-page a:hover::before,
      .notion-text a:hover::before,
      article a:hover::before,
      .post-content a:hover::before {
        width: calc(100% - 8px);            /* 展开到几乎全宽 */
      }

      /* 6. 悬停时背景展开 */
      .notion-page a:hover::after,
      .notion-text a:hover::after,
      article a:hover::after,
      .post-content a:hover::after {
        transform: translateX(-50%) scaleX(1); /* 从中心展开 */
      }

      /* 7. 激活状态（点击时） */
      .notion-page a:active,
      .notion-text a:active,
      article a:active,
      .post-content a:active {
        transform: translateY(0);           /* 按下时回到原位 */
        transition: transform 0.1s ease;   /* 快速响应 */
      }

      /* 7. 暗色模式下的超链接样式 */
      .dark .notion-page a,
      .dark .notion-text a,
      .dark article a,
      .dark .post-content a {
        color: #34D399;                     /* 亮翡翠绿 */
      }

      .dark .notion-page a::before,
      .dark .notion-text a::before,
      .dark article a::before,
      .dark .post-content a::before {
        background: linear-gradient(90deg, #34D399, #10B981); /* 暗色模式渐变 */
      }

      .dark .notion-page a::after,
      .dark .notion-text a::after,
      .dark article a::after,
      .dark .post-content a::after {
        background: rgba(52, 211, 153, 0.12); /* 暗色模式背景 */
      }

      .dark .notion-page a:hover,
      .dark .notion-text a:hover,
      .dark article a:hover,
      .dark .post-content a:hover {
        color: #6EE7B7;                     /* 更亮的绿色 */
        box-shadow: 0 4px 12px rgba(52, 211, 153, 0.2); /* 暗色模式阴影 */
      }

      /* 8. 特殊链接类型优化 */
      /* 导航链接 */
      nav a,
      .nav-link {
        transition: all 0.25s ease;         /* 导航链接稍快的动画 */
      }

      /* 按钮样式的链接 */
      .btn-link,
      .button-link {
        padding: 8px 16px;                  /* 更大的内边距 */
        border-radius: 8px;                 /* 更大的圆角 */
      }

      .btn-link:hover,
      .button-link:hover {
        transform: translateY(-2px);        /* 更明显的上移效果 */
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.25); /* 更强的阴影 */
      }

      /* ===== 引用块模块 - 简洁绿色边框 ===== */
      
      /* 1. 引用块基础样式 - 更自然融入 */
      blockquote {
        background: #f9fafb;                    /* 简洁的浅灰背景 */
        border-left: 3px solid #22C55E;        /* 稍细的绿色边框 */
        padding: 16px 20px;                    /* 适中的内边距 */
        margin: 20px 0;                        /* 标准间距 */
        border-radius: 0 6px 6px 0;            /* 小圆角 */
        font-style: italic;                    /* 斜体文字 */
        color: #4b5563;                        /* 中性灰色文字 */
        position: relative;                    /* 为伪元素定位 */
      }

      /* 2. 暗色模式下的引用块样式 */
      .dark blockquote {
        background: #1f2937;                   /* 暗色背景 */
        border-left-color: #34D399;           /* 更新为翡翠绿边框 */
        color: #d1d5db;                       /* 浅色文字 */
      }

      /* ===== 一级标题模块 - 静态美化效果 ===== */
      
      /* 1. 一级标题基础样式 - 无动画版本 */
      h1 {
        font-size: 2.5rem;                   /* 更大的字号 */
        font-weight: 800;                    /* 粗体 */
        color: #1f2937;                      /* 深灰色文字 */
        margin: 40px 0 32px 0;               /* 更大的上下间距 */
        padding: 20px 0 24px 0;              /* 内边距 */
        position: relative;                  /* 为伪元素定位 */
        line-height: 1.2;                   /* 行高 */
        letter-spacing: -0.025em;            /* 字母间距 */
        background: linear-gradient(135deg, #1f2937 0%, #374151 100%); /* 文字渐变 */
        background-clip: text;               /* 渐变裁剪到文字 */
        -webkit-background-clip: text;       /* Safari 兼容 */
        -webkit-text-fill-color: transparent; /* 透明文字显示渐变 */
      }

      /* 2. 标题装饰条 - 静态渐变线条 */
      h1::after {
        content: '';                         /* 创建伪元素 */
        position: absolute;                  /* 绝对定位 */
        bottom: 0;                          /* 底部对齐 */
        left: 0;                            /* 从左侧开始 */
        width: 120px;                       /* 固定宽度 */
        height: 4px;                        /* 装饰条高度 */
        background: linear-gradient(90deg, 
          #10B981 0%, 
          #059669 50%, 
          #047857 100%
        );                                  /* 三色渐变 */
        border-radius: 2px;                 /* 圆角 */
        box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3); /* 发光效果 */
      }

      /* 3. 暗色模式下的一级标题 */
      .dark h1 {
        background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%); /* 暗色模式文字渐变 */
        background-clip: text;              /* 渐变裁剪到文字 */
        -webkit-background-clip: text;      /* Safari 兼容 */
        -webkit-text-fill-color: transparent; /* 透明文字显示渐变 */
      }

      .dark h1::after {
        background: linear-gradient(90deg, 
          #34D399 0%, 
          #10B981 50%, 
          #059669 100%
        );                                  /* 暗色模式装饰条渐变 */
        box-shadow: 0 2px 8px rgba(52, 211, 153, 0.4); /* 暗色模式发光 */
      }

      /* 4. 响应式优化 */
      @media (max-width: 768px) {
        h1 {
          font-size: 2rem;                  /* 移动端较小字号 */
          margin: 24px 0 20px 0;           /* 移动端较小间距 */
          padding: 16px 0 20px 0;          /* 移动端内边距 */
        }
        
        h1::after {
          width: 80px;                     /* 移动端较短装饰条 */
        }
      }

      /* ===== 导航栏字体样式优化 ===== */
      
      /* 1. 导航栏基础样式优化 */
      nav,
      .nav,
      .navbar,
      header nav {
        font-weight: 400;                   /* 正常粗细，不加粗 */
        letter-spacing: 0.025em;            /* 轻微字母间距 */
      }

      /* 2. 导航链接样式 */
      nav a,
      .nav a,
      .navbar a,
      header nav a,
      .nav-link {
        font-weight: 400;                   /* 正常粗细，不加粗 */
        color: #6b7280;                     /* 更淡的中灰色 */
        text-decoration: none;              /* 去除下划线 */
        padding: 8px 12px;                  /* 内边距 */
        border-radius: 6px;                 /* 圆角 */
        transition: all 0.2s ease;         /* 平滑过渡 */
        position: relative;                 /* 为伪元素定位 */
      }

      /* 3. 导航链接悬停效果 */
      nav a:hover,
      .nav a:hover,
      .navbar a:hover,
      header nav a:hover,
      .nav-link:hover {
        color: #10B981;                     /* 翡翠绿 */
        background-color: rgba(16, 185, 129, 0.08); /* 淡绿背景 */
        transform: translateY(-1px);        /* 轻微上移 */
      }

      /* 4. 当前页面导航项 */
      nav a.active,
      .nav a.active,
      .navbar a.active,
      header nav a.active,
      .nav-link.active {
        color: #059669;                     /* 深翡翠绿 */
        background-color: rgba(16, 185, 129, 0.12); /* 稍深的背景 */
        font-weight: 500;                   /* 激活状态稍微加粗一点 */
      }

      /* 5. 暗色模式导航样式 */
      .dark nav a,
      .dark .nav a,
      .dark .navbar a,
      .dark header nav a,
      .dark .nav-link {
        color: #9ca3af;                     /* 更淡的浅灰色 */
      }

      .dark nav a:hover,
      .dark .nav a:hover,
      .dark .navbar a:hover,
      .dark header nav a:hover,
      .dark .nav-link:hover {
        color: #34D399;                     /* 亮翡翠绿 */
        background-color: rgba(52, 211, 153, 0.12); /* 暗色模式背景 */
      }

      .dark nav a.active,
      .dark .nav a.active,
      .dark .navbar a.active,
      .dark header nav a.active,
      .dark .nav-link.active {
        color: #6EE7B7;                     /* 更亮的绿色 */
        background-color: rgba(52, 211, 153, 0.15); /* 暗色模式激活背景 */
        font-weight: 500;                   /* 暗色模式激活状态稍微加粗 */
      }

      /* ===== 统计板块样式优化 ===== */
      
      /* 1. 统计容器基础样式 */
      .stats-container,
      .statistics,
      .footer-stats,
      .busuanzi,
      .powered-by {
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); /* 渐变背景 */
        border: 1px solid #e2e8f0;         /* 边框 */
        border-radius: 12px;                /* 圆角 */
        padding: 20px 24px;                 /* 内边距 */
        margin: 16px 0;                     /* 外边距 */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); /* 柔和阴影 */
        text-align: center;                 /* 居中对齐 */
      }

      /* 2. 统计数字样式 */
      .stats-container .number,
      .statistics .number,
      .busuanzi .number,
      .stats-number {
        font-size: 1.5rem;                  /* 大字号 */
        font-weight: 700;                   /* 粗体 */
        color: #10B981;                     /* 翡翠绿 */
        margin: 0 4px;                      /* 左右间距 */
      }

      /* 3. 统计标签样式 */
      .stats-container .label,
      .statistics .label,
      .busuanzi .label,
      .stats-label {
        font-size: 0.875rem;                /* 小字号 */
        color: #6b7280;                     /* 中灰色 */
        font-weight: 500;                   /* 中等粗细 */
        margin: 0 2px;                      /* 间距 */
      }

      /* 4. 统计图标样式 */
      .stats-container .icon,
      .statistics .icon,
      .busuanzi .icon,
      .stats-icon {
        color: #10B981;                     /* 翡翠绿图标 */
        margin-right: 6px;                  /* 右边距 */
        font-size: 1.1rem;                  /* 稍大的图标 */
      }

      /* 5. Powered by 样式 */
      .powered-by {
        font-size: 0.875rem;                /* 小字号 */
        color: #9ca3af;                     /* 浅灰色 */
        background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); /* 更淡的背景 */
        border-color: #e5e7eb;              /* 淡边框 */
      }

      .powered-by a {
        color: #10B981;                     /* 翡翠绿链接 */
        text-decoration: none;              /* 去除下划线 */
        font-weight: 500;                   /* 中等粗细 */
      }

      .powered-by a:hover {
        color: #059669;                     /* 悬停深绿色 */
        text-decoration: underline;         /* 悬停下划线 */
      }

      /* 6. 暗色模式统计样式 */
      .dark .stats-container,
      .dark .statistics,
      .dark .footer-stats,
      .dark .busuanzi,
      .dark .powered-by {
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%); /* 暗色渐变背景 */
        border-color: #374151;              /* 暗色边框 */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 暗色阴影 */
      }

      .dark .stats-container .number,
      .dark .statistics .number,
      .dark .busuanzi .number,
      .dark .stats-number {
        color: #34D399;                     /* 暗色模式翡翠绿 */
      }

      .dark .stats-container .label,
      .dark .statistics .label,
      .dark .busuanzi .label,
      .dark .stats-label {
        color: #9ca3af;                     /* 暗色模式中灰色 */
      }

      .dark .stats-container .icon,
      .dark .statistics .icon,
      .dark .busuanzi .icon,
      .dark .stats-icon {
        color: #34D399;                     /* 暗色模式翡翠绿图标 */
      }

      .dark .powered-by {
        background: linear-gradient(135deg, #111827 0%, #0f172a 100%); /* 更暗的背景 */
        color: #6b7280;                     /* 暗色文字 */
        border-color: #374151;              /* 暗色边框 */
      }

      .dark .powered-by a {
        color: #34D399;                     /* 暗色模式翡翠绿链接 */
      }

      .dark .powered-by a:hover {
        color: #6EE7B7;                     /* 暗色模式悬停亮绿色 */
      }

    `}</style>
  )
}

export { Style }
