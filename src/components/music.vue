<template>
    <div>
        我是音乐
        <button @click="goMovie">跳转到电影</button>
        <button @click="goback">向上一页</button>
        <button @click="go">向下一页</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goMovie() {
                this.$router.push({
                    name: 'movie'
                });
            },
            goback() {
                this.$router.go(-1);//后退
            },
            go() {
                this.$router.go(1);//前进
            },
        },
        //数据初始化完成，DOM未生成
        created() {
            console.log(this.$route.params,"params");
            console.log(this.$route.query,"query");
        },
        //数据已经装载在DOM上，DOM生成
        mounted() {

        }
    }
</script>

<style scoped>

</style>