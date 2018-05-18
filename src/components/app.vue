<template>
    <div>
        单价:<input type="text" v-model="price" />
        件数:<input type="text" v-model="num" />
        折扣:<input type="text" v-model="rate" />
        {{sum}}
        <hr/>
        {{sum2.commodity}}---{{sum2.realyPrice}}
    </div>
</template>

<script>

    export default {
        data() {
            return {
                price: 0,
                num: 0,
                rate: 0
            }
        },
        computed: {
            sum() {
                return this.price * this.num * (this.rate/10);
            },
            sum2() {
                //如果当函数内涉及到this.相关属性发生改变以后触发，并返回一个值(可以是对象)
                return {
                    commodity: '渴望猫粮',
                    realyPrice: this.price * this.num * (this.rate/10)
                }
            }
        }
    }
</script>

<style scoped>

</style>