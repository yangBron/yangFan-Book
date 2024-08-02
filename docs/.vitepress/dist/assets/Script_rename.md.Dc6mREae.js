import{_ as n,c as s,o as a,a1 as e}from"./chunks/framework.DO75OpyS.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/rename.md","filePath":"Script/rename.md","lastUpdated":null}'),p={name:"Script/rename.md"},l=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def rename_files():</span></span>
<span class="line"><span>    prefix = input(&quot;请输入自定义数字x: &quot;)</span></span>
<span class="line"><span>    start_index = int(input(&quot;请输入起始索引: &quot;))</span></span>
<span class="line"><span>    index = start_index</span></span>
<span class="line"><span>    for file_name in os.listdir(&#39;.&#39;):</span></span>
<span class="line"><span>        if file_name.startswith(&#39;T&#39;):</span></span>
<span class="line"><span>            start = file_name.index(&#39;_&#39;) + 1</span></span>
<span class="line"><span>            end = file_name.index(&#39;-&#39;, start)</span></span>
<span class="line"><span>            # old_index = file_name[start:end]</span></span>
<span class="line"><span>            test = &#39;Test&#39;</span></span>
<span class="line"><span>            new_name = f&quot;{test}_{prefix}.{index:04}{file_name[end:]}&quot;</span></span>
<span class="line"><span>            # os.rename(file_name, file_name.replace(old_index, f&#39;{index:04}&#39;))</span></span>
<span class="line"><span>            os.rename(file_name, new_name)</span></span>
<span class="line"><span>            print(f&quot;将文件 {file_name} 重命名为 {new_name}&quot;)</span></span>
<span class="line"><span>            index += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>rename_files()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1),i=[l];function r(t,c,m,b,_,o){return a(),s("div",null,i)}const f=n(p,[["render",r]]);export{u as __pageData,f as default};
