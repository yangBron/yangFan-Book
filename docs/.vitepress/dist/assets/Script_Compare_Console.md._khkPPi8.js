import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.DO75OpyS.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Script/Compare_Console.md","filePath":"Script/Compare_Console.md","lastUpdated":null}'),e={name:"Script/Compare_Console.md"},l=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class cmpFile:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, file1, file2):</span></span>
<span class="line"><span>        self.file1 = file1</span></span>
<span class="line"><span>        self.file2 = file2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def fileExists(self):</span></span>
<span class="line"><span>        if os.path.exists(self.file1) and \\</span></span>
<span class="line"><span>                os.path.exists(self.file2):</span></span>
<span class="line"><span>            return True</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            return False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 对比文件不同之处, 并返回结果</span></span>
<span class="line"><span>    def compare(self):</span></span>
<span class="line"><span>        if cmpFile(self.file1, self.file2).fileExists() == False:</span></span>
<span class="line"><span>            return []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        fp1 = open(self.file1, &quot;r&quot;, encoding=&#39;UTF-8&#39;)</span></span>
<span class="line"><span>        fp2 = open(self.file2, &quot;r&quot;, encoding=&#39;UTF-8&#39;)</span></span>
<span class="line"><span>        flist1 = [i for i in fp1]</span></span>
<span class="line"><span>        flist2 = [x for x in fp2]</span></span>
<span class="line"><span>        fp1.close()</span></span>
<span class="line"><span>        fp2.close()</span></span>
<span class="line"><span>        flines1 = len(flist1)</span></span>
<span class="line"><span>        flines2 = len(flist2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if flines1 &lt; flines2:</span></span>
<span class="line"><span>            flist1[flines1:flines2 + 1] = &#39; &#39; * (flines2 - flines1)</span></span>
<span class="line"><span>        if flines2 &lt; flines1:</span></span>
<span class="line"><span>            flist2[flines2:flines1 + 1] = &#39; &#39; * (flines1 - flines2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        counter = 1</span></span>
<span class="line"><span>        cmpreses = []</span></span>
<span class="line"><span>        for x in zip(flist1, flist2):</span></span>
<span class="line"><span>            if x[0] == x[1]:</span></span>
<span class="line"><span>                counter += 1</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            if x[0] != x[1]:</span></span>
<span class="line"><span>                cmpres = &#39;%s和%s第%s行不同, 内容为: %s --&gt; %s&#39; % \\</span></span>
<span class="line"><span>                         (self.file1, self.file2, counter, x[0].strip(), x[1].strip())</span></span>
<span class="line"><span>                cmpreses.append(cmpres)</span></span>
<span class="line"><span>                counter += 1</span></span>
<span class="line"><span>        return cmpreses</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    cmpfile = cmpFile(r&#39;D:\\A_web_install\\minLayer_bgaescape_data.txt&#39;,</span></span>
<span class="line"><span>                      r&#39;D:\\A_工具箱\\A22156_v2\\A_Complete_test\\bga_minLayer_result.txt&#39;)</span></span>
<span class="line"><span>    difflines = cmpfile.compare()</span></span>
<span class="line"><span>    for i in difflines:</span></span>
<span class="line"><span>        print(i, end=&#39;\\n&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>`,1),i=[l];function r(c,b,t,m,f,u){return a(),n("div",null,i)}const d=s(e,[["render",r]]);export{_ as __pageData,d as default};
