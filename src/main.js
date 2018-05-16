//引入Vue
import Vue from 'vue';

//引入主体
import App from './components/app.vue';

//引入
import Axios from 'axios';
//设置全局公共路径
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;


//new Vue 启动Vue
new Vue({
    el: '#app',
    render: c => c(App)
});