<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <header-vue></header-vue>
        <!--用来显示music-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>