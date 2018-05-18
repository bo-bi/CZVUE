//引入Vue
import Vue from 'vue';

//引入主体
import App from './components/app.vue';

//new Vue 启动Vue
new Vue({
    el: '#app',
    render: c => c(App)
});