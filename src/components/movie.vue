<template>
    <div>
        <router-link :to="{name: 'movie_fuchou'}">复仇者联盟3</router-link>
        <router-link :to="{name: 'movie_houlai'}">后来的我们</router-link>
        <router-link :to="{name: 'movie_qingnian'}">青年马克思</router-link>
        <hr/>
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