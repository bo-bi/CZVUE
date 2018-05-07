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

        v-text：
        <span v-text="text"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-text="text" />
        <hr />
        v-html:
        <span v-html="html"></span>
        <hr />
        v-if:
        <div v-if="isShow" style="width: 600px;height: 100px;background-color: red;"></div>
        <hr />
        v-show:
        <div v-show="isShow" style="width: 600px;height: 100px;background-color: green;"></div>
        <<hr />
        v-model:
        <br />
        页面变化<input type="text" v-model="mTest" />
        <br />
        js内存属性    {{mTest}}
        <br />
        <!--v-bind:单项数据绑定，给下面的input的value值赋值用v-bind:value="mTest"，js改变内容改变，内容改变，js不改变-->
        <input id="val" type="text" v-bind:value="mTest">
    </div>
</template>

<script>
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
                mTest: '你好a我们是什么啊'

            }
        }
    }
</script>

<style scoped>

</style>