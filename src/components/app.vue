<template>
    <div>
        {{data}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 data: []
            }
        },
        //数据初始化，但是未生成DOM
        created() {

            //拦截器对每一次请求都有效
            // function getMsg(res1,res2) {
            //     console.log(res1);
            //     console.log(res2);
            // }
            //
            // this.$axios.all([
            //     this.$axios.post('postcomment/300','content=123'),
            //     this.$axios.get('getcomments/300?pageindex=1')
            // ])
            // .then(this.$axios.spread(getMsg))
            // .catch(err=>{
            //     console.log(err);
            // })


            this.$axios.get('http://127.0.0.1:8085/json/nav.json',{
                headers: {
                    accept: 'get'
                }
            })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err,"errrr");
            })


        }
    }
</script>

<style scoped>

</style>