import{_ as s,c as n,o as a,a1 as e}from"./chunks/framework.CdPWczmu.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/case-result.md","filePath":"Script/case-result.md","lastUpdated":1722565193000}'),p={name:"Script/case-result.md"},l=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let resMap = {}</span></span>
<span class="line"><span>let seasons = []</span></span>
<span class="line"><span>let seasonLink = {}</span></span>
<span class="line"><span>const reg = /[^a-zA-Z\\u4E00-\\u9FA5]+/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const folder = dv.current().file.folder</span></span>
<span class="line"><span>const folders = folder.split(&#39;/&#39;)</span></span>
<span class="line"><span>const projectName = folders[1].replace(&#39;用例库&#39;, &#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dv.pages(\`&quot;2.迭代/\${projectName}&quot;\`).map(b =&gt; {</span></span>
<span class="line"><span>	b.file.lists.map(t =&gt; {</span></span>
<span class="line"><span>		let season = b.file.name</span></span>
<span class="line"><span>		let curMode = folders[folders.length - 1]</span></span>
<span class="line"><span>		const [caseName, status] = t.text.split(/\\s+/)</span></span>
<span class="line"><span>		const caseMode = t.section.toString().split(&#39;&gt; &#39;)[1].split(&#39;]]&#39;)[0]</span></span>
<span class="line"><span>		if ((folders.length == 2 &amp;&amp; caseMode == &#39;未分组&#39;) || (curMode.replace(reg, &#39;&#39;) === caseMode.replace(reg, &#39;&#39;))) {</span></span>
<span class="line"><span>			if (t.text.toString().split(&#39;|&#39;)[1].split(&#39;]]&#39;)[0] == dv.current().file.name) resMap[season] = status || &#39;◻️&#39;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if (seasons.indexOf(season) == -1) seasons.push(season)</span></span>
<span class="line"><span>		seasonLink[season] = b.file.link</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>seasons.sort((a, b) =&gt; b - a)</span></span>
<span class="line"><span>dv.table(seasons.map(s =&gt; \`[[2.迭代/\${projectName}/\${s} | S\${s}]]\`), [seasons.map(s =&gt; resMap[s] || &#39;➖&#39;)])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,1),t=[l];function r(c,i,o,b,u,m){return a(),n("div",null,t)}const f=s(p,[["render",r]]);export{_ as __pageData,f as default};
