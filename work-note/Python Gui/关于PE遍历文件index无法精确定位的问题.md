- 遍历文件只能将当前已经存在的文件存储在list中
- 页面文件顺序因为置顶或其他操作而发生改变，但list的文件顺序不会实时改变，所以获取的文件名称可能不是目标文件
- 如果想要获取到页面最新的版本/文件，可以依照最新的文件在最上方的逻辑，直接获取index=1的行，然后获取文件名称进行操作，更快捷，更准确

```
旧代码：
def get_fileName(self):
	"""
	@summary: 动态获取文件项，断言
	todo: 文件顺序的逻辑是新上传的文件在最上面，但是index+1的逻辑是向下遍历，如果index保持不变会进入死循环
	"""
	fileName = []
	n = 1
	controls = self.pe.DataItemControl(ClassName="el-table__row", foundIndex=n)
	while controls:
		if controls.Exists(0.1):
			fileName.append(controls.GetFirstChildControl().Name)
			n += 1
			controls = self.pe.DataItemControl(ClassName="el-table__row", foundIndex=n)
		else:
			break
	return fileName
```

```
新代码：
def get_fileName(self):
	"""
	@summary: 先通过index遍历出页面所有相关classname的文件行
	todo: 又不会写了，
	"""
	fileName = []
	n = 1
	controls = self.pe.DataItemControl(ClassName="el-table__row", foundIndex=n)
```
