<template>
    <div>
        我是头部
        <a href="#/">首页</a>
        <router-link :to="{name: 'music_rihan'}">音乐</router-link>
        <router-link :to="{name: 'movie_fuchou'}">电影</router-link>
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

</style>