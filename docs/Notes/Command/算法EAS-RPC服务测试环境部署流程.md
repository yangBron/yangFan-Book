
<h1 align = "center" style="color: #000000">算法EAS-RPC服务测试环境部署流程交接说明</h1>

**测试环境地址：http://test-dc.eas.jc.in**

## 对应部署分支

- 测试环境默认推荐使用Develop分支部署，测试同学也可根据实际测试情况 部署其他测试子分支  


## 部署方法  

- 打镜像 -> 推送镜像 -> 部署镜像  
  
## 打镜像  

1. 登录 **eas@ubs05**  
	- 登录指令 ssh eas@ubs05 密码请咨询  
```
远程连接
ssh eas@ubs05
```

2. 进入**eas-rpc**相关项目文件夹，确认分支为：**Develop** 
	- 查看分支命令 git branch
```
检查当前分支
git branch

切换分支
git checkout 分支名称
```

3. 确认**Develop**分支内容为远端最新内容  
	- 更新命令：git fetch origin ，git reset --hard origin/develop
```
同步远程仓库最新提交和分支信息
git fetch origin

指向远程仓库的develop
git reset --hard origin/develop
```

4. 打镜像 与 推镜像  
```
打包: docker build -t docker.eas.jc.in/eas-rpc-server:[version] .
推送: docker push docker.eas.jc.in/eas-rpc-server:[version]
	
例子
docker build -t docker.eas.jc.in/eas-rpc-server:eas-test-202402011522 .
docker push docker.eas.jc.in/eas-rpc-server:eas-test-202402011522
```


## 部署镜像  
1. 登录 **eas@UBS08**  
	- 登录指令 ssh eas@UBS08 密码请咨询  
```
ssh eas@UBS08
eas123
```

2. 进入test环境文件下，并找到对应的docker-compose.yml
```
cd test    // 进入test文件夹

ls   // 查找test目录下的docker-compose.yml文件

pwd   // 检查目录
```


3. 通过vim 修改docker-compose.yml 中的发版的编号，并保存  
	- 修改rpc-server中的 `image`字段 修改为刚刚推送的镜像名称  
```
vim docker-compose.yml
i 进入编辑模式
:wq 保存
```

## 重启服务
- 重新服务，更新镜像部署
	- done：更新成功
	- false：更新失败
```
docker-compose up -d
```

