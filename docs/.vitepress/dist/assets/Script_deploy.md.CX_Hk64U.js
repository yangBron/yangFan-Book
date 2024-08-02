import{_ as s,c as n,o as a,a1 as e}from"./chunks/framework.CdPWczmu.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/deploy.md","filePath":"Script/deploy.md","lastUpdated":1722565193000}'),p={name:"Script/deploy.md"},l=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git pull origin develop</span></span>
<span class="line"><span>git push wag develop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd  W:/git_server/eas-case-doc</span></span>
<span class="line"><span>git reset --hard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Manual sync successfully!&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),i=[l];function c(t,r,o,d,b,u){return a(),n("div",null,i)}const h=s(p,[["render",c]]);export{m as __pageData,h as default};
