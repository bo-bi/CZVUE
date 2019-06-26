<template>
    <div>
        <p ref="p">{{ msg }}</p>
        <button @click="changeValue">更改值</button>
    </div>
</template>

<script>
// 怎么在DOM更新后,在做事情?
// 为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。
    export default {
        data() {
            return {
                msg: '未更新',
            }
        },
        methods: {
            changeValue() {
                this.msg = '已更新';
                // 这里查看实际的文本(this.$refs.p.innerHTML),并不是查看data(this.person.name)
                console.log(this.$refs.p.innerHTML); // 未更新
                this.$nextTick( () => {
                    console.log(this.$refs.p.innerHTML); // 已更新
                })
            }
        }
    }
</script>

<style scoped>
    
</style>
