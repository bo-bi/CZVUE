//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//引入主体
import App from './components/app.vue';
//路由切换页面
import List from './components/list.vue';
import Detail from './components/detail.vue';

//安装路由插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由
let router = new VueRouter({
    //routes
    routes: [
        {
            //一个个对象
            name: 'list',
            path: '/list',
            component: List
        },
        {   name: 'detail',
            //以下规则匹配 /detail?xxx=xxx&xxx=xxx 多少个查询字符串都不影响,即使加了只是个名称而已
            // path: '/detail?i=5',

            //查询字符串path不用改
            path: '/detail',
            component: Detail
        },
        {   name: 'detailPath',
            //{ name: 'detailPath',params: {id: index} } -> /detail/1
            //params需要声明
            path: '/detail/:i',
            component: Detail
        }
    ]
});

//new Vue 启动
new Vue({
   el: '#app',
    //让vue知道我们的路由规则
   router,//可以简写为router
   render: c=>c(App)
});