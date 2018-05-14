//引入Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);

//引入主体
import App from './components/app.vue';
import header from './components/header.vue';
import footer from './components/footer.vue'

//注册全局头部组件
// Vue.component('headerVue',header);
//注册全局底部组件
// Vue.component('footerVue',footer);

//创建路由对象并配置路由规则
let router = new VueRouter({
   routes: [
       {
           path: '/',
           components: {
               //name(router-view上的): 组件对象，没有name 默认default
               header: footer,
               default: header,
               footer: footer
           }
       }
   ]
});

//new Vue 启动Vue
new Vue({
    el: '#app',
    router,
    render: c => c(App)
});