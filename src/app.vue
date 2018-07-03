<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <sub-vue></sub-vue>
        <button @click="listen">爸爸焦急的听电话</button>
    </div>
</template>

<script>
    //引入连接器(电话线)
    import connect from './connector.js';
    export default {
        data() {
            return {
                text2: '哈哈哈哈'
            }
        },
        methods: {
            listen() {
                console.log(1);
                connect.$on('phone',function(msg) {
                    console.log(msg,"msg");
                });
            }
        },
        created() {
            connect.$on('phone',msg => {
                console.log(msg,"msg");
            })
        }
    }
</script>

<style scoped>
    .red {
        background-color: red;
    }
    .green {
        background-color: yellowgreen;
    }
    .blue {
        background-color: skyblue;
    }
    .pink {
        background-color: hotpink;
    }
</style>