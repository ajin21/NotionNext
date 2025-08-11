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

      /* ===== 以下为可选样式模块 ===== */
      /* 需要时可以逐个添加，每个模块都有详细注释 */

      /* ===== 超链接模块 - 平滑悬停动画 ===== */
      
      /* 1. 文章内容区域的超链接基础样式 */
      .notion-page a,
      .notion-text a,
      article a,
      .post-content a {
        color: #10B981;                      /* 翡翠绿 */
        text-decoration: none;               /* 去除默认下划线 */
        position: relative;                  /* 为伪元素定位 */
        display: inline;                     /* 行内元素，保持文字流 */
        padding: 2px 6px;                    /* 适中的内边距 */
        border-radius: 8px;                  /* 圆角矩形 */
        transition: all 0.3s ease-out;      /* 平滑缓动函数 */
        background: transparent;             /* 透明背景 */
        vertical-align: baseline;            /* 确保垂直对齐 */
        line-height: inherit;                /* 继承行高 */
      }

      /* 2. 下划线动画效果 - 从左到右展开 */
      .notion-page a::before,
      .notion-text a::before,
      article a::before,
      .post-content a::before {
        content: '';                         /* 创建伪元素 */
        position: absolute;                  /* 绝对定位 */
        bottom: 0;                          /* 底部对齐 */
        left: 0;                            /* 从左开始 */
        width: 0;                           /* 初始宽度为0 */
        height: 2px;                        /* 下划线高度 */
        background: linear-gradient(90deg, #10B981, #059669); /* 渐变下划线 */
        transition: width 0.3s ease-out;    /* 丝滑展开，无回弹 */
        border-radius: 1px;                 /* 圆角下划线 */
      }

      /* 3. 圆角矩形背景动画效果 - 平滑展开 */
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
        background: rgba(16, 185, 129, 0.12); /* 稍深的淡绿背景 */
        border-radius: 8px;                 /* 更大的圆角 */
        transform: translateX(-50%);        /* 居中对齐 */
        transition: width 0.3s ease-out;    /* 平滑展开效果 */
        z-index: -1;                        /* 置于文字下方 */
      }

      /* 4. 悬停时的效果 */
      .notion-page a:hover,
      .notion-text a:hover,
      article a:hover,
      .post-content a:hover {
        color: #059669;                     /* 深翡翠绿 */
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15); /* 柔和阴影 */
      }

      /* 5. 悬停时下划线展开 */
      .notion-page a:hover::before,
      .notion-text a:hover::before,
      article a:hover::before,
      .post-content a:hover::before {
        width: 100%;                        /* 下划线展开到全宽 */
      }

      /* 6. 悬停时背景展开 */
      .notion-page a:hover::after,
      .notion-text a:hover::after,
      article a:hover::after,
      .post-content a:hover::after {
        width: calc(100% + 8px);            /* 背景展开，稍微超出文字 */
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

      /* ===== 引用块模块 - 修复颜色显示 ===== */
      
      /* 1. 引用块基础样式 - 确保颜色正确显示 */
      blockquote {
        background: rgba(16, 185, 129, 0.05) !important;  /* 淡绿色背景，强制应用 */
        border-left: 4px solid #10B981 !important;        /* 翡翠绿边框，强制应用 */
        padding: 16px 20px;                               /* 适中的内边距 */
        margin: 20px 0;                                   /* 标准间距 */
        border-radius: 0 8px 8px 0;                       /* 圆角 */
        font-style: normal;                               /* 正常字体样式 */
        color: #374151 !important;                        /* 深灰色文字，强制应用 */
        position: relative;                               /* 为伪元素定位 */
        border-top: none;                                 /* 移除顶部边框 */
        border-right: none;                               /* 移除右边框 */
        border-bottom: none;                              /* 移除底部边框 */
      }

      /* 2. 暗色模式下的引用块样式 */
      .dark blockquote {
        background: rgba(52, 211, 153, 0.08) !important; /* 暗色模式淡绿背景，强制应用 */
        border-left-color: #34D399 !important;           /* 暗色模式翡翠绿边框，强制应用 */
        color: #e5e7eb !important;                       /* 暗色模式浅色文字，强制应用 */
      }

      /* ===== 一级标题模块 - 圆角矩形背景设计 ===== */
      
      /* 1. 一级标题基础样式 - 参考设计图的圆角矩形效果 */
      h1 {
        font-size: 2.25rem;                 /* 适中的字号 */
        font-weight: 600;                   /* 中等粗体 */
        color: #ef4444 !important;          /* 红色文字，强制应用 */
        margin: 32px 0 24px 0;              /* 适中的上下间距 */
        padding: 20px 32px;                 /* 内边距 */
        position: relative;                 /* 为伪元素定位 */
        line-height: 1.3;                  /* 行高 */
        letter-spacing: 0.02em;             /* 轻微字母间距 */
        display: inline-block;              /* 行内块元素，适应内容宽度 */
        background: #f1f5f9;                /* 浅灰背景 */
        border: 3px solid #a7f3d0;         /* 淡绿色边框 */
        border-radius: 20px;                /* 大圆角 */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 柔和阴影 */
        /* 移除渐变文字效果 */
        background-clip: initial;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
      }

      /* 2. 移除装饰条 */
      h1::after {
        display: none;                      /* 隐藏装饰条 */
      }

      /* 3. 暗色模式下的一级标题 */
      .dark h1 {
        color: #ef4444 !important;          /* 暗色模式保持红色文字 */
        background: #1e293b;                /* 暗色背景 */
        border-color: #34d399;              /* 暗色模式绿色边框 */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* 暗色模式阴影 */
        /* 移除渐变文字效果 */
        background-clip: initial;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
      }

      .dark h1::after {
        display: none;                      /* 暗色模式也隐藏装饰条 */
      }

      /* 4. 响应式优化 */
      @media (max-width: 768px) {
        h1 {
          font-size: 1.875rem;              /* 移动端较小字号 */
          margin: 24px 0 20px 0;           /* 移动端较小间距 */
          padding: 16px 24px;              /* 移动端内边距 */
          border-radius: 16px;             /* 移动端较小圆角 */
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

      /* ===== 代码块模块 - 绿色主题 ===== */
      
      /* 1. 行内代码样式 */
      code {
        background: rgba(16, 185, 129, 0.1);   /* 淡绿色背景 */
        color: #059669;                        /* 主绿色文字 */
        padding: 2px 6px;                      /* 内边距 */
        border-radius: 4px;                    /* 圆角 */
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; /* 等宽字体 */
        font-size: 0.875em;                   /* 稍小的字号 */
        font-weight: 500;                     /* 中等粗细 */
        border: 1px solid rgba(16, 185, 129, 0.2); /* 淡绿色边框 */
      }

      /* 2. 代码块容器样式 */
      pre {
        background: rgba(16, 185, 129, 0.08);  /* 更淡的绿色背景 */
        border: 1px solid rgba(16, 185, 129, 0.15); /* 淡绿色边框 */
        border-radius: 8px;                    /* 圆角 */
        padding: 16px 20px;                    /* 内边距 */
        margin: 16px 0;                        /* 外边距 */
        overflow-x: auto;                      /* 水平滚动 */
        position: relative;                    /* 为伪元素定位 */
      }

      /* 3. 代码块内的代码样式 */
      pre code {
        background: transparent;               /* 透明背景 */
        color: #047857;                        /* 深绿色文字 */
        padding: 0;                           /* 去除内边距 */
        border: none;                         /* 去除边框 */
        border-radius: 0;                     /* 去除圆角 */
        font-size: 0.875rem;                  /* 代码块字号 */
        line-height: 1.6;                    /* 行高 */
      }

      /* 4. 暗色模式下的代码样式 */
      .dark code {
        background: rgba(52, 211, 153, 0.15); /* 暗色模式淡绿背景 */
        color: #34D399;                       /* 暗色模式亮绿文字 */
        border-color: rgba(52, 211, 153, 0.25); /* 暗色模式边框 */
      }

      .dark pre {
        background: rgba(52, 211, 153, 0.1);  /* 暗色模式代码块背景 */
        border-color: rgba(52, 211, 153, 0.2); /* 暗色模式边框 */
      }

      .dark pre code {
        color: #6EE7B7;                       /* 暗色模式更亮的绿色 */
      }

      /* 5. 特殊代码块类型 */
      .notion-code,
      .code-block {
        background: rgba(16, 185, 129, 0.08);  /* 统一绿色背景 */
        border: 1px solid rgba(16, 185, 129, 0.15);
        border-radius: 8px;
        padding: 16px 20px;
        margin: 16px 0;
      }

      .dark .notion-code,
      .dark .code-block {
        background: rgba(52, 211, 153, 0.1);
        border-color: rgba(52, 211, 153, 0.2);
      }

      /* ===== 二三级标题样式完全重置 ===== */
      
      /* 完全重置二三级标题为浏览器默认样式 */
      h2, h3, h4, h5, h6 {
        all: revert !important;               /* 完全重置所有样式为浏览器默认 */
        font-family: inherit !important;     /* 保持字体继承 */
        color: inherit !important;           /* 保持颜色继承 */
      }

      /* 暗色模式下也保持默认样式 */
      .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
        all: revert !important;               /* 暗色模式下也完全重置 */
        font-family: inherit !important;     /* 保持字体继承 */
        color: inherit !important;           /* 保持颜色继承 */
      }

      /* 确保移除所有可能的伪元素 */
      h2::before, h2::after,
      h3::before, h3::after,
      h4::before, h4::after,
      h5::before, h5::after,
      h6::before, h6::after {
        display: none !important;            /* 强制隐藏所有伪元素 */
        content: none !important;            /* 移除伪元素内容 */
      }

      /* 暗色模式下也移除伪元素 */
      .dark h2::before, .dark h2::after,
      .dark h3::before, .dark h3::after,
      .dark h4::before, .dark h4::after,
      .dark h5::before, .dark h5::after,
      .dark h6::before, .dark h6::after {
        display: none !important;            /* 强制隐藏所有伪元素 */
        content: none !important;            /* 移除伪元素内容 */
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
