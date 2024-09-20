[[0.视图/1.PE/用例视图]] | [[0.视图/1.PE/迭代视图]]

## 前置条件

- 使用项目管理员账号登录pe
- 进入项目编号为A1886的输入资料模块
- 输入资料中需要存在的文件：Next&Test.txt,双击打开.zip,A12341.brd,A19942.dsn,缓存文件.word,项目表格.xlsx,Bron& （ntx-901）.pdf

## 步骤

1. 双击打开各种类型的<==文件==>: 成功打开
2. 查看文件是否缓存至本地: 为缓存的文件成功缓存至本地

## 测试数据

- 打开的文件
	- 文件类型: txt,zip,brd,dsn,word,xlsx,pdf

- 已缓存至本地的文件
	- 文件名称: Next&Test.txt

- 未缓存之本地的文件
	- 文件名称: Bron& （ntx-901）.pdf

## 历史结果

```dataviewjs
    await dv.view('9.脚本/case-result')
```
