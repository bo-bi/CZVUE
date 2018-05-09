<template>
    <div>
        我是儿子
        <br />
        <button @click="callDaddy">打电话给爸爸</button>
    </div>
</template>

<script>
    //引入电话线
    import connect from '../connector.js';
    export default {
        data() {
            return {

            }
        },
        methods: {
            callDaddy() {
                //发射信号
                connect.$emit('phone',"酱油卖完了");
            }
        }
    }
</script>

<style scoped>

</style>