* 过滤器
    -  全局过滤器 Vue.filter('名称'，function(){})
    -  组件内过滤器 是options中的filters，它是一个对象，key:函数名，value:函数体
    -  若全局过滤器与组件内过滤器重名，组件内过滤器在当前组件内优先，其他范围内全局过滤器优先
    -  demo: 反转内容
