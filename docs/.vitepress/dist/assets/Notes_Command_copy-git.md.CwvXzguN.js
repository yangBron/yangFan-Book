import{_ as a,c as e,o as s,a1 as i}from"./chunks/framework.CdPWczmu.js";const b=JSON.parse('{"title":"gti常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"Notes/Command/copy-git.md","filePath":"Notes/Command/copy-git.md","lastUpdated":null}'),n={name:"Notes/Command/copy-git.md"},t=i(`<h1 id="gti常用命令" tabindex="-1">gti常用命令 <a class="header-anchor" href="#gti常用命令" aria-label="Permalink to &quot;gti常用命令&quot;">​</a></h1><h2 id="基本git命令" tabindex="-1">基本git命令 <a class="header-anchor" href="#基本git命令" aria-label="Permalink to &quot;基本git命令&quot;">​</a></h2><h3 id="git-init" tabindex="-1">git init <a class="header-anchor" href="#git-init" aria-label="Permalink to &quot;git init&quot;">​</a></h3><p>这可能是你在<code>git</code>中启动新项目所使用的第一个命令。此命令将创建一个空白的新存储库，然后你可以将源代码存储在此存储库中。 用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者，你也可以在<code>git init</code>命令中使用存储库名称</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git init &lt;your repository name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-config" tabindex="-1">git config <a class="header-anchor" href="#git-config" aria-label="Permalink to &quot;git config&quot;">​</a></h3><p>此命令可设置身份--Name和Email地址，并且每次提交时会使用此信息，用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global user.name &quot;your name&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;your email&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="git-version" tabindex="-1">git version <a class="header-anchor" href="#git-version" aria-label="Permalink to &quot;git version&quot;">​</a></h3><p>检查你使用的是哪个版本的git，用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-clone" tabindex="-1">git clone <a class="header-anchor" href="#git-clone" aria-label="Permalink to &quot;git clone&quot;">​</a></h3><p><code>git clone</code>命令将使用现有的存储库进行复制。<code>git init</code>和<code>git clone</code>之间有一个主要区别：在你需要现有的存储库上进行复制时，使用<code>git clone</code>，<code>git clone</code>命令之前首先在内部使用<code>git init</code>命令，然后检出所有内容。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone &lt;your project URL&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-commit" tabindex="-1">git commit <a class="header-anchor" href="#git-commit" aria-label="Permalink to &quot;git commit&quot;">​</a></h3><p><code>git commit</code>会将更改添加到本地存储库。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git commit -m &quot;your useful commit message&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>绕过<code>githooks</code>检测</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git commit -m &quot;your useful commit message&quot; --no-verify</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-status" tabindex="-1">git status <a class="header-anchor" href="#git-status" aria-label="Permalink to &quot;git status&quot;">​</a></h3><p>使用此<code>git</code>命令可以方便地查看有多少文件需要得到关注。你可以随时运行此命令。此命令可以用来在<code>git add</code>和<code>git commit</code>之间查看状态。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-branch" tabindex="-1">git branch <a class="header-anchor" href="#git-branch" aria-label="Permalink to &quot;git branch&quot;">​</a></h3><p>可以用来列出分支，创建分支和删除分支。用法：</p><ol><li>列出所有分支</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git branch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>创建新的分支</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git branch &lt;branch_name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>删除分支</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git branch -d &lt;branch_name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-checkout" tabindex="-1">git checkout <a class="header-anchor" href="#git-checkout" aria-label="Permalink to &quot;git checkout&quot;">​</a></h3><p>用于在分支之间进行切换。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git checkout &lt;branch_name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此外，你也可以创建和检出到分支，用法如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git checkout -b &lt;your_new_branch_name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="中级git命令" tabindex="-1">中级git命令 <a class="header-anchor" href="#中级git命令" aria-label="Permalink to &quot;中级git命令&quot;">​</a></h2><h3 id="git-remote" tabindex="-1">git remote <a class="header-anchor" href="#git-remote" aria-label="Permalink to &quot;git remote&quot;">​</a></h3><p>此命令会将你的本地存储库连接到远程存储库。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git remote add &lt;shortname&gt;&lt;url&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>举例</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git remote add origin ssh://git@192.168.57.75:9022/design-center/eas-manual.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其他命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git remote   # 列出remote aliases</span></span>
<span class="line"><span>            # 如果你clone一个project,git会自动将原来的url添加进来,别名就叫：origin</span></span>
<span class="line"><span>git remote -v   # 可以看见每一个别名对应的实际url</span></span>
<span class="line"><span>git remote add [alias] [url]   # 添加一个新的remote repo</span></span>
<span class="line"><span>git remote rm [alias]   # 删除一个存在的remote alias</span></span>
<span class="line"><span>git remote rename [old-alias] [new-alias]   # 重命名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="git-push" tabindex="-1">git push <a class="header-anchor" href="#git-push" aria-label="Permalink to &quot;git push&quot;">​</a></h3><p>(借助<code>git remote</code>命令)与远程存储库连接之后，就需要将更改推送到存储库。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push -u &lt;short_name&gt; &lt;your_branch_name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>举例</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push -u origin develop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-push-set-upstream" tabindex="-1">git push --set-upstream <a class="header-anchor" href="#git-push-set-upstream" aria-label="Permalink to &quot;git push --set-upstream&quot;">​</a></h3><p>在使用<code>git push</code>之前，我们应该先设置好<code>origin</code>和<code>upstream</code>。下面是设置<code>upstream</code>的命令。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push --set-upstream &lt;short_name&gt; &lt;branch_name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>举例</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push --set-upstream origin develop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-fetch" tabindex="-1">git fetch <a class="header-anchor" href="#git-fetch" aria-label="Permalink to &quot;git fetch&quot;">​</a></h3><p>当需要系在其他团队成员的更改时，就得使用<code>git fetch</code>。 此命令会下载有关提交、引用等的所有信息，因此你可以在将这些更改应用于本地存储库之前对其进行检查。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git fetch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-pull" tabindex="-1">git pull <a class="header-anchor" href="#git-pull" aria-label="Permalink to &quot;git pull&quot;">​</a></h3><p><code>git pull</code>命令下载内容(而不是元数据)，并立即用最新的内容更新本地存储库。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git pull &lt;remote_url&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h3><p>此git命令会临时存储已修改的文件。你可以使用以下git命令处理stash工作。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git stash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以使用以下命令查看所有stash</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git stash list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你需要应用stash到分支，那就使用<code>apply</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git stash apply</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git stash drop</span></span>
<span class="line"><span>git stash clera</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-label="Permalink to &quot;git log&quot;">​</a></h3><p>在<code>git log</code>的帮助下，你可以看到所有之前的提交，并且最近提交出现在最前面。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>默认情况下，他将显示当前已检查分支的所有提交，但是你可以强制通过所有选项来查看所有分支的提交</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log --all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其他命令：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log -oneline -number  # 每条log只显示一行，显示number条</span></span>
<span class="line"><span>git log -oneline -graph   # 可以图形化地表示出分支合并历史</span></span>
<span class="line"><span>git log &lt;branch_name&gt;   # 可以显示特定分支的log</span></span>
<span class="line"><span>git log -oneline branch1 ^branch2,   # 可以查看在分支1，不在分支2中的提交，^表示排除这个分支</span></span>
<span class="line"><span>git log -decorate   # 会显示出tag信息</span></span>
<span class="line"><span>git log -author=[author name]   # 可以指定作者的提交历史</span></span>
<span class="line"><span>git log -since -before -until -after   # 可以根据提交时间筛选log</span></span>
<span class="line"><span>git log -no-merges   # 可以将merge的commites排除在外</span></span>
<span class="line"><span>git log -grep   # 根据commit信息过略log：git log -grep=keywords</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="git-shortlog" tabindex="-1">git shortlog <a class="header-anchor" href="#git-shortlog" aria-label="Permalink to &quot;git shortlog&quot;">​</a></h3><p><code>git shortlog</code>命令会显示来自<code>git log</code>命令的摘要。如果你只对简短的摘要感兴趣，那么此命令就非常有用了。 这个命令有助于查看谁处理了什么，因为它对作者进行了分组。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git shortlog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-show" tabindex="-1">git show <a class="header-anchor" href="#git-show" aria-label="Permalink to &quot;git show&quot;">​</a></h3><p>与<code>git log</code>相比，此命令将显示有关特定提交的详情信息。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git show &lt;your_commit_hash&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-merge" tabindex="-1">git merge <a class="header-anchor" href="#git-merge" aria-label="Permalink to &quot;git merge&quot;">​</a></h3><p>把一个分支<code>merge</code>进当前分支，用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git merge [alias]/[branch_name]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此命令会将<code>&lt;branch_name&gt;</code>合并到当前你选择的分支中</p><h2 id="高级git命令" tabindex="-1">高级git命令 <a class="header-anchor" href="#高级git命令" aria-label="Permalink to &quot;高级git命令&quot;">​</a></h2><h3 id="git-rebase" tabindex="-1">git rebase <a class="header-anchor" href="#git-rebase" aria-label="Permalink to &quot;git rebase&quot;">​</a></h3><p><code>git rebase</code>类似于<code>git merge</code>命令。他把两个分支集成到一个分支中，但有一个不一样的地方：<code>git rebase</code>命令将会重写提交记录。 当你有多个私有分支合并到单个分支时，应使用<code>git rebase</code>命令。他将使用提交历史成为线性的。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git rebase &lt;base&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-pull-rebase" tabindex="-1">git pull --rebase <a class="header-anchor" href="#git-pull-rebase" aria-label="Permalink to &quot;git pull --rebase&quot;">​</a></h3><p>在大多数情况下，当你使用<code>git pull</code>时，你需要重新新设置基准(并且不进行合并)。 此时，你就可以使用此选项。用法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git pull --rebase</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将帮助保持干净的历史记录，另外，还可以避免多次合并。</p><h3 id="git-tag" tabindex="-1">git tag <a class="header-anchor" href="#git-tag" aria-label="Permalink to &quot;git tag&quot;">​</a></h3><p>在git中，标签很有用，你可以使用他们来管理发布。你可以将<code>git tag</code>视为不回改变的分支。尤其是要公开发布的时候，则更为重要。用法：</p><ul><li>查看本地tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git tag -l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看远程tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git ls-remote --tags origin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>新建本地tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git tag -a &#39;版本号&#39; -m &#39;备注xxx&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>推送本地tag到远程tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push origin &#39;版本号&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>推送本地所有tag到远程</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git tag origin --tags</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>删除本地tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git tag -d &#39;版本号&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>删除本地所有tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git tag -l | xargs git tag -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>删除远程tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push origin: refs/tags/版本号</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>删除远程所有tag</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git show-ref --tag | awk &#39;{pring &quot;:&quot; $2}&#39; | xargs git push origin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,114),l=[t];function p(r,d,o,c,g,u){return s(),e("div",null,l)}const m=a(n,[["render",p]]);export{b as __pageData,m as default};