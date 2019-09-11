<template>
  <div>
    <button @click="useFatherMethod">子组件调用父组件的方法</button>
    <button @click="change">更换图片</button>
    <button @click="changeDiv">更换div</button>
    <br />
    <img ref="img" :src="src" alt="" />
    <div ref="div" :style="style"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "../img/336*180.png",
      style: "width: 100px; height: 100px; background: pink;"
    }
  },
  methods: {
    useFatherMethod() {
      // this.$parent.fatherMethod();
      // this.$emit("useFather");
      // this.$parent.msg
    },
    change() {
      this.src = "../img/703*376.png";
      console.log(this.$refs.img.src, 'offsetHeight');
      this.$nextTick(function() {
        console.log(this.$refs.img.src);
      });
      this.src = "../img/2360*700.jpg";

      // this.$nextTick(() => {
      //   console.log(this.$refs.img.src, 'offsetHeight');
      // })
      
    },
    changeDiv() {
      this.style = "width: 100px; height: 200px; background: pink;";
      console.log(this.$refs.div.offsetHeight);
      this.$nextTick(function() {
        console.log(this.$refs.div.offsetHeight);
      })
      this.style = "width: 100px; height: 300px; background: pink;";
    }
  }
}
</script>

<style>

</style>


