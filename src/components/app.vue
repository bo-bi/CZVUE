<template>
    <div>
        <div class="header">头部</div>
        <router-view class="main"></router-view>
        <div class="footer">底部</div>
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
    .header {
        height: 100px;
        background-color: pink;
    }
    .main {
        height: 100px;
        background-color: skyblue;
    }
    .footer {
        height: 100px;
        background-color: yellowgreen;
    }
</style>