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
      
      /* 1. 文章内容区域的超链接基础样式 - 排除标题内链接 */
      .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a),
      .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a),
      article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a),
      .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a) {
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

      /* 2. 下划线动画效果 - 从左到右展开 - 排除标题内链接 */
      .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before,
      .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before,
      article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before,
      .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before {
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

      /* 3. 圆角矩形背景动画效果 - 平滑展开 - 排除标题内链接 */
      .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after,
      .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after,
      article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after,
      .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after {
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

      /* 4. 悬停时的效果 - 排除标题内链接 */
      .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover,
      .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover,
      article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover,
      .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover {
        color: #059669;                     /* 深翡翠绿 */
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15); /* 柔和阴影 */
      }

      /* 5. 悬停时下划线展开 - 排除标题内链接 */
      .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::before,
      .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::before,
      article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::before,
      .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::before {
        width: 100%;                        /* 下划线展开到全宽 */
      }

      /* 6. 悬停时背景展开 - 排除标题内链接 */
      .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::after,
      .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::after,
      article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::after,
      .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover::after {
        width: calc(100% + 8px);            /* 背景展开，稍微超出文字 */
      }

      /* 7. 暗色模式下的超链接样式 - 排除标题内链接 */
      .dark .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a),
      .dark .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a),
      .dark article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a),
      .dark .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a) {
        color: #34D399;                     /* 亮翡翠绿 */
      }

      .dark .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before,
      .dark .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before,
      .dark article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before,
      .dark .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::before {
        background: linear-gradient(90deg, #34D399, #10B981); /* 暗色模式渐变 */
      }

      .dark .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after,
      .dark .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after,
      .dark article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after,
      .dark .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a)::after {
        background: rgba(52, 211, 153, 0.12); /* 暗色模式背景 */
      }

      .dark .notion-page a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover,
      .dark .notion-text a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover,
      .dark article a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover,
      .dark .post-content a:not(h1 a):not(h2 a):not(h3 a):not(h4 a):not(h5 a):not(h6 a):hover {
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

      /* ===== 代码引用模块 - 绿色字体淡绿色背景 ===== */
      
      /* 1. 行内代码样式 - 高优先级 */
      code,
      .notion-page code,
      .notion-text code,
      article code,
      .post-content code,
      p code,
      li code,
      td code,
      span code {
        color: #059669 !important;                        /* 绿色字体 */
        background: rgba(16, 185, 129, 0.15) !important; /* 淡绿色背景 */
        padding: 3px 8px !important;                     /* 内边距 */
        border-radius: 6px !important;                   /* 圆角 */
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important; /* 等宽字体 */
        font-size: 0.875em !important;                   /* 稍小的字号 */
        font-weight: 600 !important;                     /* 中等粗细 */
        border: 1px solid rgba(16, 185, 129, 0.3) !important; /* 淡绿色边框 */
        box-shadow: 0 1px 3px rgba(16, 185, 129, 0.1) !important; /* 轻微阴影 */
      }

      /* 2. 代码块样式 */
      pre code,
      .notion-page pre code,
      .notion-text pre code,
      article pre code,
      .post-content pre code {
        color: #059669 !important;                        /* 绿色字体 */
        background: rgba(16, 185, 129, 0.08) !important; /* 更淡的绿色背景 */
        display: block !important;                       /* 块级元素 */
        padding: 16px !important;                        /* 内边距 */
        border-radius: 8px !important;                   /* 圆角 */
        border: 1px solid rgba(16, 185, 129, 0.2) !important; /* 淡绿色边框 */
        overflow-x: auto !important;                     /* 水平滚动 */
        box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1) !important; /* 轻微阴影 */
      }

      /* 3. 暗色模式下的代码样式 */
      .dark code,
      .dark .notion-page code,
      .dark .notion-text code,
      .dark article code,
      .dark .post-content code,
      .dark p code,
      .dark li code,
      .dark td code,
      .dark span code {
        color: #34D399 !important;                       /* 暗色模式亮绿色字体 */
        background: rgba(52, 211, 153, 0.15) !important; /* 暗色模式淡绿背景 */
        border-color: rgba(52, 211, 153, 0.3) !important; /* 暗色模式边框 */
        box-shadow: 0 1px 3px rgba(52, 211, 153, 0.1) !important; /* 暗色模式阴影 */
      }

      .dark pre code,
      .dark .notion-page pre code,
      .dark .notion-text pre code,
      .dark article pre code,
      .dark .post-content pre code {
        color: #34D399 !important;                       /* 暗色模式亮绿色字体 */
        background: rgba(52, 211, 153, 0.1) !important;  /* 暗色模式代码块背景 */
        border-color: rgba(52, 211, 153, 0.25) !important; /* 暗色模式代码块边框 */
        box-shadow: 0 2px 8px rgba(52, 211, 153, 0.1) !important; /* 暗色模式代码块阴影 */
      }

      /* ===== 引用块模块 - 绿色侧边框正文样式 ===== */
      
      /* 1. 引用块基础样式 - 绿色侧边框，正文样式 */
      blockquote {
        background: transparent;               /* 透明背景，和正文一样 */
        border-left: 4px solid #10B981;       /* 绿色侧边框 */
        padding: 16px 20px;                   /* 适中的内边距 */
        margin: 20px 0;                       /* 标准间距 */
        border-radius: 0;                     /* 无圆角，保持简洁 */
        font-style: normal;                   /* 正常字体，不斜体 */
        color: inherit;                       /* 继承正文颜色 */
        font-size: inherit;                   /* 继承正文字号 */
        font-weight: inherit;                 /* 继承正文字重 */
        line-height: inherit;                 /* 继承正文行高 */
        position: relative;                   /* 为伪元素定位 */
      }

      /* 2. 暗色模式下的引用块样式 */
      .dark blockquote {
        background: transparent;              /* 暗色模式透明背景 */
        border-left-color: #34D399;          /* 暗色模式绿色侧边框 */
        color: inherit;                       /* 继承暗色模式正文颜色 */
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

      /* ===== 标题内超链接透明化 - 仅处理超链接，不影响标题默认样式 ===== */
      
      /* 1. 所有标题内的超链接 - 完全透明化 */
      h1 a,
      h2 a,
      h3 a,
      h4 a,
      h5 a,
      h6 a {
        color: inherit !important;          /* 继承标题颜色 */
        text-decoration: none !important;   /* 去除下划线 */
        display: inline !important;         /* 行内显示 */
        padding: 0 !important;              /* 无内边距 */
        margin: 0 !important;               /* 无外边距 */
        background: transparent !important; /* 透明背景 */
        border: none !important;            /* 无边框 */
        outline: none !important;           /* 无轮廓 */
        box-shadow: none !important;        /* 无阴影 */
        transition: none !important;        /* 无过渡效果 */
        font-weight: inherit !important;    /* 继承字重 */
        font-size: inherit !important;      /* 继承字号 */
        line-height: inherit !important;    /* 继承行高 */
        letter-spacing: inherit !important; /* 继承字间距 */
      }

      /* 2. 去除所有伪元素效果 */
      h1 a::before,
      h1 a::after,
      h2 a::before,
      h2 a::after,
      h3 a::before,
      h3 a::after,
      h4 a::before,
      h4 a::after,
      h5 a::before,
      h5 a::after,
      h6 a::before,
      h6 a::after {
        display: none !important;           /* 隐藏所有伪元素 */
      }

      /* 3. 悬停时保持原样 */
      h1 a:hover,
      h2 a:hover,
      h3 a:hover,
      h4 a:hover,
      h5 a:hover,
      h6 a:hover {
        color: inherit !important;          /* 悬停时保持原色 */
        background: transparent !important; /* 悬停时保持透明 */
        text-decoration: none !important;   /* 悬停时无下划线 */
        box-shadow: none !important;        /* 悬停时无阴影 */
        transform: none !important;         /* 悬停时无变换 */
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
