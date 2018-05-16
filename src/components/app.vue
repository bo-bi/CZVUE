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
            // console.log(this.$http);
            // https://api.douban.com/v2/movie/celebrity/1054395
            // this.$http.get('http://127.0.0.1:8085/json/nav.json').then(res=>{
            //     console.log(res);
            //     this.data = res.body.resInfo;
            // },err=>{
            //     console.log(err)
            // });

            //发表评论 跨域不能使用
            // http://bang.duia.com/web/reply/publish?tid=756472&fr=0&s=0&ct=321

            this.$http.post('http://127.0.0.1:8085/json/nav.json',{
                content: '哈哈'
            },{
                emulateJSON: true
            }).then(res=>{
                console.log(res,"res");
            },err=>{
                console.log(err);
            });
        }
    }
</script>

<style scoped>

</style>