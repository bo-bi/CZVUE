<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <pre>
            * v-text
            * v-html
            * v-if
            * v-show
            * v-model
        </pre>

        v-text
        <span v-text="a"></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '我是v-text的内容'
            }
        }
    }
</script>

<style scoped>

</style>