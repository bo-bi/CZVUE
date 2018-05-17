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

            //将两个请求一起发送，只要有一个失败，就算失败，成功只有是全体成功

            function getMsg(res1,res2) {
                console.log(res1);
                console.log(res2);
            }

            this.$axios.all([
                this.$axios.post('postcomment/300','content=123'),
                this.$axios.get('getcomments/300?pageindex=1')
            ])
            //分发响应
            .then(this.$axios.spread(getMsg))
            .catch(err=>{
                console.log(err,"err");
            })
        }
    }
</script>

<style scoped>

</style>