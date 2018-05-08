//1.引入Vue
import Vue from 'vue';
//2.引入app.vue 用他的内容来替换div id="app"
import App from './app.vue';

//引入子组件对象
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';

//声明全局组件
Vue.component('headerVue',headerVue);
//注册一个组件
//第一个参数是名称，在template中使用
//第二个参数是实际的对象，显示成什么内容，具备什么功能
Vue.component('bodyVue',bodyVue);
Vue.component('footerVue',footerVue);
//3.构建Vue实例
new Vue({
    //渲染内容的目的地
    el: '#app',
    //渲染内容
    render: c => c(App)
});
