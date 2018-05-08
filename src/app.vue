<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
               heros: [
                   {
                       id: 1,
                       name: '波比',
                       score: 'A'
                   },
                   {
                       id: 2,
                       name: '日女',
                       score: ''
                   },
                   {
                       id: 3,
                       name: '莫干娜',
                       score: 'C'
                   },
                   {
                       id: 4,
                       name: '扎克',
                       score: 'D'
                   },
               ]
            }
        }
    }
</script>

<style scoped>

</style>