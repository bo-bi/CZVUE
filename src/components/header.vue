<template>
    <div>
        我是头部---{{msg}}
        <button @click="changemsgAll">点我</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['msg'],
        methods: {
          changemsgAll () {
            this.$emit('update:msg', '哈哈子组件改变了')
            // this.msgAll = true
          }
        }
    }
</script>

<style scoped>
    div {
        height: 100px;
        background-color: yellowgreen;
    }
</style>