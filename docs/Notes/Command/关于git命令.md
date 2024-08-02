
<h1 align = "center" style="color: #000000">git</h1>

## 拉取远程仓库最新代码

##### 获取代码路径
![alt text](/获取代码路径.png)
##### 打开Git Bash Here
![alt text](/打开GitBashHere.png)
##### 克隆路径
```
git clone 代码路径
```
##### 进入拉取的代码目录
```
cd 目录名称
```
##### 切换代码分支
```
git checkout DiffPhase\2.0
```
##### 与本地分支合并
```
git pull
```
##### 完成拉取最新代码

## git命令


##### 创建一个新的本地仓库
```
git init   
```

##### 连接远程仓库
```
git remote add origin //仓库路径
```

##### 断开远程仓库
```
git remote remove origin
``` 

##### 查看当前连接的远程仓库
```
git remote -v
```

##### 克隆现有远程仓库
```
git clone ssh://存储库路径
```
##### 提交先前进行的更改
```
git commit   
```
##### 显示所有提交，从最新的开始
```
git log   
```
##### 显示特定文件随时间的变化
```
git log -p   
```
##### 切换分支
```
git checkout   
```
##### 回退指定commit_id
```
git reset --hard commit_id   
```
##### 同步远程仓库最新提交信息和分支信息
```
git fetch origin    
```
