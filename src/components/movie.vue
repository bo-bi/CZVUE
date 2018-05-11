<template>
    <div>
        我是电影
        <button @click="goback">向上一页</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goback() {
                this.$router.go(-1); //-1 上一次浏览记录 1 下一页（浏览记录里必须有才行）
            }
        },
        //数据初始化完成，DOM未生成
        created() {
            console.log(this.$route.params,"params");
        },
        //数据已经装载在DOM上，DOM生成
        mounted() {

        }
    }
</script>

<style scoped>

</style>