import{_ as n,c as s,o as a,a1 as p}from"./chunks/framework.DO75OpyS.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Notes/Command/评论.md","filePath":"Notes/Command/评论.md","lastUpdated":null}'),l={name:"Notes/Command/评论.md"},e=p(`<h1 align="center" style="color:#000000;">obsidian-webpage-html-export 评论</h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!--代码高亮--&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;https://unpkg.com/prismjs@1.29.0/prism.js&quot; defer&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;!--图标--&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;https://unpkg.com/lucide@latest&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;!--评论--&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot;  href=&quot;https://unpkg.com/@waline/client@v3/dist/waline.css&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- Meta 图标 (可选) --&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/@waline/client@v3/dist/waline-meta.css&quot; /&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    body {</span></span>
<span class="line"><span>        --font-ui-medium: 16px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    :root {       </span></span>
<span class="line"><span>        /* 字体大小 */</span></span>
<span class="line"><span>        --waline-font-size: 16px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 常规颜色 */</span></span>
<span class="line"><span>        --waline-white: #fff;</span></span>
<span class="line"><span>        --waline-light-grey: #999;</span></span>
<span class="line"><span>        --waline-dark-grey: #666;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 主题色 */</span></span>
<span class="line"><span>        --waline-theme-color: #27ae60;</span></span>
<span class="line"><span>        --waline-active-color: #2ecc71;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 布局颜色 */</span></span>
<span class="line"><span>        --waline-color: #444;</span></span>
<span class="line"><span>        --waline-bg-color: var(--background-primary-alt);</span></span>
<span class="line"><span>        --waline-bg-color-light: #f8f8f8;</span></span>
<span class="line"><span>        --waline-bg-color-hover: #f0f0f0;</span></span>
<span class="line"><span>        --waline-border-color: #ddd;</span></span>
<span class="line"><span>        --waline-disable-bg-color: #f8f8f8;</span></span>
<span class="line"><span>        --waline-disable-color: #bbb;</span></span>
<span class="line"><span>        --waline-code-bg-color: #282c34;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 特殊颜色 */</span></span>
<span class="line"><span>        --waline-bq-color: #f0f0f0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 头像 */</span></span>
<span class="line"><span>        --waline-avatar-size: 3.25rem;</span></span>
<span class="line"><span>        --waline-m-avatar-size: calc(var(--waline-avatar-size) * 9 / 13);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 徽章 */</span></span>
<span class="line"><span>        --waline-badge-color: #3498db;</span></span>
<span class="line"><span>        --waline-badge-font-size: 0.775em;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 信息 */</span></span>
<span class="line"><span>        --waline-info-bg-color: #f8f8f8;</span></span>
<span class="line"><span>        --waline-info-color: #999;</span></span>
<span class="line"><span>        --waline-info-font-size: 0.625em;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 渲染选择 */</span></span>
<span class="line"><span>        --waline-border: 1px solid var(--waline-border-color);</span></span>
<span class="line"><span>        --waline-avatar-radius: 50%;</span></span>
<span class="line"><span>        --waline-box-shadow: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 根据用户设置 ↓ */</span></span>
<span class="line"><span>    .waline-theme-dark {</span></span>
<span class="line"><span>        /* 常规颜色 */</span></span>
<span class="line"><span>        --waline-white: #000;</span></span>
<span class="line"><span>        --waline-light-grey: #666;</span></span>
<span class="line"><span>        --waline-dark-grey: #999;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 布局颜色 */</span></span>
<span class="line"><span>        --waline-color: #888;</span></span>
<span class="line"><span>        --waline-bg-color: var(--background-primary-alt);</span></span>
<span class="line"><span>        --waline-bg-color-light: #272727;</span></span>
<span class="line"><span>        --waline-border-color: #333;</span></span>
<span class="line"><span>        --waline-disable-bg-color: #444;</span></span>
<span class="line"><span>        --waline-disable-color: #272727;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 特殊颜色 */</span></span>
<span class="line"><span>        --waline-bq-color: #272727;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 其他颜色 */</span></span>
<span class="line"><span>        --waline-info-bg-color: #272727;</span></span>
<span class="line"><span>        --waline-info-color: #666;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 去掉版权信息 */</span></span>
<span class="line"><span>    .wl-power {</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 去掉用户名邮箱等信息 */</span></span>
<span class="line"><span>    .wl-header {</span></span>
<span class="line"><span>        /*display: none;*/</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 调整文章反应样式 */</span></span>
<span class="line"><span>    .wl-reaction {</span></span>
<span class="line"><span>        margin-bottom: 1em;</span></span>
<span class="line"><span>        text-align: left;</span></span>
<span class="line"><span>        margin-left: 0.5em;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 文章反应标题边距 */</span></span>
<span class="line"><span>    .wl-reaction-title {</span></span>
<span class="line"><span>        margin: 20px auto;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wl-reaction-list {</span></span>
<span class="line"><span>        justify-content: left;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer {</span></span>
<span class="line"><span>        padding-bottom: 17px !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wl-panel {</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #waline {</span></span>
<span class="line"><span>        margin-top: 50px !important;</span></span>
<span class="line"><span>        max-width: 800px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 左侧和右侧面板展开图标 */</span></span>
<span class="line"><span>    .clickable-icon.sidebar-collapse-icon {</span></span>
<span class="line"><span>        width: 2em !important;</span></span>
<span class="line"><span>        background-color: var(--background-secondary);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 链接图谱 */</span></span>
<span class="line"><span>    .graph-view-placeholder {</span></span>
<span class="line"><span>        width: 22%;</span></span>
<span class="line"><span>        margin-left: 38px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 目录和大纲展开图标 */</span></span>
<span class="line"><span>    .tree-container .clickable-icon {</span></span>
<span class="line"><span>        margin-left: 2px;</span></span>
<span class="line"><span>        border-radius: 5px;</span></span>
<span class="line"><span>        border: none;</span></span>
<span class="line"><span>        box-shadow: none;</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        margin-top: -3px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 文章最大宽度 */</span></span>
<span class="line"><span>    .document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer {</span></span>
<span class="line"><span>        max-width: 100vw !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 文章标题居中 */</span></span>
<span class="line"><span>    body.show-inline-title .page-title {</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    input[type=&quot;text&quot;],</span></span>
<span class="line"><span>    textarea {</span></span>
<span class="line"><span>        font-size: 16px !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    input[type=search] {</span></span>
<span class="line"><span>         width: 85%;</span></span>
<span class="line"><span>         border: 1px solid #888;</span></span>
<span class="line"><span>         border-radius: 5px;</span></span>
<span class="line"><span>         background-color:var(--background-primary);</span></span>
<span class="line"><span>         color: var(--text-muted);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .tree-container .clickable-icon {</span></span>
<span class="line"><span>        background-color: transparent;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    body {</span></span>
<span class="line"><span>        user-select: unset;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    blockquote{</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #copyright {</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>        margin-top: 80px !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #copyright a {</span></span>
<span class="line"><span>        color: #ee802f;</span></span>
<span class="line"><span>        text-decoration: none;</span></span>
<span class="line"><span>        font-size: 15px;</span></span>
<span class="line"><span>        margin-left: 4px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #copyright a img {</span></span>
<span class="line"><span>        width: 14px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer pre{</span></span>
<span class="line"><span>        overflow: auto;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .theme-light .document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer pre {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        background-color: var(--background-primary-alt); /* #f6f6f6; */</span></span>
<span class="line"><span>        border: 1px solid #eeecec;</span></span>
<span class="line"><span>        border-radius: 5px;</span></span>
<span class="line"><span>        padding: 10px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .theme-dark .document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer pre {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        background-color: var(--background-primary-alt); /* #262626; */</span></span>
<span class="line"><span>        border: 1px solid #373838;</span></span>
<span class="line"><span>        border-radius: 5px;</span></span>
<span class="line"><span>        padding: 10px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .markdown-rendered pre button.copy-code-button {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        top: 7px;</span></span>
<span class="line"><span>        right: 7px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wl-header input {</span></span>
<span class="line"><span>        font-size: 16px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wl-reaction-votes {</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    html&gt;body&gt;.webpage-container&gt;.document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer&gt;div.page-meta {</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>        padding: 10px !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .waline-comment-count,</span></span>
<span class="line"><span>    .waline-pageview-count,</span></span>
<span class="line"><span>    .page-ctime {</span></span>
<span class="line"><span>        margin-right: 35px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .page-meta {</span></span>
<span class="line"><span>        color: #888;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .page-meta svg {</span></span>
<span class="line"><span>        width: 16px;</span></span>
<span class="line"><span>        vertical-align: middle;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #qrcode {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #qr-zoom {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: 170px;</span></span>
<span class="line"><span>        height: 200px;</span></span>
<span class="line"><span>        z-index: 999;</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>        border: 1px solid #ccc;</span></span>
<span class="line"><span>        background: #fff;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #qrcode:hover #qr-zoom {</span></span>
<span class="line"><span>        display: inline-block;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #qr-zoom img {</span></span>
<span class="line"><span>        margin-top: 10px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #qr-zoom font {</span></span>
<span class="line"><span>        margin-top: 4px;</span></span>
<span class="line"><span>        display: inline-block;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @media (max-width: 768px) {</span></span>
<span class="line"><span>        #qrcode {</span></span>
<span class="line"><span>            display: none !important;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #scrollToTopBtn {</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>        position: fixed;</span></span>
<span class="line"><span>        width: 46px;</span></span>
<span class="line"><span>        height: 46px;</span></span>
<span class="line"><span>        border: 1px solid #ddd;</span></span>
<span class="line"><span>        border-radius: 5px;</span></span>
<span class="line"><span>        background-color: var(--background-primary);</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>        bottom: 75px;</span></span>
<span class="line"><span>        right: 306px;</span></span>
<span class="line"><span>        opacity: 0.8;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #scrollToTopBtn:hover {</span></span>
<span class="line"><span>        background-color: var(--background-primary-alt);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #scrollToTopBtn svg {</span></span>
<span class="line"><span>        margin-top: 11px;</span></span>
<span class="line"><span>        color: var(--text-normal);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #scrollToTopBtn.st-collapsed {</span></span>
<span class="line"><span>        right: 30px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @media (max-width: 768px) {</span></span>
<span class="line"><span>        #scrollToTopBtn {</span></span>
<span class="line"><span>            right: 12px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #scrollToTopBtn.st-collapsed {</span></span>
<span class="line"><span>            right: 12px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   .theme-dark #scrollToTopBtn {</span></span>
<span class="line"><span>       border: 1px solid #999;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  .markdown-rendered pre button.copy-code-button{</span></span>
<span class="line"><span>      background-color: var(--background-primary);</span></span>
<span class="line"><span>      padding: 3px 6px;</span></span>
<span class="line"><span>      border: 1px solid #888;</span></span>
<span class="line"><span>      border-radius: 5px;</span></span>
<span class="line"><span>      opacity: 0.9;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .document-container.markdown-reading-view{</span></span>
<span class="line"><span>      background-color: var(--background-primary);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  table {</span></span>
<span class="line"><span>    border: 1px solid var(--table-border-color);</span></span>
<span class="line"><span>    border-radius: var(--size-2-3);</span></span>
<span class="line"><span>    border-spacing: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  th, td {</span></span>
<span class="line"><span>      padding: 10px;</span></span>
<span class="line"><span>      border-right: 1px solid var(--table-border-color);</span></span>
<span class="line"><span>      border-bottom: 1px solid var(--table-border-color);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  th:last-child, td:last-child {</span></span>
<span class="line"><span>      border-right: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 兼容有thead的情况 */</span></span>
<span class="line"><span>  tr:last-child:not(:only-child) th, tr:last-child td{</span></span>
<span class="line"><span>      border-bottom: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  table &gt; :only-child th{</span></span>
<span class="line"><span>      border-bottom: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /* 兼容有thead的情况 end */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .document-container&gt;.markdown-preview-view{</span></span>
<span class="line"><span>      margin: 0;</span></span>
<span class="line"><span>      padding: var(--sidebar-margin);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .sidebar-content{</span></span>
<span class="line"><span>    background-color: var(--background-primary-alt);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .nav-folder-title[data-count]::after {</span></span>
<span class="line"><span>    content: attr(data-count);</span></span>
<span class="line"><span>    font-size: calc(100% * 0.8);</span></span>
<span class="line"><span>    margin-right: 12px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .tree-container .tree-header {</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  #total-files {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    right: 12px;</span></span>
<span class="line"><span>    color: var(--nav-item-color);</span></span>
<span class="line"><span>    font-size: calc(100% * .8);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .tree-container .collapse-icon {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /* 附件下载 */</span></span>
<span class="line"><span>  .internal-embed.file-embed {</span></span>
<span class="line"><span>      cursor: pointer;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .sidebar-content{</span></span>
<span class="line"><span>      padding-left: 0;</span></span>
<span class="line"><span>      padding-right: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .search-input-container {</span></span>
<span class="line"><span>      padding-left: 10px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .tree-container{</span></span>
<span class="line"><span>      padding-left: 12px;</span></span>
<span class="line"><span>      padding-right: 12px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .graph-view-wrapper {</span></span>
<span class="line"><span>      padding-left: 12px;</span></span>
<span class="line"><span>      padding-right: 12px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  body .webpage-container .tree-container .tree-scroll-area, .tree-container .tree-header {</span></span>
<span class="line"><span>      width: calc(100% - 12px);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .tree-container .clickable-icon svg {</span></span>
<span class="line"><span>      width: 18px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ul.dataview.list-view-ul li {</span></span>
<span class="line"><span>      line-height: 180%;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  #webpage-icon{</span></span>
<span class="line"><span>      display: none;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .markdown-reading-view table {</span></span>
<span class="line"><span>      margin-block-start: var(--p-spacing);</span></span>
<span class="line"><span>      margin-block-end: var(--p-spacing);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  li {</span></span>
<span class="line"><span>    line-height: 180%;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;!-------------------------------------------------&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;module&quot;&gt;</span></span>
<span class="line"><span>    import { init } from &#39;https://unpkg.com/@waline/client@v3/dist/waline.js&#39;;</span></span>
<span class="line"><span>    window.initWaline = (transferDocument) =&gt; {</span></span>
<span class="line"><span>        transferDocument = transferDocument || document;</span></span>
<span class="line"><span>        const path = location.pathname.replace(/index\\.html$/, &#39;&#39;).replace(/\\/$/, &#39;&#39;) || &#39;/&#39;;</span></span>
<span class="line"><span>        const waline = document.querySelector(&quot;#waline&quot;);</span></span>
<span class="line"><span>        const container = document.querySelector(&quot;.markdown-preview-sizer&quot;)</span></span>
<span class="line"><span>        if (!waline) {</span></span>
<span class="line"><span>            const waline = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>            waline.id = &quot;waline&quot;;</span></span>
<span class="line"><span>            if(!SHOW_COMMENTS) waline.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>            container.appendChild(waline);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let pageMeta = document.querySelector(&#39;.page-meta&#39;);</span></span>
<span class="line"><span>        if (!pageMeta) {</span></span>
<span class="line"><span>            const pageTitleElement = document.querySelector(&#39;.page-title&#39;);</span></span>
<span class="line"><span>            pageMeta = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span>            pageMeta.className = &quot;page-meta&quot;;</span></span>
<span class="line"><span>            if(!SHOW_PAGE_HEADER) pageMeta.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>            const ctime = transferDocument.querySelector(&#39;meta[name=&quot;ctime&quot;]&#39;)?.getAttribute(&quot;content&quot;) || &#39;&#39;;</span></span>
<span class="line"><span>            let pageMetaHTML = &#39;&lt;span title=&quot;创建时间&quot;&gt;&lt;i data-lucide=&quot;clock&quot;&gt;&lt;/i&gt; &lt;span class=&quot;page-ctime&quot;&gt;&#39; + timestampToTimeString(+ctime) + &#39;&lt;/span&gt;&lt;/span&gt; &#39;;</span></span>
<span class="line"><span>            if(SHOW_COMMENTS) pageMetaHTML += &#39;&lt;span title=&quot;评论量&quot;&gt;&lt;i data-lucide=&quot;message-circle-more&quot;&gt;&lt;/i&gt; &lt;span class=&quot;waline-comment-count&quot; data-path=&quot;&#39; + path + &#39;&quot;&gt;0&lt;/span&gt;&lt;/span&gt; &#39;;</span></span>
<span class="line"><span>            pageMetaHTML += &#39;&lt;span title=&quot;阅读量&quot;&gt;&lt;i data-lucide=&quot;eye&quot;&gt;&lt;/i&gt; &lt;span class=&quot;waline-pageview-count&quot; data-path=&quot;&#39; + path + &#39;&quot;&gt;1&lt;/span&gt;&lt;/span&gt; &#39;;</span></span>
<span class="line"><span>            pageMetaHTML += &#39;&lt;span id=&quot;qrcode&quot; title=&quot;手机查看&quot;&gt;&lt;i data-lucide=&quot;qr-code&quot;&gt;&lt;/i&gt;&lt;span id=&quot;qr-zoom&quot;&gt;&lt;img src=&quot;https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=&#39; + encodeURIComponent(location.href) + &#39;&quot; /&gt;&lt;br /&gt;&lt;font&gt;手机查看&lt;/font&gt;&lt;/span&gt;&lt;/span&gt;&#39;;</span></span>
<span class="line"><span>            pageMeta.innerHTML = pageMetaHTML;</span></span>
<span class="line"><span>            pageTitleElement.after(pageMeta);</span></span>
<span class="line"><span>            lucide.createIcons();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            if(SHOW_PAGE_HEADER || SHOW_COMMENTS) {</span></span>
<span class="line"><span>                init({</span></span>
<span class="line"><span>                    el: &#39;#waline&#39;,</span></span>
<span class="line"><span>                    // 文章反应</span></span>
<span class="line"><span>                    reaction: true,</span></span>
<span class="line"><span>                    dark: false,</span></span>
<span class="line"><span>                    copyright: false,</span></span>
<span class="line"><span>                    // 浏览量统计</span></span>
<span class="line"><span>                    pageview: true,</span></span>
<span class="line"><span>                    // 评论数统计</span></span>
<span class="line"><span>                    comment: true,</span></span>
<span class="line"><span>                    path: path,</span></span>
<span class="line"><span>                    serverURL: WALINE_SERVER_URL || &#39;&#39;,</span></span>
<span class="line"><span>                    locale: {</span></span>
<span class="line"><span>                        reaction0: &#39;点赞&#39;,</span></span>
<span class="line"><span>                        reaction1: &#39;踩一下&#39;,</span></span>
<span class="line"><span>                        reaction2: &#39;酷毙了&#39;,</span></span>
<span class="line"><span>                        reaction3: &#39;不屑&#39;,</span></span>
<span class="line"><span>                        reaction4: &#39;尴尬&#39;,</span></span>
<span class="line"><span>                        reaction5: &#39;无聊&#39;,</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (e) {</span></span>
<span class="line"><span>            console.log(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //创建scroll to top</span></span>
<span class="line"><span>        if (SHOW_SCROLL_TO_TOP &amp;&amp; !document.getElementById(&#39;scrollToTop&#39;)) {</span></span>
<span class="line"><span>            const scrollToTop = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>            scrollToTop.id = &quot;scrollToTop&quot;;</span></span>
<span class="line"><span>            scrollToTop.innerHTML = &#39;&lt;div id=&quot;scrollToTopBtn&quot;&gt;&lt;i data-lucide=&quot;arrow-up-to-line&quot;&gt;&lt;/i&gt;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>            container.appendChild(scrollToTop);</span></span>
<span class="line"><span>            lucide.createIcons();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            var targetElement = document.querySelector(&quot;.document-container&gt;.markdown-preview-view&quot;);</span></span>
<span class="line"><span>            var scrollToTopBtn = document.getElementById(&#39;scrollToTopBtn&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 监听滚动事件</span></span>
<span class="line"><span>            targetElement.addEventListener(&#39;scroll&#39;, function () {</span></span>
<span class="line"><span>                var scrollTop = targetElement.scrollTop;</span></span>
<span class="line"><span>                var threshold = targetElement.clientHeight * 0.25; // 当滚动超过25%时显示按钮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (scrollTop &gt; threshold) {</span></span>
<span class="line"><span>                    scrollToTopBtn.style.display = &#39;block&#39;; // 显示回到顶部按钮</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    scrollToTopBtn.style.display = &#39;none&#39;; // 隐藏回到顶部按钮</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 为回到顶部按钮绑定点击事件</span></span>
<span class="line"><span>            scrollToTopBtn.addEventListener(&#39;click&#39;, function () {</span></span>
<span class="line"><span>                var targetElement = document.querySelector(&quot;.document-container&gt;.markdown-preview-view&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (&#39;scrollBehavior&#39; in document.documentElement.style) {</span></span>
<span class="line"><span>                    targetElement.scrollTo({</span></span>
<span class="line"><span>                        top: 0,</span></span>
<span class="line"><span>                        behavior: &#39;smooth&#39;</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    targetElement.scrollTop = 0;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            onToggleCollapsedChangedToTop();</span></span>
<span class="line"><span>            const rightCollapse = document.querySelector(&quot;.sidebar-right .clickable-icon.sidebar-collapse-icon&quot;)</span></span>
<span class="line"><span>            rightCollapse.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>                setTimeout(() =&gt; {</span></span>
<span class="line"><span>                    onToggleCollapsedChangedToTop();</span></span>
<span class="line"><span>                }, 42)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 代码复制按钮</span></span>
<span class="line"><span>        document.querySelectorAll(&quot;.document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer pre&quot;).forEach((pre) =&gt; {</span></span>
<span class="line"><span>            pre.addEventListener(&#39;scroll&#39;, () =&gt; {</span></span>
<span class="line"><span>                const copyCodeBtn = pre.querySelector(&#39;.copy-code-button&#39;);</span></span>
<span class="line"><span>                const copyCodeBtnRect = copyCodeBtn.getBoundingClientRect();</span></span>
<span class="line"><span>                copyCodeBtn.style.right = &#39;auto&#39;;</span></span>
<span class="line"><span>                copyCodeBtn.style.left = (pre.scrollLeft + pre.offsetWidth - copyCodeBtnRect.width - 8) + &#39;px&#39;;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 评论提交后执行</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            if(!SHOW_COMMENTS) return;</span></span>
<span class="line"><span>            const countElement = document.querySelector(&#39;.wl-count&#39;);</span></span>
<span class="line"><span>            // 创建一个观察器实例</span></span>
<span class="line"><span>            const observer = new MutationObserver((mutations) =&gt; {</span></span>
<span class="line"><span>                mutations.forEach((mutation) =&gt; {</span></span>
<span class="line"><span>                    if (mutation.type === &#39;characterData&#39; || mutation.type === &#39;childList&#39;) {</span></span>
<span class="line"><span>                        if(mutation.target.firstChild){</span></span>
<span class="line"><span>                            document.querySelector(&quot;.waline-comment-count&quot;).innerHTML = mutation.target.firstChild.textContent;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>            // 配置观察器选项</span></span>
<span class="line"><span>            const config = { attributes: false, childList: true, subtree: true, characterData: true };</span></span>
<span class="line"><span>            // 观察指定元素</span></span>
<span class="line"><span>            observer.observe(countElement, config);</span></span>
<span class="line"><span>        }, 100);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 切换文章时执行</span></span>
<span class="line"><span>    function onAsyncLoadedDocument(url, transferDocument) {</span></span>
<span class="line"><span>        togglePrismTheme(localStorage.getItem(&quot;theme&quot;) === &#39;dark&#39; ? false : true);</span></span>
<span class="line"><span>        // 图片显示兼容</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            loadSpecialImg();</span></span>
<span class="line"><span>        }, 42);</span></span>
<span class="line"><span>        // 初始化评论</span></span>
<span class="line"><span>        initWaline(transferDocument);</span></span>
<span class="line"><span>        // 生成版权信息</span></span>
<span class="line"><span>        copyright()</span></span>
<span class="line"><span>        // 图片放大</span></span>
<span class="line"><span>        initImgZoom();</span></span>
<span class="line"><span>        // 添加文件下载按钮</span></span>
<span class="line"><span>        attachDownload();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 动态切换样式 state ? &quot;light&quot; : &quot;dark&quot;</span></span>
<span class="line"><span>    function toggleWalineTheme(state) {</span></span>
<span class="line"><span>        if (state || document.body.classList.contains(&quot;waline-theme-dark&quot;)) {</span></span>
<span class="line"><span>            document.body.classList.remove(&quot;waline-theme-dark&quot;)</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            document.body.classList.add(&quot;waline-theme-dark&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 切换主题样式时执行 state ? &quot;light&quot; : &quot;dark&quot;</span></span>
<span class="line"><span>    function onThemeToggle(state) {</span></span>
<span class="line"><span>        toggleWalineTheme(state)</span></span>
<span class="line"><span>        togglePrismTheme(state);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 侧边栏折叠时执行</span></span>
<span class="line"><span>    function onSidebarCollapsed(collapsed, deviceSize, sidebar) {</span></span>
<span class="line"><span>        const isLeftSidebar = sidebar.classList.contains(&quot;sidebar-left&quot;);</span></span>
<span class="line"><span>        const isFloatingSidebars = document.body.classList.contains(&quot;floating-sidebars&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 触发侧边栏时改变scroll to top位置</span></span>
<span class="line"><span>        onToggleCollapsedChangedToTop();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //console.log(collapsed, deviceSize, isFloatingSidebars, &#39;sidebar&#39;);</span></span>
<span class="line"><span>        if(isFloatingSidebars) {</span></span>
<span class="line"><span>            const sidebarMask = document.querySelector(&quot;#sidebarMask&quot;);</span></span>
<span class="line"><span>            const treeArea = document.querySelector(&quot;.sidebar-left .tree-scroll-area&quot;);</span></span>
<span class="line"><span>            const isPhone = isMobile();</span></span>
<span class="line"><span>            if(collapsed) {</span></span>
<span class="line"><span>                //折叠侧边栏</span></span>
<span class="line"><span>                if(sidebarMask) sidebarMask.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>                if(isLeftSidebar &amp;&amp; treeArea &amp;&amp; isPhone) treeArea.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                //展开侧边栏</span></span>
<span class="line"><span>                if(sidebarMask) sidebarMask.style.display = &#39;block&#39;;</span></span>
<span class="line"><span>                if(isLeftSidebar &amp;&amp; treeArea &amp;&amp; isPhone) {</span></span>
<span class="line"><span>                    setTimeout(()=&gt;{treeArea.style.display = &#39;block&#39;;}, 100);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 侧边栏折叠时触发scroll to top</span></span>
<span class="line"><span>    function onToggleCollapsedChangedToTop() {</span></span>
<span class="line"><span>        if(typeof scrollToTopBtn !== &#39;undefined&#39;){</span></span>
<span class="line"><span>            const sidebarRight = document.querySelector(&quot;.sidebar-right&quot;)</span></span>
<span class="line"><span>            if (sidebarRight.classList.contains(&#39;is-collapsed&#39;)) {</span></span>
<span class="line"><span>                scrollToTopBtn.classList.add(&#39;st-collapsed&#39;)</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                scrollToTopBtn.classList.remove(&#39;st-collapsed&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function copyright() {</span></span>
<span class="line"><span>        const year = new Date().getFullYear();</span></span>
<span class="line"><span>        const author = AUTHOR || document.querySelector(&#39;meta[name=&quot;author&quot;]&#39;)?.getAttribute(&quot;content&quot;) || VAULT_TITLE;</span></span>
<span class="line"><span>        let copytext = &#39;© &#39; + year + &#39; &#39;+ author + &#39; &lt;font color=&quot;#ee802f&quot;&gt;♡&lt;/font&gt; 由obsidian强力驱动&#39;</span></span>
<span class="line"><span>        if(SHOW_RSS_FEED) copytext += &#39;&amp;nbsp;&lt;a href=&quot;lib/rss.xml&quot;&gt;&lt;img src=&quot;https://s21.ax1x.com/2024/04/21/pkpNoSf.png&quot; /&gt;RSS&lt;/a&gt;&#39;;</span></span>
<span class="line"><span>        const container = document.querySelector(&quot;.markdown-preview-sizer&quot;)</span></span>
<span class="line"><span>        const copyright = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>        copyright.id = &quot;copyright&quot;;</span></span>
<span class="line"><span>        if(!SHOW_PAGE_FOOTER) copyright.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>        copyright.innerHTML = copytext;</span></span>
<span class="line"><span>        container.appendChild(copyright);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function timestampToTimeString(timestamp) {</span></span>
<span class="line"><span>        timestamp = timestamp ? timestamp : null;</span></span>
<span class="line"><span>        //时间戳为10位需*1000，时间戳为13位的话不需乘1000</span></span>
<span class="line"><span>        let date = new Date(timestamp);</span></span>
<span class="line"><span>        let Y = date.getFullYear() + &#39;-&#39;;</span></span>
<span class="line"><span>        let M = (date.getMonth() + 1 &lt; 10 ? &#39;0&#39; + (date.getMonth() + 1) : date.getMonth() + 1) + &#39;-&#39;;</span></span>
<span class="line"><span>        let D = (date.getDate() &lt; 10 ? &#39;0&#39; + date.getDate() : date.getDate()) + &#39; &#39;;</span></span>
<span class="line"><span>        return Y + M + D;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // state ? &quot;light&quot; : &quot;dark&quot;</span></span>
<span class="line"><span>    function togglePrismTheme(state) {</span></span>
<span class="line"><span>        const themeTail = state ? &quot;&quot; : &quot;-dark&quot;;</span></span>
<span class="line"><span>        const currLink = document.getElementById(&quot;prism-theme&quot;);</span></span>
<span class="line"><span>        const linkHref = &#39;https://unpkg.com/prismjs@1.29.0/themes/prism&#39; + themeTail + &#39;.min.css&#39;;</span></span>
<span class="line"><span>        if (currLink &amp;&amp; currLink.href === linkHref) return;</span></span>
<span class="line"><span>        const link = document.createElement(&#39;link&#39;);</span></span>
<span class="line"><span>        link.id = &#39;prism-theme&#39;;</span></span>
<span class="line"><span>        link.rel = &#39;stylesheet&#39;;</span></span>
<span class="line"><span>        link.href = linkHref;</span></span>
<span class="line"><span>        link.onload = () =&gt; { if (currLink) currLink.remove(); }</span></span>
<span class="line"><span>        document.head.appendChild(link);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    togglePrismTheme(localStorage.getItem(&quot;theme&quot;) === &#39;dark&#39; ? false : true);</span></span>
<span class="line"><span>    function onDomReady(fn) {</span></span>
<span class="line"><span>        if (document.readyState !== &#39;loading&#39;) {</span></span>
<span class="line"><span>            fn();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            document.addEventListener(&#39;DOMContentLoaded&#39;, fn);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function isMobileMedia(maxWidth=768) {</span></span>
<span class="line"><span>        return window.matchMedia(&quot;(max-width: &quot;+maxWidth+&quot;px)&quot;).matches;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //初始化图片放大</span></span>
<span class="line"><span>    function initImgZoom() {</span></span>
<span class="line"><span>        ImgZoom(&quot;.document-container&gt;.markdown-preview-view&gt;.markdown-preview-sizer &gt; div:not(.page-meta,.mod-footer,#waline,#scrollToTop,#copyright) img&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 搜索时执行</span></span>
<span class="line"><span>    function onSearch() {</span></span>
<span class="line"><span>        const searchInput = document.querySelector(&quot;.sidebar-left input[type=search]&quot;);</span></span>
<span class="line"><span>        searchInput.addEventListener(&quot;input&quot;, (e) =&gt; {</span></span>
<span class="line"><span>            setTimeout(()=&gt;setTreeCount(), 42);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 获取目录树文章数</span></span>
<span class="line"><span>    function setTreeCount() {</span></span>
<span class="line"><span>        // 获取总数</span></span>
<span class="line"><span>        const total = document.querySelector(&quot;.sidebar-left .file-tree&quot;).querySelectorAll(&quot;.nav-file:not(.filtered-out)&quot;).length;</span></span>
<span class="line"><span>        if(!document.querySelector(&quot;#total-files&quot;)){</span></span>
<span class="line"><span>            const treeHeader = document.querySelector(&quot;.tree-container .tree-header&quot;)</span></span>
<span class="line"><span>            const totalSpan = document.createElement(&quot;span&quot;);</span></span>
<span class="line"><span>            totalSpan.id = &quot;total-files&quot;;</span></span>
<span class="line"><span>            totalSpan.innerHTML = total;</span></span>
<span class="line"><span>            treeHeader.appendChild(totalSpan);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            document.querySelector(&quot;#total-files&quot;).innerHTML = total;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取每个目录的文章数</span></span>
<span class="line"><span>        const allFolders = document.querySelectorAll(&quot;.sidebar-left .file-tree .nav-folder:not(.filtered-out) .tree-link .nav-folder-title&quot;);</span></span>
<span class="line"><span>        allFolders.forEach(folder =&gt; {</span></span>
<span class="line"><span>            const fileCount = folder.parentElement.nextElementSibling.querySelectorAll(&quot;.nav-file:not(.filtered-out)&quot;).length;</span></span>
<span class="line"><span>            folder.dataset.count = fileCount;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 文件树尺寸变化时执行</span></span>
<span class="line"><span>    function observeTreeAreaResize() {</span></span>
<span class="line"><span>        // 监听出现滚动条</span></span>
<span class="line"><span>        const elementToObserve = document.querySelector(&#39;.webpage-container .tree-container .tree-scroll-area&#39;);</span></span>
<span class="line"><span>        const resizeObserver = new ResizeObserver(()=&gt;{</span></span>
<span class="line"><span>            document.querySelector(&quot;#total-files&quot;).style.right = (elementToObserve.offsetWidth - elementToObserve.clientWidth + 12) + &#39;px&#39;;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        resizeObserver.observe(elementToObserve);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 当全文检索开始建立索引时执行</span></span>
<span class="line"><span>    function onSearchIndexing() {</span></span>
<span class="line"><span>        const searchInput = document.querySelector(&quot;.sidebar-left input[type=search]&quot;);</span></span>
<span class="line"><span>        searchInput.placeholder = LANG === &#39;zh-cn&#39; ? &#39;正在建立全文索引...&#39; : &#39;Full-text indexing...&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 当全文检索准备好后执行</span></span>
<span class="line"><span>    function onSearchReady() {</span></span>
<span class="line"><span>        const searchInput = document.querySelector(&quot;.sidebar-left input[type=search]&quot;);</span></span>
<span class="line"><span>        searchInput.placeholder=&#39;Search...&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 图片显示兼容</span></span>
<span class="line"><span>    function loadSpecialImg() {</span></span>
<span class="line"><span>        document.querySelectorAll(&quot;img[src*=&#39;+&#39;]&quot;).forEach(item =&gt; {</span></span>
<span class="line"><span>            item.setAttribute(&#39;src&#39;, URLencode(item.getAttribute(&#39;src&#39;)));</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 添加附件下载按钮</span></span>
<span class="line"><span>    function attachDownload() {</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            document.querySelectorAll(\`.internal-embed.file-embed\`).forEach((item)=&gt;{</span></span>
<span class="line"><span>                item.onclick=()=&gt;{</span></span>
<span class="line"><span>                    window.open(item.getAttribute(&#39;src&#39;));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }, 42);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 当滚动完成时执行</span></span>
<span class="line"><span>    function onScrollIntoViewStart(element, options, animate) {</span></span>
<span class="line"><span>        // 解决手机出现横向滚动条问题</span></span>
<span class="line"><span>        setTimeout(()=&gt;{</span></span>
<span class="line"><span>            const pageView = document.querySelector(&quot;.document-container&gt;.markdown-preview-view&quot;);</span></span>
<span class="line"><span>            if(pageView.scrollLeft &gt; 0) pageView.scrollTo(0, pageView.scrollTop);</span></span>
<span class="line"><span>        }, 1500)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 文章加载完成后执行</span></span>
<span class="line"><span>    onDomReady(() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 将index.html的标题改为首页</span></span>
<span class="line"><span>        let elapsedTime = 0;</span></span>
<span class="line"><span>        const waitForIndexTitle = (delay = 50) =&gt; {</span></span>
<span class="line"><span>            const indexTitle = document.querySelector(</span></span>
<span class="line"><span>                &quot;.mod-tree-file .tree-link[href=&#39;index.html&#39;] .tree-item-title&quot;</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>            if (elapsedTime &gt; 60000) {</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (indexTitle &amp;&amp; indexTitle.innerHTML === &#39;index&#39;) {</span></span>
<span class="line"><span>                indexTitle.innerHTML = &#39;首页&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 图片显示兼容</span></span>
<span class="line"><span>                loadSpecialImg();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            elapsedTime += delay;</span></span>
<span class="line"><span>            setTimeout(() =&gt; {</span></span>
<span class="line"><span>                waitForIndexTitle(delay);</span></span>
<span class="line"><span>            }, delay);</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 修改首页标题</span></span>
<span class="line"><span>        if (LANG === &#39;zh-cn&#39;) waitForIndexTitle();</span></span>
<span class="line"><span>        // 初始化评论</span></span>
<span class="line"><span>        initWaline();</span></span>
<span class="line"><span>        // 触发评论样式切换</span></span>
<span class="line"><span>        toggleWalineTheme(localStorage.getItem(&quot;theme&quot;) === &#39;dark&#39; ? false : true);</span></span>
<span class="line"><span>        // 生成版权信息</span></span>
<span class="line"><span>        copyright()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // dom ready时显示内容</span></span>
<span class="line"><span>       document.querySelector(&quot;.document-container&quot;).classList.remove(&#39;hide&#39;);</span></span>
<span class="line"><span>      // 自动展开当前文档的树形菜单</span></span>
<span class="line"><span>      const navTimer = setInterval(()=&gt;{</span></span>
<span class="line"><span>        const activeNavItem = document.querySelector(&quot;.nav-file.mod-active&quot;);</span></span>
<span class="line"><span>        if(activeNavItem &amp;&amp; activeNavItem.parentElement) {</span></span>
<span class="line"><span>          if(navTimer) clearInterval(navTimer);</span></span>
<span class="line"><span>          //if(activeNavItem.parentElement.style.display === &#39;none&#39;){</span></span>
<span class="line"><span>          //  setTimeout(() =&gt; {</span></span>
<span class="line"><span>          //    activeNavItem.parentElement.previousElementSibling.click();</span></span>
<span class="line"><span>          //  }, 42);</span></span>
<span class="line"><span>          //}</span></span>
<span class="line"><span>          setTimeout(()=&gt;{</span></span>
<span class="line"><span>            // 兼容不支持translate的浏览器</span></span>
<span class="line"><span>            setTimeout(()=&gt; {</span></span>
<span class="line"><span>                const collapseIcons = document.querySelectorAll(&quot;.tree-container .collapse-icon&quot;);</span></span>
<span class="line"><span>                if(collapseIcons.length &gt;0 &amp;&amp; collapseIcons[0].style.translate  === undefined){</span></span>
<span class="line"><span>                    collapseIcons.forEach(item=&gt;{item.style.left=0})</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }, 50);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (SHOW_FILE_NUMBER) {</span></span>
<span class="line"><span>                // 计算数目录文件数</span></span>
<span class="line"><span>                setTreeCount();</span></span>
<span class="line"><span>                // 文件树尺寸变化时执行</span></span>
<span class="line"><span>                observeTreeAreaResize();</span></span>
<span class="line"><span>                // 搜索时执行</span></span>
<span class="line"><span>                onSearch();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 支持file color插件 (也可通过生成css文件实现)</span></span>
<span class="line"><span>            if (FILE_COLORS &amp;&amp; USE_FILE_COLOR_PLUGIN &amp;&amp; Object.getOwnPropertyNames(FILE_COLORS).length) {</span></span>
<span class="line"><span>                for(const key in FILE_COLORS) {</span></span>
<span class="line"><span>                    const link = document.querySelector(&quot;.sidebar-left .tree-link[data-path=&#39;&quot;+key+&quot;&#39;] .tree-item-title&quot;);</span></span>
<span class="line"><span>                    if(link) link.style.color = FILE_COLORS[key];</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 添加文件下载按钮</span></span>
<span class="line"><span>            attachDownload();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          }, 42);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }, 50);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 创建小屏侧边栏展开遮罩层，防止误触其他元素</span></span>
<span class="line"><span>      const sidebarMask = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>      sidebarMask.id = &quot;sidebarMask&quot;;</span></span>
<span class="line"><span>      sidebarMask.style = &quot;position:fixed;top:0;left:0;opacity:0;z-index:9;width:100%;height:100%;display:none;&quot;;</span></span>
<span class="line"><span>      sidebarMask.onclick = function() {this.style.display = &#39;none&#39;;}</span></span>
<span class="line"><span>      document.body.appendChild(sidebarMask);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 图片放大缩小</span></span>
<span class="line"><span>      initImgZoom();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //搜索事件</span></span>
<span class="line"><span>      document.querySelector(&quot;.webpage-container input[type=search]&quot;).addEventListener(&quot;input&quot;, (e) =&gt; {</span></span>
<span class="line"><span>        if(!searchReady){</span></span>
<span class="line"><span>            if(EasyNotice) EasyNotice.createNotice(LANG === &#39;zh-cn&#39; ? &#39;正在建立全文索引，请稍后重试...&#39; : &#39;Full-text indexing, please try again later.&#39;, 1500, &#39;left:12px;top:12px;&#39;, true, false);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>&lt;/script&gt;\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br><span class="line-number">727</span><br><span class="line-number">728</span><br><span class="line-number">729</span><br><span class="line-number">730</span><br><span class="line-number">731</span><br><span class="line-number">732</span><br><span class="line-number">733</span><br><span class="line-number">734</span><br><span class="line-number">735</span><br><span class="line-number">736</span><br><span class="line-number">737</span><br><span class="line-number">738</span><br><span class="line-number">739</span><br><span class="line-number">740</span><br><span class="line-number">741</span><br><span class="line-number">742</span><br><span class="line-number">743</span><br><span class="line-number">744</span><br><span class="line-number">745</span><br><span class="line-number">746</span><br><span class="line-number">747</span><br><span class="line-number">748</span><br><span class="line-number">749</span><br><span class="line-number">750</span><br><span class="line-number">751</span><br><span class="line-number">752</span><br><span class="line-number">753</span><br><span class="line-number">754</span><br><span class="line-number">755</span><br><span class="line-number">756</span><br><span class="line-number">757</span><br><span class="line-number">758</span><br><span class="line-number">759</span><br><span class="line-number">760</span><br><span class="line-number">761</span><br><span class="line-number">762</span><br><span class="line-number">763</span><br><span class="line-number">764</span><br><span class="line-number">765</span><br><span class="line-number">766</span><br><span class="line-number">767</span><br><span class="line-number">768</span><br><span class="line-number">769</span><br><span class="line-number">770</span><br><span class="line-number">771</span><br><span class="line-number">772</span><br><span class="line-number">773</span><br><span class="line-number">774</span><br><span class="line-number">775</span><br><span class="line-number">776</span><br><span class="line-number">777</span><br><span class="line-number">778</span><br><span class="line-number">779</span><br><span class="line-number">780</span><br><span class="line-number">781</span><br><span class="line-number">782</span><br><span class="line-number">783</span><br><span class="line-number">784</span><br><span class="line-number">785</span><br><span class="line-number">786</span><br><span class="line-number">787</span><br><span class="line-number">788</span><br><span class="line-number">789</span><br><span class="line-number">790</span><br><span class="line-number">791</span><br><span class="line-number">792</span><br><span class="line-number">793</span><br><span class="line-number">794</span><br><span class="line-number">795</span><br><span class="line-number">796</span><br><span class="line-number">797</span><br><span class="line-number">798</span><br><span class="line-number">799</span><br><span class="line-number">800</span><br><span class="line-number">801</span><br><span class="line-number">802</span><br><span class="line-number">803</span><br><span class="line-number">804</span><br><span class="line-number">805</span><br><span class="line-number">806</span><br><span class="line-number">807</span><br><span class="line-number">808</span><br><span class="line-number">809</span><br><span class="line-number">810</span><br><span class="line-number">811</span><br><span class="line-number">812</span><br><span class="line-number">813</span><br><span class="line-number">814</span><br><span class="line-number">815</span><br><span class="line-number">816</span><br><span class="line-number">817</span><br><span class="line-number">818</span><br><span class="line-number">819</span><br><span class="line-number">820</span><br><span class="line-number">821</span><br><span class="line-number">822</span><br><span class="line-number">823</span><br><span class="line-number">824</span><br><span class="line-number">825</span><br><span class="line-number">826</span><br><span class="line-number">827</span><br><span class="line-number">828</span><br><span class="line-number">829</span><br><span class="line-number">830</span><br><span class="line-number">831</span><br><span class="line-number">832</span><br><span class="line-number">833</span><br><span class="line-number">834</span><br><span class="line-number">835</span><br><span class="line-number">836</span><br><span class="line-number">837</span><br><span class="line-number">838</span><br><span class="line-number">839</span><br><span class="line-number">840</span><br></div></div>`,2),i=[e];function r(c,b,t,u,m,o){return a(),s("div",null,i)}const h=n(l,[["render",r]]);export{g as __pageData,h as default};
