<template>
    <div>
        <div class="h">头部
            <!-- 通过路径匹配，改了路径，这里不改就匹配不到了-->
            <!--<a href="#/mymusic">进入音乐1</a>-->
            <!--<a href="#/movie">进入电影1</a>-->
            <!--<a href="#/mymusic">进入音乐2</a>-->
            <!--<a href="#/movie">进入电影2</a>-->
            <!--<a href="#/music">进入音乐3</a>-->
            <!--<a href="#/movie">进入电影3</a>-->

            <!--重要 用这种！！！-->
            <!-- 1:去哪里 根据name进行匹配，随意更改path，不会影响跳转 -->
            <router-link :to="{name: 'music'}">进入音乐1</router-link>
            <router-link :to="{name: 'movie'}">进入电影1</router-link>
            <router-link :to="{name: 'music'}">进入音乐2</router-link>
            <router-link :to="{name: 'movie'}">进入电影2</router-link>
            <router-link :to="{name: 'music'}">进入音乐3</router-link>
            <router-link :to="{name: 'movie'}">进入电影4</router-link>

            <!--2.也可以跟路径使用 path更改，这里也需要更改-->
            <router-link to="/GoMovie">我是电影3（跟路径使用）</router-link>
        </div>
        <!-- 留坑， 非常重要！ -->
        <router-view class="b"></router-view>
        <div class="f">底部</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .h {
        height: 100px;
        background-color: yellowgreen;
    }
    .b {
        height: 100px;
        background-color: skyblue;
    }
    .f {
        height: 100px;
        background-color: hotpink;
    }
</style>