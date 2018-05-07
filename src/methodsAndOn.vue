<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <div v-bind:class="isRed?'red':'green'">单个class</div>
        <div :class="{'red':true,'big':true}">多个class</div>
        <br />

        <ul>
            <li v-for="stu in stus">
                <span :class="{'A':'red','B':'green'}[stu.score]">name:{{stu.name}}    score:{{stu.score}}</span>
            </li>
        </ul>

        <!--<button v-on:click="isRed = !isRed">点我大变化</button>-->
        <!--<button v-on:click="change()">点我大变化</button>-->
        <!--<button @click="change()">点我大变化</button>-->
        <!--不传参数，还可以省略掉括号-->
        <button @click="change">点我大变化</button>
    </div>
</template>

<script>
    //class 取一个 返回一个字符串
    //      取多个 返回一个对象
    //一个学生列表 每个人都有成绩A或B,根据当前学生的成绩匹配显示不同的颜色
    //A-red B-green
    export default {
        data() {
            return {
                isRed: false,
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
            }
        },
        //声明函数，属于组件对象的
        methods: {
            //包含多个函数名做key，函数体做value
            change() {
                //在script中能使用的对象，基本template中也能使用，但是
                //在script中加this，template中不需要this
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