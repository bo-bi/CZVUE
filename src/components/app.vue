<template>
  <div>
    <div :style="{ 'fontSize': postFontSize + 'px' }">
      <blog-post
        v-for="(post, index) in postList"
        :key="index"
        :post="post"
        @enlarge-text="largen"></blog-post>
        <!-- 2. 父组件监听到，执行对应名字的自定义事件 -->
    </div>
  </div>
</template>

<script>
  import BlogPost from './BlogPost.vue'
  import VueBus from './VueBus.js';
  export default {
    data() {
      return {
        postFontSize: 12,
        postList: [
          {
            content: '在《快乐大本营》的下期预告中，小吴和王境泽两人一起现身，上演“真香男孩”和“发际线男孩”世纪同框的画面。顿时，小吴和王境泽世纪同框的话题迅速占领热搜榜。'
          },
          {
            content: '在《快乐大本营》的下期预告中，小吴和王境泽两人一起现身，上演“真香男孩”和“发际线男孩”世纪同框的画面。顿时，小吴和王境泽世纪同框的话题迅速占领热搜榜。'
          },
          {
            content: '在《快乐大本营》的下期预告中，小吴和王境泽两人一起现身，上演“真香男孩”和“发际线男孩”世纪同框的画面。顿时，小吴和王境泽世纪同框的话题迅速占领热搜榜。'
          }
        ]

      }
    },
    components: {
      BlogPost: BlogPost
    },

    created() {
      // 通过vuebus
      VueBus.$on('largen', (data)=> {
        console.log(data, 'data');
        if(data) {
          this.postFontSize += 0.1;
        }
      });
    },

    methods: {
      // // 执行自定义事件
      // largen () {
      //   this.postFontSize += 0.1;
      // },

      // 接收自定义事件抛出的值
      largen (number) {
        this.postFontSize += number;
      }
    }

  }
</script>

<style>

</style>