<template>
    <div>
        <router-link :to="{name: 'music_rihan'}">日韩</router-link>
        <router-link :to="{name: 'music_oumei'}">欧美</router-link>
        <router-link :to="{name: 'music_guochan'}">国产</router-link>
        <hr/>
        <!--变化的音乐数据-->
        <router-view></router-view>
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