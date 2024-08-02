import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.CdPWczmu.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/push.md","filePath":"Script/push.md","lastUpdated":1722565193000}'),e={name:"Script/push.md"},l=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span>node ./.obsidian/docsify/sidebar.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DATE=$(date +&#39;%Y%m%d-%H%M%S&#39;)</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;Manual sync at \${DATE}&quot;</span></span>
<span class="line"><span>git push origin develop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Manual push successfully!&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),i=[l];function t(c,r,o,d,u,b){return a(),n("div",null,i)}const h=s(e,[["render",t]]);export{_ as __pageData,h as default};
