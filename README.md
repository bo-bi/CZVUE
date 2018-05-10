* 通过<router-link></router-link>跳转页面传递参数
  - #details/?id=1(字符串传递)
    + query
    + 路由配置中path不变
    + this.$route.query.id
  - #detail/1(path传递)
    + params
    + 路由配置中path: '/detail/:i',i要对应传递的参数名
    + this.$route.params.id