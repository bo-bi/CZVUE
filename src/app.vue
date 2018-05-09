<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <!--3.使用子组件-->
        <sub-vue ref="sub"></sub-vue>

        <div ref="myDiv">
            {{text}}
        </div>
    </div>
</template>

<script>
    //2.引入子组件
    import subVue from './components/sub.vue'
    export default {
        data() {
            return {
                text: '哈哈哈哈'
            }
        },
        //1.声明组件
        components: {
            subVue: subVue
        },
        //组件创建后， 数据已经完成初始化， 但是DOM还未生成
        created() { // 事件的处理函数(created)
            console.log("created:",this.$refs.myDiv);//获取不到
        },
        //数据装载DOM上后， 各种数据已经就位， 将数据渲染到DOM上，DOM已经生成
        mounted() {
            // console.log("mounted:",this.$refs.myDiv);
            console.log("this:",this);
            console.log("sub:",this.$refs.sub.$el);

            //获取组件对象，并获取到其的DOM对象(父组件可以操作子组件的DOM)
            this.$refs.sub.$el.innerHTML = '父组件操作子组件的DOM';

            // 涉及DOM类的操作
            // this.$refs.myDiv.innerHTML = '操作DOM';

            //涉及到数据的操作
            this.text = '更改数据';
        }
    }
</script>

<style scoped>

</style>