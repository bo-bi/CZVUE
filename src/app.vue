<template>
    <div>
        <p ref="p">{{ msg }}</p>
        <button @click="changeValue">更改值</button>
        <button @click="fetchSon">获取子组件信息</button>
        <hr />
        <demo-vue @useFather="fatherMethod" ref="demo"></demo-vue>
    </div>
</template>

<script>
import DemoVue from './Demo.vue';
// 怎么在DOM更新后,在做事情?
// 为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。
    export default {
        data() {
            return {
                msg: '未更新',
            }
        },
        components: {
            DemoVue,
        },
        methods: {
            fatherMethod() {
                console.log("我是父组件的方法");
            },
            changeValue() {
                this.msg = '已更新';
                // 这里查看实际的文本(this.$refs.p.innerHTML),并不是查看data(this.person.name)
                console.log(this.$refs.p.innerHTML); // 未更新
                this.$nextTick( () => {
                    console.log(this.$refs.p.innerHTML); // 已更新
                })
            },
            fetchSon() {
                console.log(this.$refs.demo)
            }
        }
    }
</script>

<style scoped>
    
</style>
