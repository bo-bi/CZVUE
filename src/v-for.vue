<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
         <ul>
             <li v-for="(stu,index) in stus" :key="stu.name">
                 index:{{index}}
                 stu: {{stu}}
             </li>

             使用对象的方式 <hr />

             <li v-for="(value,key,index) in person" v-bind:key="index">
                 value: {{value}}
                 key: {{key}}
                 index: {{index}}
             </li>
         </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stus: [
                    {
                        name: 'jack',
                        score: 'A'
                    },
                    {
                        name: 'rose',
                        score: 'B'
                    }
                ],
                person: {
                    name: 'addis',
                    age: 16,
                    color: 'blue'
                }
            }
        },
        methods: {
            change() {
                this.isRed = !this.isRed;
                this.stus.push({
                    name: 'mick',
                    score: 'A'
                });
            }
        }
    }
</script>

<style scoped>
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    }
    .yellow {
        background-color: yellow;
    }
    .big {
        font-size: 30px;
    }
</style>