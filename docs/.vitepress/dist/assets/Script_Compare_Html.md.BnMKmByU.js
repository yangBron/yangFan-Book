import{_ as n,c as s,o as a,a1 as e}from"./chunks/framework.DO75OpyS.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/Compare_Html.md","filePath":"Script/Compare_Html.md","lastUpdated":null}'),p={name:"Script/Compare_Html.md"},l=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>1.difflib的HtmlDiff类创建html表格用来展示文件差异，通过make_file方法</span></span>
<span class="line"><span>2.make_file方法使用</span></span>
<span class="line"><span>make_file(fromlines, tolines [, fromdesc][, todesc][, context][, numlines])</span></span>
<span class="line"><span>用来生成一个包含表格的html文件，其内容是用来展示差异。</span></span>
<span class="line"><span>fromlines和tolines,用于比较的内容，格式为字符串组成的列表</span></span>
<span class="line"><span>fromdesc和todesc，可选参数，对应的fromlines,tolines的差异化文件的标题，默认为空字符串</span></span>
<span class="line"><span>context 和 numlines，可选参数，context 为True时，只显示差异的上下文，为false，显示全文，numlines默认为5，</span></span>
<span class="line"><span>当context为True时，控制展示上下文的行数，当context为false时,控制不同差异的高亮之间移动时“next”的开始位置</span></span>
<span class="line"><span>3.使用argparse传入两个需要对比的文件</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>import difflib</span></span>
<span class="line"><span>import argparse</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建打开文件函数，并按换行符分割内容</span></span>
<span class="line"><span>def readfile(filename):</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        with open(filename, &#39;r&#39;) as fileHandle:</span></span>
<span class="line"><span>            text = fileHandle.read().splitlines()</span></span>
<span class="line"><span>        return text</span></span>
<span class="line"><span>    except IOError as e:</span></span>
<span class="line"><span>        print(&quot;Read file Error:&quot;, e)</span></span>
<span class="line"><span>        sys.exit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 比较两个文件并输出到html文件中</span></span>
<span class="line"><span>def diff_file(filename1, filename2):</span></span>
<span class="line"><span>    text1_lines = readfile(filename1)</span></span>
<span class="line"><span>    text2_lines = readfile(filename2)</span></span>
<span class="line"><span>    d = difflib.HtmlDiff()</span></span>
<span class="line"><span>    # context=True时只显示差异的上下文，默认显示5行，由numlines参数控制，context=False显示全文，差异部分颜色高亮，默认为显示全文</span></span>
<span class="line"><span>    result = d.make_file(text1_lines, text2_lines, filename1, filename2, context=True)</span></span>
<span class="line"><span>    # 内容保存到result.html文件中</span></span>
<span class="line"><span>    with open(&#39;result.html&#39;, &#39;w&#39;) as resultfile:</span></span>
<span class="line"><span>        resultfile.write(result)</span></span>
<span class="line"><span>    print(&quot;=====================对比结束，请打开网页查看对比结果================&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    # 定义必须传入两个参数，使用格式-f1 filename1 -f2 filename</span></span>
<span class="line"><span>    # parser = argparse.ArgumentParser(description=&quot;传入两个文件参数&quot;)</span></span>
<span class="line"><span>    # parser.add_argument(&#39;-f1&#39;, action=&#39;store&#39;, dest=&#39;filename1&#39;, required=True)</span></span>
<span class="line"><span>    # parser.add_argument(&#39;-f2&#39;, action=&#39;store&#39;, dest=&#39;filename2&#39;, required=True)</span></span>
<span class="line"><span>    # given_args = parser.parse_args()</span></span>
<span class="line"><span>    # filename1 = given_args.filename1</span></span>
<span class="line"><span>    # filename2 = given_args.filename2</span></span>
<span class="line"><span>    filename1 = r&quot;D:\\A_web_install\\bga_minLayer_result.txt&quot;</span></span>
<span class="line"><span>    filename2 = r&quot;D:\\A_web_install\\minLayer_bgaescape_data.txt&quot;</span></span>
<span class="line"><span>    diff_file(filename1, filename2)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,1),i=[l];function r(c,t,m,b,u,o){return a(),s("div",null,i)}const d=n(p,[["render",r]]);export{_ as __pageData,d as default};
