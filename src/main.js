//1.引入Vue
import Vue from 'vue';
//2.引入app.vue 用他的内容来替换div id="app"
import App from './app.vue';

//引入mint-ui
import MintUi from 'mint-ui';
//引入样式
import 'mint-ui/lib/style.css';
// 安装插件
Vue.use(MintUi);
//use实际操作
//1.组件库，在内部注册了各种全局组件
//2.插件， 挂载属性， 为了方便this. 可以使用到其功能


//3.构建Vue实例
new Vue({
    //渲染内容的目的地
    el: '#app',
    //渲染内容
    render: c => c(App)
});
