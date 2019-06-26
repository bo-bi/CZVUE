<template>
    <div>
        <p>{{ person.name }}</p>
        <button @click="set">增加响应式属性</button>
    </div>
</template>

<script>
// 怎么在DOM更新后,在做事情?
// 为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。
    export default {
        data() {
            return {
                msg: '未更新',
                person: {}
            }
        },
        methods: {
            set() {
                // 不可以向根级响应式属性, 如this.$data不可以
                // 只能向里面的属性进行添加
                // this.$set(this.$data, 'name', '张三'); 不可以
                this.$set(this.person, 'name', '张三');
                // 同 Vue.set
            }
        }
    }
</script>

<style scoped>
    
</style>
