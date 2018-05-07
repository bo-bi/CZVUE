<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <pre>
            * v-text 是元素的innerText只能在双标签中使用
            * v-html 是元素的innerHtml,不能包含<!--{{xxx}}-->
            * v-if   元素是否移除或插入
            * v-show 元素是否显示或隐藏
            * v-model 双向数据绑定，v-bind是单向数据绑定（js内存改变影响页面）
        </pre>

        <span :class="{'red':'isTitle'}">v-text：</span>
        <span v-text="text"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-text="text" />
        <hr />
        <span :class="{'red':'isTitle'}">v-html:</span>
        <span v-html="html"></span>
        <hr />
        <span :class="{'red':'isTitle'}">v-if:</span>
        <div v-if="isShow" style="width: 600px;height: 100px;background-color: red;"></div>
        <hr />
        <span :class="{'red':'isTitle'}">v-show:</span>
        <div v-show="isShow" style="width: 600px;height: 100px;background-color: green;"></div>
        <hr />
        <span :class="{'red':'isTitle'}">v-model:</span>
        <br />
        页面变化<input type="text" v-model="mTest" />
        <br />
        js内存属性    {{mTest}}
        <br />
        <!--v-bind:单项数据绑定，给下面的input的value值赋值用v-bind:value="mTest"，js改变内容改变，内容改变，js不改变-->
        <input id="val" type="text" v-bind:value="mTest">

        <br />
        <br />
        <br />
        <hr />
        <span :class="{'red':'isTitle'}">v-bind:class（:class）</span>
        <div v-bind:class="isRed?'red':'pink'">单个class</div>
        <div :class="{'red':isRed,'big':true}">多个class</div>
        <br />
        复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩做key，取对象的value，最终返回字符串做样式名
        <ul>
            <li v-for="stu in stus">
                <span :class="{'A':'red','B':'green'}[stu.score]">name:{{stu.name}}    score:{{stu.score}}</span>
            </li>
        </ul>

        <br />
        <br />
        <br />
        <ul>
            <li v-for="one in fruit" :class="{'bannana':'yellow','apple':'red','pineapple':'green'}[one.name]">
                  {{one.name}}
            </li>
        </ul>
        <hr />
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
                text: '我是v-text的内容',
                html: `
                        <ul>
                           <li>你好</li>
                           <li>我好</li>
                           <li>{{text}}</li>
                        </ul>
                `,
                isShow: false,
                mTest: '你好a我们是什么啊',
                isRed: false,
                isTitle: true,
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
                fruit: [
                    {
                        name: 'bannana'
                    },
                    {
                        name: 'apple'
                    },
                    {
                        name: 'pineapple'//菠萝
                    }
                ]
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