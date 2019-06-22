* 生活例子：父亲让儿子自己出去买酱油

  1.父要先聆听
   
  2.父和子用的通信电话要是一个频率
   
  3.当子有需要，就触发通信

* 子组件向父组件传值（vuebus）
  - 父组件通过 new Vue() 这样的一个对象，来$on('事件名'，fn(prop1,prop2) {})
  
  - 子组件通过引入vuebus对象，来$emit('事件名',prop1,prop2)

* 用途
  - 任意两个组件间传值(不用考虑组件关系)

* 坑(https://www.cnblogs.com/dujunfeng/p/8726104.html)
  - 1.时刻监听消息处,不能赋值,this的指向问题,this指向了eventBus,应该使用箭头函数
