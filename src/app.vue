<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        请输入内容 <input type="text" v-model="text" />
        <br/>
        显示 {{text | myFilter}}
        <br/>
        <!--3.使用子组件-->
        <sub-vue></sub-vue>
    </div>
</template>

<script>
    //2.引入子组件
    import subVue from './components/sub.vue'
    export default {
        data() {
            return {
                text: ''
            }
        },
        filters: {
            myFilter(value) { //value 就是--> text
                //输入的内容帮我做一个反转
                //转换成数组，数组反转，转化成字符串
                var array = value.split("");
                array.reverse();
                var str = array.join("");
                return str;
            }
        },
        //1.声明组件
        components: {
            subVue: subVue
        }
    }
</script>

<style scoped>

</style>