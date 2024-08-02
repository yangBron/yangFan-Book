import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.CdPWczmu.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/genarate-season.md","filePath":"Script/genarate-season.md","lastUpdated":1722565193000}'),e={name:"Script/genarate-season.md"},l=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 生成用例统计文档</span></span>
<span class="line"><span> * 命令: node .\\9.脚本\\genarate-season.js [迭代版本]</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const projectName = &quot;1.PE&quot;;</span></span>
<span class="line"><span>const directoryPath = &quot;1.用例/&quot; + projectName + &quot;用例库&quot;;</span></span>
<span class="line"><span>const targetPath = &quot;2.迭代/&quot; + projectName;</span></span>
<span class="line"><span>const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const noMode = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let args = process.argv[2] || 99;</span></span>
<span class="line"><span>if (isNaN(Number(args))) {</span></span>
<span class="line"><span>  console.error(\`参数错误:【\${args}】,请输入数字！\`);</span></span>
<span class="line"><span>  return;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>  let caseMap = {};</span></span>
<span class="line"><span>  const fp = path.join(targetPath, args + &quot;.md&quot;);</span></span>
<span class="line"><span>  let isExists = await fs.existsSync(fp);</span></span>
<span class="line"><span>  if (isExists) {</span></span>
<span class="line"><span>    console.error(\`创建失败: 文件【\${fp}】 已存在！\`);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const folders = await fs.readdirSync(directoryPath);</span></span>
<span class="line"><span>  await Promise.all(</span></span>
<span class="line"><span>    folders.map(async (folder) =&gt; {</span></span>
<span class="line"><span>      const fileStat = fs.statSync(path.join(directoryPath, folder));</span></span>
<span class="line"><span>      if (fileStat.isFile()) {</span></span>
<span class="line"><span>        console.log(fileStat.isFile(), &quot;fileStat.isFile()&quot;);</span></span>
<span class="line"><span>        if (path.extname(folder) === &quot;.md&quot;) noMode.push(folder);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        const _path = path.join(directoryPath, folder);</span></span>
<span class="line"><span>        const files = await fs.readdirSync(_path);</span></span>
<span class="line"><span>        const markdownFiles = files.filter(</span></span>
<span class="line"><span>          (file) =&gt; path.extname(file) === &quot;.md&quot;</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        caseMap[folder] = markdownFiles;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let content = \`[[0.视图/\${projectName}/用例视图|用例视图]] | [[0.视图/\${projectName}/迭代视图|迭代视图]]\\n\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  content += &quot;\\n ◻️未测    🚫跳过     ✅通过    ❌ 失败\\n\\n&quot;;</span></span>
<span class="line"><span>  if (noMode.length) {</span></span>
<span class="line"><span>    content += &quot;\\n## 未分组\\n\\n&quot;;</span></span>
<span class="line"><span>    noMode.map(</span></span>
<span class="line"><span>      (c) =&gt;</span></span>
<span class="line"><span>        (content += \`- [[\${directoryPath}/\${c}|\${c.split(&quot;.md&quot;)[0]}]] ◻️\\n\`)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Object.keys(caseMap)</span></span>
<span class="line"><span>    .sort((a, b) =&gt; a.localeCompare(b))</span></span>
<span class="line"><span>    .map((mode) =&gt; {</span></span>
<span class="line"><span>      content += \`\\n## \${mode}\\n\\n\`;</span></span>
<span class="line"><span>      caseMap[mode]</span></span>
<span class="line"><span>        .sort((a, b) =&gt; a.localeCompare(b))</span></span>
<span class="line"><span>        .map(</span></span>
<span class="line"><span>          (c) =&gt; (content += \`- [[\${mode}/\${c}|\${c.split(&quot;.md&quot;)[0]}]] ◻️\\n\`)</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  isExists = await fs.existsSync(fp);</span></span>
<span class="line"><span>  if (isExists) {</span></span>
<span class="line"><span>    console.error(\`创建失败: 文件【\${fp}】 已存在！\`);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const isTargetExists = await fs.existsSync(targetPath);</span></span>
<span class="line"><span>  if (!isTargetExists) {</span></span>
<span class="line"><span>    await fs.mkdirSync(targetPath);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  await fs.writeFileSync(fp, content);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div>`,1),r=[l];function i(c,t,b,o,u,m){return a(),n("div",null,r)}const h=s(e,[["render",i]]);export{f as __pageData,h as default};
