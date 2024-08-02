import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.DO75OpyS.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/view-cases.md","filePath":"Script/view-cases.md","lastUpdated":null}'),l={name:"Script/view-cases.md"},e=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 用例视图</span></span>
<span class="line"><span> * 1. 元数据支持模块</span></span>
<span class="line"><span> * 2. 支持模块级别查看用例</span></span>
<span class="line"><span> * 3. 支持模版</span></span>
<span class="line"><span> * 4. 支持切换查看模式</span></span>
<span class="line"><span> * 5. 支持返回首页</span></span>
<span class="line"><span> * 6. 每个测试计划一个文件，用以维护测试状态</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>let modes = {};</span></span>
<span class="line"><span>const projectName = dv.current().file.folder.split(&#39;/&#39;)[1]</span></span>
<span class="line"><span>let caseMap = {};</span></span>
<span class="line"><span>dv.pages(\`&quot;1.用例/\${projectName}用例库&quot;\`).map((b) =&gt; {</span></span>
<span class="line"><span>  let mode = b.file.folder.split(&quot;1.用例/1.PE用例库/&quot;)[1];</span></span>
<span class="line"><span>  let item = {</span></span>
<span class="line"><span>    mode: modes[mode] ? &quot;&quot; : mode,</span></span>
<span class="line"><span>    conditions: [],</span></span>
<span class="line"><span>    steps: [],</span></span>
<span class="line"><span>    data: [],</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  modes[mode] = 1;</span></span>
<span class="line"><span>  let params = {};</span></span>
<span class="line"><span>  let paramHeaders = [];</span></span>
<span class="line"><span>  b.file.lists.map((l) =&gt; {</span></span>
<span class="line"><span>    if (!l.parent) {</span></span>
<span class="line"><span>      if (l.text != &quot;&quot;) {</span></span>
<span class="line"><span>        if (l.link.toString().indexOf(&quot;前置条件&quot;) &gt; 0) {</span></span>
<span class="line"><span>          item.conditions.push(l.text);</span></span>
<span class="line"><span>        } else if (l.link.toString().indexOf(&quot;步骤&quot;) &gt; 0) {</span></span>
<span class="line"><span>          item.steps.push(l.text);</span></span>
<span class="line"><span>        } else if (l.link.toString().indexOf(&quot;测试数据&quot;) &gt; 0) {</span></span>
<span class="line"><span>          item.data.push(l.text);</span></span>
<span class="line"><span>          l.children.map((c) =&gt; {</span></span>
<span class="line"><span>            const [h, value] = c.text.split(&quot;:&quot;);</span></span>
<span class="line"><span>            if (paramHeaders.indexOf(h) == -1) paramHeaders.push(h);</span></span>
<span class="line"><span>            params[l.text] = params[l.text] || {};</span></span>
<span class="line"><span>            params[l.text][h] = value;</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  let conBody;</span></span>
<span class="line"><span>  if (item.conditions.length) {</span></span>
<span class="line"><span>    conBody = &quot;&quot;;</span></span>
<span class="line"><span>    item.conditions.map((s) =&gt; {</span></span>
<span class="line"><span>      conBody += \`- \${s}\\n\`;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let stepBody;</span></span>
<span class="line"><span>  if (item.steps.length) {</span></span>
<span class="line"><span>    stepBody = &quot;| | | |\\n|---|---|---|\\n&quot;;</span></span>
<span class="line"><span>    let stepNum = 0;</span></span>
<span class="line"><span>    item.steps.map((s) =&gt; {</span></span>
<span class="line"><span>      stepNum++;</span></span>
<span class="line"><span>      let ss = s.split(&quot;:&quot;);</span></span>
<span class="line"><span>      stepBody += \`| \${stepNum} | \${ss[0]} | \${ss[1] || &#39;&#39;} |\\n\`;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let dataBody;</span></span>
<span class="line"><span>  if (paramHeaders.length) {</span></span>
<span class="line"><span>    dataBody = &quot;| 说明 | &quot;;</span></span>
<span class="line"><span>    paramHeaders.map((d) =&gt; (dataBody += \` \${d} |\`));</span></span>
<span class="line"><span>    dataBody += \`\\n|---|\`;</span></span>
<span class="line"><span>    paramHeaders.map((d) =&gt; (dataBody += \`---|\`));</span></span>
<span class="line"><span>    Object.keys(params).map((k) =&gt; {</span></span>
<span class="line"><span>      dataBody += \`\\n| \${k} |\`;</span></span>
<span class="line"><span>      paramHeaders.map((d) =&gt; {</span></span>
<span class="line"><span>        dataBody += \` \${params[k][d] || &quot;-&quot;} |\`;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  caseMap[mode] = caseMap[mode] || [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  caseMap[mode].push({</span></span>
<span class="line"><span>    mode: mode,</span></span>
<span class="line"><span>    link: dv.sectionLink(b.file.path, b.file.name, false, b.file.name),</span></span>
<span class="line"><span>    conditions: conBody,</span></span>
<span class="line"><span>    steps: stepBody,</span></span>
<span class="line"><span>    params: dataBody,</span></span>
<span class="line"><span>    remark: &quot;&quot;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let list = [];</span></span>
<span class="line"><span>Object.keys(caseMap)</span></span>
<span class="line"><span>  .sort((a, b) =&gt; a.localeCompare(b))</span></span>
<span class="line"><span>  .map((m) =&gt; {</span></span>
<span class="line"><span>    caseMap[m]</span></span>
<span class="line"><span>      .sort((a, b) =&gt; a.link.toString().localeCompare(b.link.toString()))</span></span>
<span class="line"><span>      .map((c) =&gt; {</span></span>
<span class="line"><span>        list.push([c.mode, c.link, c.conditions, c.steps, c.params, c.remark]);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dv.table([&quot;模块&quot;, &quot;用例&quot;, &quot;前置条件&quot;, &quot;步骤&quot;, &quot;测试数据&quot;, &quot;备注&quot;], list);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div>`,1),i=[e];function r(c,b,t,m,u,o){return a(),n("div",null,i)}const g=s(l,[["render",r]]);export{q as __pageData,g as default};
