import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.DO75OpyS.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/view-seasons.md","filePath":"Script/view-seasons.md","lastUpdated":null}'),e={name:"Script/view-seasons.md"},l=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 迭代视图</span></span>
<span class="line"><span> * todo. 热力图</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>let caseResMap = {}</span></span>
<span class="line"><span>let seasons = []</span></span>
<span class="line"><span>let seasonLink = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const projectName = dv.current().file.folder.split(&#39;/&#39;)[1]</span></span>
<span class="line"><span>dv.pages(\`&quot;2.迭代/\${projectName}&quot;\`).map(b =&gt; {</span></span>
<span class="line"><span>	b.file.lists.map(t =&gt; {</span></span>
<span class="line"><span>		let mode = t.link.toString().split(&#39;&gt;&#39;)[1].split(&#39;]]&#39;)[0]</span></span>
<span class="line"><span>		const texts = t.text.trim().split(/\\s+/)</span></span>
<span class="line"><span>		const status = texts[texts.length - 1]</span></span>
<span class="line"><span>		const caseName = t.outlinks.toString()</span></span>
<span class="line"><span>		let season = b.file.name</span></span>
<span class="line"><span>		caseResMap[mode] = caseResMap[mode] || {}</span></span>
<span class="line"><span>		caseResMap[mode][caseName] = caseResMap[mode][caseName] || {}</span></span>
<span class="line"><span>		caseResMap[mode][caseName][season] = \`[[\${season}#\${mode} | \${status}]]\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if (seasons.indexOf(season) == -1) seasons.push(season)</span></span>
<span class="line"><span>		seasonLink[season] = b.file.link</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>seasons.sort((a, b) =&gt; b - a)</span></span>
<span class="line"><span>let table = []</span></span>
<span class="line"><span>Object.keys(caseResMap).sort((a, b) =&gt;  a.localeCompare(b)).map(mode =&gt; {</span></span>
<span class="line"><span>	Object.keys(caseResMap[mode]).sort((a, b) =&gt;  a.localeCompare(b)).map((c, i) =&gt; {</span></span>
<span class="line"><span>		let line = i == 0 ? [mode.indexOf(&#39;未分组&#39;) === -1 ? mode : undefined, c] : [&#39; &#39;, c]</span></span>
<span class="line"><span>		let item = caseResMap[mode][c]</span></span>
<span class="line"><span>			seasons.map(s =&gt; {</span></span>
<span class="line"><span>				line.push(item[s] || \`[[\${s}#\${mode} | ➖]]\`)</span></span>
<span class="line"><span>			})</span></span>
<span class="line"><span>			table.push(line)</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let preHeader = [&#39;模块&#39;, &#39;用例&#39;]</span></span>
<span class="line"><span>dv.table(preHeader.concat(seasons.map(s =&gt; \`[[\${s} | S\${s}]]\`)), table)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,1),t=[l];function i(c,r,b,m,o,u){return a(),n("div",null,t)}const g=s(e,[["render",i]]);export{_ as __pageData,g as default};
