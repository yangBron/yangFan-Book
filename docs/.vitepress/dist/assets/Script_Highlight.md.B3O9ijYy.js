import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.DO75OpyS.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/Highlight.md","filePath":"Script/Highlight.md","lastUpdated":null}'),e={name:"Script/Highlight.md"},l=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>&lt;&lt;EOF</span></span>
<span class="line"><span>刷新用例内highlight格式</span></span>
<span class="line"><span>作者：杨凡</span></span>
<span class="line"><span>日期：2023-12-13</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>function r(){</span></span>
<span class="line"><span>for file in \`ls $1\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    if [ -d $1&quot;/&quot;$file ]</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        if [ $file == &quot;4.小电容布局用例库&quot; ]</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            echo $file&quot;此目录排除，不替换&quot;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            echo $1&quot;/&quot;$file&quot;为目录&quot;</span></span>
<span class="line"><span>            r $1&quot;/&quot;$file</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        if [ $file == &quot;highlight.sh&quot; ]</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            echo $file&quot;此文件为本文件，不替换&quot;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            #替换文本内容  </span></span>
<span class="line"><span>            echo $1&quot;/&quot;$file &quot;为文件&quot;</span></span>
<span class="line"><span>            find -name $file | xargs perl -pi -e &#39;s|&lt;|==|g&#39;</span></span>
<span class="line"><span>            find -name $file | xargs perl -pi -e &#39;s|&gt; |== |g&#39;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>           fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>r .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,1),i=[l];function r(c,t,b,u,o,m){return a(),n("div",null,i)}const f=s(e,[["render",r]]);export{d as __pageData,f as default};
