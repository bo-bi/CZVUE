//1.引入Vue
import Vue from 'vue';
//2.引入app.vue 用他的内容来替换div id="app"
import App from './app.vue';

//创建全局过滤器
Vue.filter('myFilter',function(value) {
    return '我是全局过滤器';
});

//3.构建Vue实例
new Vue({
    //渲染内容的目的地
    el: '#app',
    //渲染内容
    render: c => c(App)
});
