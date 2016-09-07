# `react-native-smartbar`

>### **Get Started**  

- DEMO

    ![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo.gif?imageView2/1/w/140/h/280)

- toggleBar

    ![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo-2.gif?imageView2/1/w/140/h/280)

- only image

    do not fill in the text:
![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo-3.png?imageView1/1/w/500/h/110)
- only text

    do not fill in the image:
 ![Witt Bulter](http://obqqxnnm4.bkt.clouddn.com/demo-4.png?imageView1/1/w/500/h/110)



>### **documentation**    

- TabBar

| attribute   | type   | required | description                  | example                       |
| ----------- | ------ | -------- | ---------------------------- | ----------------------------- |
| activeColor | string | false    | active color                 | activeColor={'#FE985B'}       |
| toggleBar   | bool   | false    | hide and show                | toggleBar={this.state.toggle} |
| index       | number | false    | jump index and default index | index={this.state.index}      |
| style       | style  | false    | footer bar style             | style={{height: 500}}         |


- TabBar.Item

| attribute    | type   | required | description      | example                           |
| ------------ | ------ | -------- | ---------------- | --------------------------------- |
| icon         | image  | false    | default icon     | icon={require('./img/abc.png')}   |
| selectedIcon | image  | false    | active icon      | icon={require('./img/abc_2.png')} |
| text         | string | false    | default text     | text={'List'}                     |
| style        | style  | false    | footer bar style | style={{height: 500}}             |



>### **Features**   

1. Show and hide
    
    ```javascript
        <TabBar
               // ...
                ref={tabbar=> this.tabbar=tabbar}
        >
     
        // toggle 
        this.tabbar.toggleBar()
     
        // OR set bool
        this.tabbar.toggleBar(true)
        this.tabbar.toggleBar(false)
    ```
    
    OR ...
    
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

2. Jump 
    ```javascript
        <TabBar
               // ...
                ref={tabbar=> this.tabbar=tabbar}
        >
     
        // jump
        this.tabbar.jumpToIndex(index)
     
    ```
    OR ...
    
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

3. Any style
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


>### **Example**  
 
    see /example

>### **Support**      

- MAIL   `(# = @) => nanazuimeng123#gmail.com`
- [ISSUES](https://github.com/WittBulter/react-native-smartbar/issues)




















