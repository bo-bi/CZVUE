* 通过refs操作DOM
    - 获取对象
         + 可以获取原生DOM
         + 也可以获取组件对象
    - 父子组件可以互相操作各自DOM
         + 父组件操作子组件的DOM  this.$refs.sub.$el
         + 子组件操作父组件的DOM  this.$parent.$refs.myDiv
    - 组件自身下有很多属性($refs、$el、$parent等，这里有很多未用到)
         + this 自身是组件
         + this.$refs.sub 子组件
    
 * 生命周期中的两个事件
    - created 完成数据的初始化，但是DOM未生成
    - mounted 数据装载在DOM上后，将数据渲染到DOM上，DOM已经生成
