<template>
    <div>
        <div>我是头部</div>
        <hr/>
            <!--留坑 非常重要 不同的坑 坑名-->
            <router-view name="header"></router-view>
            <router-view></router-view>
            <router-view name="footer"></router-view>
        <hr/>
        <div>我是底部</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>