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

      /* ===== 超链接模块 - 绿色主题 + 流动效果 ===== */
      
      /* 1. 文章内容区域的超链接基础样式 */
      .notion-page a,
      .notion-text a,
      article a,
      .post-content a {
        color: #22C55E;              /* 绿色主题色 */
        text-decoration: none;       /* 去除默认下划线 */
        position: relative;          /* 为伪元素定位做准备 */
        transition: color 0.2s ease; /* 颜色变化过渡动画 */
      }

      /* 2. 超链接悬停时的颜色变化 */
      .notion-page a:hover,
      .notion-text a:hover,
      article a:hover,
      .post-content a:hover {
        color: #16A34A;              /* 悬停时变为深绿色 */
      }

      /* 3. 暗色模式下的超链接样式 */
      .dark .notion-page a,
      .dark .notion-text a,
      .dark article a,
      .dark .post-content a {
        color: #4ADE80;              /* 暗色模式下使用浅绿色 */
      }

      .dark .notion-page a:hover,
      .dark .notion-text a:hover,
      .dark article a:hover,
      .dark .post-content a:hover {
        color: #22C55E;              /* 暗色模式悬停时的绿色 */
      }

      /* 4. 超链接底部流动线条效果 - 所有链接都有流动效果 */
      .notion-page a::after,
      .notion-text a::after,
      article a::after,
      .post-content a::after {
        content: '';                 /* 创建伪元素 */
        position: absolute;          /* 绝对定位 */
        width: 0;                    /* 初始宽度为0 */
        height: 2px;                 /* 线条高度 */
        bottom: -3px;                /* 稍微远离文字，避免重叠 */
        left: 50%;                   /* 从中心开始 */
        background: linear-gradient(90deg, #22C55E, #16A34A); /* 渐变绿色线条 */
        transform: translateX(-50%); /* 居中对齐 */
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* 更流畅的贝塞尔曲线动画 */
        border-radius: 1px;          /* 圆角线条 */
      }

      /* 5. 悬停时线条从中心向两边展开的流动效果 */
      .notion-page a:hover::after,
      .notion-text a:hover::after,
      article a:hover::after,
      .post-content a:hover::after {
        width: 100%;                 /* 悬停时线条展开到100%宽度 */
      }

      /* 6. 暗色模式下的流动线条颜色 */
      .dark .notion-page a::after,
      .dark .notion-text a::after,
      .dark article a::after,
      .dark .post-content a::after {
        background: linear-gradient(90deg, #4ADE80, #22C55E); /* 暗色模式渐变 */
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
