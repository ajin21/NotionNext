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

      /* ===== 超链接模块 - 高级丝滑悬停效果 ===== */
      
      /* 1. 文章内容区域的超链接基础样式 */
      .notion-page a,
      .notion-text a,
      article a,
      .post-content a {
        color: #10B981;                      /* 翡翠绿 */
        text-decoration: none;               /* 去除默认下划线 */
        position: relative;                  /* 为伪元素定位 */
        display: inline-block;               /* 行内块元素 */
        padding: 2px 4px;                    /* 基础内边距 */
        border-radius: 6px;                  /* 圆角 */
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 丝滑缓动函数 */
        background: transparent;             /* 透明背景 */
        overflow: hidden;                    /* 隐藏溢出 */
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
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* 宽度动画 */
        border-radius: 1px;                 /* 圆角下划线 */
      }

      /* 3. 圆角矩形背景动画效果 */
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
        background: rgba(16, 185, 129, 0.08); /* 淡绿背景 */
        border-radius: 6px;                 /* 圆角 */
        transform: translateX(-50%);        /* 居中对齐 */
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 宽度动画 */
        z-index: -1;                        /* 置于文字下方 */
      }

      /* 4. 悬停时的效果 */
      .notion-page a:hover,
      .notion-text a:hover,
      article a:hover,
      .post-content a:hover {
        color: #059669;                     /* 深翡翠绿 */
        transform: translateY(-1px);        /* 轻微上移 */
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

      /* ===== 一级标题模块 - 翡翠绿美化 ===== */
      
      /* 1. 一级标题基础样式 */
      h1 {
        font-size: 2.25rem;                   /* 大字号 */
        font-weight: 800;                     /* 粗体 */
        color: #1f2937;                       /* 深灰色文字 */
        margin: 32px 0 24px 0;                /* 上下间距 */
        padding-bottom: 16px;                 /* 底部内边距 */
        border-bottom: 2px solid #e5e7eb;     /* 底部边框线 */
        position: relative;                   /* 为伪元素定位 */
        line-height: 1.2;                    /* 行高 */
      }

      /* 2. 一级标题装饰条 */
      h1::after {
        content: '';                          /* 创建伪元素 */
        position: absolute;                   /* 绝对定位 */
        bottom: -2px;                         /* 位于底部边框上 */
        left: 0;                             /* 从左侧开始 */
        width: 80px;                         /* 装饰条宽度 */
        height: 4px;                         /* 装饰条高度 */
        background: linear-gradient(90deg, #10B981, #059669); /* 翡翠绿渐变 */
        border-radius: 2px;                  /* 圆角 */
      }

      /* 3. 暗色模式下的一级标题 */
      .dark h1 {
        color: #f9fafb;                      /* 浅色文字 */
        border-bottom-color: #374151;        /* 暗色边框 */
      }

      .dark h1::after {
        background: linear-gradient(90deg, #34D399, #10B981); /* 暗色模式渐变 */
      }

    `}</style>
  )
}

export { Style }
