//引入Vue
import Vue from 'vue';

//引入主体
import App from './components/app.vue';

//引入
import Axios from 'axios';
//设置全局公共路径
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

//默认设置
Axios.defaults.headers = {
    accept: 'defaults'
}

//拦截器            请求
Axios.interceptors.request.use(function(config) {
    // console.log(config);


    //个性化的修改
    // config.headers.accept = 'interceptors'; //新增
    config.headers = {// 覆盖
        accept: 'interceptors'
    }

    return config;//返回没有修改的设置
    //不 return config 就是一个拦截 或者 return false;
})



//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;


//new Vue 启动Vue
new Vue({
    el: '#app',
    render: c => c(App)
});