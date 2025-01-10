# 1. 预期目标
### 关于ddt
- `ddt：Data Driver Tests`
- 数据驱动ddt可以实现测试数据与测试脚本的分离，通过ddt来将测试数据加载到测试脚本中。采用数据驱动设计模式使一组数据对应一个测试用例，通过数据的该笔那从而驱动自动化测试的执行。既能减少代码量，也能降低代码的维护成本
### 安装ddt
- `pip install ddt`

# 2. 包含类的装饰器ddt和方法装饰器data
### ddt
- 类装饰器，用来标记当前类使用ddt数据驱动
```python
@ddt.ddt
```
### data
- 函数装饰器，用来给函数传递数据
```python
@data()
```
### unpack
- 函数装饰器，用来对传递的数据进行解包，解列表、元组、字典
```python
@unpack
```
### file_data
- 函数装饰器，用来直接读取yaml，json格式的文件数据 读取获取的数据是字典列表
```python
@ddt.data_file()
```
