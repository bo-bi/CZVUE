//引入Vue
import Vue from 'vue';

//引入mint-ui
import MintUi from 'mint-ui'; // export default 整个对象
// import { Indicator } from 'mint-ui'; // export 整个对象.Indicator -> {Indicator}
//引入css
import 'mint-ui/lib/style.css';
//安装组件库，注册一堆全局组件
Vue.use(MintUi);


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
    //在请求发送前，显示loading
    MintUi.Indicator.open("加载中");
    return config;
})
Axios.interceptors.response.use(function(config) {
    //在响应完成后，移除loading
    MintUi.Indicator.close();
    return config;
})



//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;



//new Vue 启动Vue
new Vue({
    el: '#app',
    render: c => c(App)
});