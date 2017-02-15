# `react-native-smartbar`
可能是最好的tabbar。[English](https://github.com/WittBulter/react-native-smartbar/blob/master/README.md)


>### **下载**  

```sh
* 从npm库下载
sudo npm i react-native-smartbar --save
```


>### **开始**  

- 效果展示

    ![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo.gif?imageView2/1/w/140/h/280)

- 显示/隐藏

    ![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo-2.gif?imageView2/1/w/140/h/280)

- 只显示图片

    如果你希望只显示图片, 忽略此项属性即可： [text(TabBar.Item)]
![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo-3.png?imageView1/1/w/500/h/110)
- 只显示文字

    如果你希望只显示文字, 忽略此项属性即可： [image(TabBar.Item)]
 ![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo-4.png?imageView1/1/w/500/h/110)



>### **文档**    

- TabBar(底部bar)

| 属性   | 类型   | 必须 | 描述                  | 例子                       |
| ----------- | ------ | -------- | ---------------------------- | ----------------------------- |
| activeColor | string | 否    | 激活颜色                 | activeColor={'#FE985B'}       |
| toggleBar   | bool   | 否    | 显示与隐藏                | toggleBar={this.state.toggle} |
| height      | number | 否    | 高度，默认高度45px         | height={50}                   |
| index       | number | 否    | 跳转至指定路由 | index={this.state.index}      |
| style       | style  | 否    | 自定义样式             | style={{height: 500}}         |


- TabBar.Item(底部bar的每一个子项)

| 属性    | 类型   | 必须 | 描述      | 例子                           |
| ------------ | ------ | -------- | ---------------- | --------------------------------- |
| icon         | image  | 否    | 默认图标(图片)     | icon={require('./img/abc.png')}   |
| selectedIcon | image  | 否    | 激活时图标(图片)     | icon={require('./img/abc_2.png')} |
| text         | string | 否    | 默认文字     | text={'List'}                     |
| style        | style  | 否    | 自定义样式 | style={{height: 500}}             |



>### **特点**   

1. 简单敏捷的控制显示/隐藏
    
    ```javascript
        <TabBar
               // ...
                ref={tabbar=> this.tabbar=tabbar}
        >
     
        // 使用句柄的函数控制 
        this.tabbar.toggleBar()
     
        // 或是设置一个布尔值
        this.tabbar.toggleBar(true)
        this.tabbar.toggleBar(false)
    ```
    
    或者使用属性的方式：
    
    ```javascript
       <TabBar
              // ...
               toggleBar={this.state.toggle}
       >
    
       // toggle 
       componentWillReceiveProps (nextProps){
       		this.setState({
       			toggle: nextProps.toggle
       		})
       }
        
    ```

2.  标准的指定路由跳转方式：
    ```javascript
        <TabBar
               // ...
                ref={tabbar=> this.tabbar=tabbar}
        >
     
        // 使用句柄的函数跳转
        this.tabbar.jumpToIndex(index)
     
    ```
    
    或者通过设置属性的方式跳转：
    
    ```javascript
       <TabBar
              // ...
               index={this.state.index}
       >
    
       // jump 
       componentWillReceiveProps (nextProps){
            this.setState({
                index: nextProps.index
            })
       }
        
    ```

3. 可扩展的样式：

    你可以为tabbar自定义任何样式：
    ```javascript
       <TabBar
              // ...
               style={{...}}
       >
           <TabBar.Item
               // ...
               style={{...}}
            >
               <Index />
            </TabBar.Item>    
       </TabBar>
        
    ```


>### **使用例子**  
 
    参见 /example

>### **支持**      

- MAIL   `(# = @) => nanazuimeng123#gmail.com`
- [ISSUES](https://github.com/WittBulter/react-native-smartbar/issues)




















