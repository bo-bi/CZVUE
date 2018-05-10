<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <mt-header title="多个按钮">
            <mt-button icon="back">返回</mt-button>
            <mt-button @click="handleClose">关闭</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <mt-switch v-model="value"></mt-switch>


        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="https://img1.360buyimg.com/pop/jfs/t19663/176/2396966722/71035/3eba1e42/5af167cfN1f560831.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/babel/jfs/t18943/254/2183667718/86633/170270c/5aec3053Nb7a09233.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/babel/jfs/t16702/11/2270576525/86087/e39e432f/5aead7acN200f8ded.jpg" />
            </mt-swipe-item>
        </mt-swipe>

        <button @click="showToast">显示弹出框</button>
    </div>
</template>

<script>
    //在js部分所有变量都是模块作用域
    //如果需要使用就必须引入
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                value: false
            }
        },
        methods: {
            handleClose() {

            },
            showToast() {
                Toast('提示信息');
            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }
    .mint-swipe-item>img {
        width: 100%;
        height: 100%;
    }
</style>