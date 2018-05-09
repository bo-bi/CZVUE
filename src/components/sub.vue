<template>
    <span>
        子组件 sub.vue
    </span>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            console.log(this.$parent.$refs.myDiv,"子组件");
            //子组件可以操作父组件的DOM
            // this.$parent.$refs.myDiv.innerHTML = '子组件改变了父组件的DOM';
        }
    }
</script>

<style scoped>

</style>