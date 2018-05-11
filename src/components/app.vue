<template>
    <div>
        <div class="h">头部</div>
        <!-- 留坑， 非常重要！ -->
        <router-view class="b"></router-view>
        <div class="f">底部</div>

        <button @click="goMusic">跳转到音乐</button>
        <br/>
        <button @click="testQuery">测试编程导航传递参数[query]</button>
        <br/>
        <button @click="testParams">测试编程导航传递参数[params]</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goMusic() {
                this.$router.push('/music');
            },
            testQuery() {
                //查询字符串的方式   /mousic?id=1&name=2
                this.$router.push({
                   name: 'music',
                   query: {
                       id: 1,
                       name: 2
                   },
                   params: {
                       a: 3,
                       b: 4
                   }
                });
            },
            testParams() {
                //path 方式   /music/1/2 (有params,必须要更改路由path)
                this.$router.push({
                   name: 'movie',
                   params: {
                       id: 1,
                       name: 2
                   }
                });
            }
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