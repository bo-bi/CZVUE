* 基于路由，页面跳转的两种方式
  - 路由跳转:  `<router-link></router-link>`,
  - 编程导航:  写点击事件，点击进行跳转  this.$router.push()
* this.$router.go(-1)  根据浏览器记录，浏览器记录必须有才行
  - 前进:1
  - 后退:-1
* this.$router.push() 直接跳转到某个页面显示
  - push(参数)  push('/music')
  - push(对象)  push({name: 'music'})
        +  传递参数[query]  查询字符串 /music?id=1&name=2
           注： 不需要更改路由path
        +  传递参数[params]  path传递 /music/1/2
           注： params需要配置路由path对应的参数名
        +  还可以混用     /music/3/4?id=1&name=2
