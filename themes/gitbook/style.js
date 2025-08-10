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

      /* ===== 超链接模块 - 更好看的绿色 + 悬停下划线 ===== */
      
      /* 1. 文章内容区域的超链接基础样式 */
      .notion-page a,
      .notion-text a,
      article a,
      .post-content a {
        color: #10B981;              /* 更好看的翡翠绿 */
        text-decoration: none;       /* 去除默认下划线 */
        transition: all 0.2s ease;  /* 平滑过渡动画 */
      }

      /* 2. 超链接悬停时的效果 */
      .notion-page a:hover,
      .notion-text a:hover,
      article a:hover,
      .post-content a:hover {
        color: #059669;              /* 悬停时变为深翡翠绿 */
        text-decoration: underline;  /* 悬停时显示下划线 */
        text-underline-offset: 3px;  /* 下划线与文字的距离 */
        text-decoration-color: #10B981; /* 下划线颜色 */
        text-decoration-thickness: 2px; /* 下划线粗细 */
      }

      /* 3. 暗色模式下的超链接样式 */
      .dark .notion-page a,
      .dark .notion-text a,
      .dark article a,
      .dark .post-content a {
        color: #34D399;              /* 暗色模式下使用亮翡翠绿 */
      }

      .dark .notion-page a:hover,
      .dark .notion-text a:hover,
      .dark article a:hover,
      .dark .post-content a:hover {
        color: #6EE7B7;              /* 暗色模式悬停时更亮的绿色 */
        text-decoration: underline;  /* 悬停时显示下划线 */
        text-underline-offset: 3px;  /* 下划线与文字的距离 */
        text-decoration-color: #34D399; /* 暗色模式下划线颜色 */
        text-decoration-thickness: 2px; /* 下划线粗细 */
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
        border-left-color: #4ADE80;           /* 浅绿色边框 */
        color: #d1d5db;                       /* 浅色文字 */
      }

    `}</style>
  )
}

export { Style }
