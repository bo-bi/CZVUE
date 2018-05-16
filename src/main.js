//引入Vue
import Vue from 'vue';
//引入vue-resource
import VueResource from 'vue-resource';

//引入主体
import App from './components/app.vue';

//安装插件
Vue.use(VueResource);//插件都是挂载属性
//未来通过this.$http
//Vue 是所有实例对象的构造函数
//通过在原型上添加属性来进行挂载的 Vue.prototype.$http -> 实例(this)就可以.$http

//new Vue 启动Vue
new Vue({
    el: '#app',
    render: c => c(App)
});