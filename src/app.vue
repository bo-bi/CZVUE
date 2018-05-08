<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <!--3.使用组件-->
        <header-vue></header-vue>
        <body-vue></body-vue>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
    //2.引入子组件对象
    import headerVue from './components/header.vue'
    import bodyVue from './components/body.vue'
    import footerVue from './components/footer.vue'
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        //1.必须声明
        components: {
            //组件名称(在模板中使用)：组件对象
            headerVue: headerVue,
            bodyVue: bodyVue,
            footerVue//两者相同，可以简写为一个
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