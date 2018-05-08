//1.引入Vue
import Vue from 'vue';
//2.引入app.vue 用他的内容来替换div id="app"
import App from './app.vue';

//3.构建Vue实例
new Vue({
    //渲染内容的目的地
    el: '#app',
    //渲染内容
    // render: function(c) { //c只是一个形参，叫什么都可以
    //     return c(App);
    // }

    //一般来说，key是固定的，值是你设置的（可变的）

    // render: (c) => {//1.当参数是一个的时候，小括号可以省略
    //                 //2.当代码只有一行且是返回值的时候，可以省略大括号
    //     return c(App);
    // }

    render: c => c(App)
});
