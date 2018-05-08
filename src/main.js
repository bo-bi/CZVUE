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
Vue.component('bodyVue',bodyVue);
Vue.component('footerVue',footerVue);
//3.构建Vue实例
new Vue({
    //渲染内容的目的地
    el: '#app',
    //渲染内容
    render: c => c(App)
});
