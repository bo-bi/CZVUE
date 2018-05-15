//1.引入Vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';

//2.引入app.vue 用他的内容来替换div id="app"
import App from './app.vue';
import Music from './components/music.vue';
import Rihan from './components/rihan.vue';
import Oumei from './components/oumei.vue';
import Guochan from './components/guochan.vue';
import Movie from './components/movie.vue';

import Fuchou from './components/fuchou.vue';
import Houlai from './components/houlai.vue';
import Qingnian from './components/qingnian.vue';

import header from './components/header.vue';

//注册全局组件
Vue.component('headerVue',header);
//安装插件（挂载属性）
Vue.use(VueRouter);
//创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: 'music'
            }
        },
        {
            name: 'movie',
            path: '/movie',
            component: Movie,
            children: [
                {
                    name: 'movie_fuchou',
                    path: 'fuchou',
                    component: Fuchou
                },
                {
                    name: 'movie_houlai',
                    path:'houlai',
                    component: Houlai
                },
                {
                    name: 'movie_qingnian',
                    path: 'qingnian',
                    component: Qingnian
                }
            ]
        },
        {
            name: 'music',
            path: '/music',
            component: Music,
            children: [
                {
                    //music_oumei music.oumei  标识一下,当前路由之间的关系，格式不是必须的
                    //就是个字符串而已 并不是对象什么的
                    name: 'music_oumei',
                    //这里很灵活，如果你写上/xxx 就是绝对路径 /oumei
                    //如果你不写/ 那么就是相对路径 /music/oumei
                    path:'oumei',
                    component:Oumei
                },
                {
                    name: 'music_rihan',
                    path: 'rihan',
                    component: Rihan
                },
                {
                    name: 'music_guochan',
                    path: 'guochan',
                    component: Guochan
                }
            ]
        }
    ]
});

//3.构建Vue实例
new Vue({
    //渲染内容的目的地
    el: '#app',
    router,
    //渲染内容
    render: c => c(App)
});
