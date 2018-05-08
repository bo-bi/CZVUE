<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <!--3.使用子组件-->
        <header-vue textone="大"></header-vue>
        <body-vue v-bind:texttwo="text2"></body-vue>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text2: '哈哈哈哈'
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