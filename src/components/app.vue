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
           this.$axios.get('getlunbo',{
               params: {
                   id: 123
               },
               // baseURL: 'http://www.baidu.com',
               // headers: {
               //
               // }
           })
               .then(res=>{
                   console.log(res);
                   this.data = res.data.resInfo;
               })
               .catch(err=>{
                   console.log(err);
               })
               .finally(()=>{
                   console.log("最终");
               });

           //post
           this.$axios.post('postcomment/300',
               'content=这是一段内容'
               // {
               //     content: '这是一段内容'
               // },
               // {
               //     //设置
               //     headers: {
               //          'content-type': 'application/x-www-form-urlencoded'
               //     }
               // }
           )
           .then(res=>{
               this.data = res.data.message;
           })
           .catch(err=>{
               console.log(err);
           });
        }
    }
</script>

<style scoped>

</style>