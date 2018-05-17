<template>
    <div>
         <button @click="send">发送请求1</button>
         <button @click="send2">发送请求2</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                 data: []
            }
        },
        methods: {
            send() {
                this.$axios.get('http://127.0.0.1:8085/json/nav.json')
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            send2() {
                this.$axios.get('http://127.0.0.1:8085/json/nav.json')
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>