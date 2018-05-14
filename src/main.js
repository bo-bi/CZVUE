//引入Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);

//引入主体
import App from './components/app.vue';
import Home from './components/home.vue';
import NotFoundVue from './components/notFound.vue'

//创建路由对象并配置路由规则
let router = new VueRouter();
router.addRoutes([
    //重定向
    //①通过path 两处都要改
    // {path: '/', redirect: '/home'},
    // {path: '/home', component: Home}

    //②通过name,不改path
    {path: '/', redirect: {name: 'home'}},
    {name: 'home', path: '/home', component: Home},
    //最终无法匹配 -> 404
    {path: '*', component: NotFoundVue}
]);
//new Vue 启动Vue
new Vue({
    el: '#app',
    router,
    render: c => c(App)
});