<template>
    <div>
        我是详情
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        //DOM还未生成，（操作数据）
        created() {
            //获取路由参数
            //vue-route 中挂载两个对象的属性
            //$route （信息数据）  $router  （功能函数）
            console.log(this.$route,"$route");
            console.log(this.$router,"$router");

            console.log(this.$route.query.id,"id");
            console.log(this.$route.params.i,"i");
        },
        //已经将数据装载到页面上去了，DOM已经生成，（操作DOM）
        mounted() {

        }
    }
</script>

<style scoped>

</style>