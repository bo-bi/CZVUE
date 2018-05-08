<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <!--3.使用子组件-->
        <header-vue></header-vue>
        <body-vue></body-vue>
        <footer-vue></footer-vue>
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
    .red {
        background-color: red;
    }
    .green {
        background-color: yellowgreen;
    }
    .blue {
        background-color: skyblue;
    }
    .pink {
        background-color: hotpink;
    }
</style>