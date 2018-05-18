<template>
    <div>
        <!--<input type="text" v-model="text"/>-->
        <!--{{text}}-->

        <button @click="change">改变值</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                text: '456',
                person: [
                    {name: 'jack'},
                    {name: 'rose'}
                ]
            }
        },
        methods: {
            change() {
                // this.text = '123';
                this.person[1].name = 'mick';
            }
        },
        watch: {
            //基本数据类型
            text: function(newV,oldV) {
                console.log('text值发生了改变');
                console.log(newV);
                console.log(oldV);
            },
            //复杂数据类型(数组、对象)
            person: {
                handler: function (newV, oldV) {
                    console.log("数组的值发生了变化");
                    console.log(newV);
                    console.log(oldV);
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>