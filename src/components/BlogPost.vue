<template>
  <div class="blog-post">
    <p> {{ post.content }} </p>
    <button @click="enlargeText">增大字号</button>
    <button @click="enlargeTextByVueBus">增大字号vuebus</button>
  </div>
</template>

<script>
  import VueBus from './VueBus.js';
  export default {
    props: {
      post: {
        default: {}
      }
    },

    methods: {
      // 1.子组件发送要触发的自定义事件名
      // enlargeText () {
      //   this.$emit('enlarge-text');
      // },

      // 自定义事件抛出一个值
      enlargeText () {
        this.$emit('enlarge-text', 2);
      },

      // 通过vuebus
      enlargeTextByVueBus () {
        VueBus.$emit('largen', true);
      }
    }

  }
</script>

<style>
  .blog-post {
    width: 500px;
    margin: 50px auto;
    border: 1px solid #ccc;
  }
</style>