[[0.视图/1.PE/用例视图|用例视图]] | [[0.视图/1.PE/迭代视图|迭代视图]]

## 前置条件

- 无

## 步骤

1. 进入上传文件的确认页面
	1. 点击上传文件按钮
	2. 选择文件
	3. 点击确认按钮: 弹出校验对话框
	4. 点击对话框的确认按钮: 跳转至上传确认页面
2. 点击编辑子器件按钮: 弹出子器件编辑弹窗
3. 搜索框默认搜索表头为SpechoPartID
4. 点击搜索框的筛选按钮: 弹出下拉框，显示可以指定的表头：SpechoPartID，制造商零件编号，PCB Footer，Value
5. 在搜索框内输入搜索的内容
6. 点击确认按钮: 搜索成功
7. 点击排序按钮: 排序成功，支持排序的表头：SpechoPartId,BomType,Value,PCB Footprint,Tolerance,Elec-p,Temp Limit,Specs,Schematic Part,厂家/品牌,器件等级,制造商编号,库存
8. 点击筛选按钮: 筛选成功，支持筛选的表头：BomType，Tolerance，Elec-p，TempLimit，Specs，Schematic Part，厂家品牌，器件等级

## 测试数据

- 无

## 历史结果

```dataviewjs
    await dv.view('9.脚本/case-result')
```
