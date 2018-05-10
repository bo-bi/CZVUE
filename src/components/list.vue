<template>
    <div>
        查询字符串-列表：
        <ul>
            <li v-for="(hero,index) in heros" :key="index">
                {{hero.name}}
                <!-- 1:去哪里  以?i=1进行传递 查询字符串 -->
                <router-link :to="{name: 'detail',query: {id: hero.id}}">查看详情</router-link>
            </li>
        </ul>
        path-列表：
        <ul>
            <li v-for="(hero,index) in heros" :key="index">
                {{hero.name}}
                <!-- 1:去哪里  以/detail/1进行传递 path -->
                <router-link :to="{name: 'detailPath',params: {i: index}}">查看详情</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                heros: [
                    {
                        id: 1,
                        name: '波比'
                    },
                    {
                        id: 2,
                        name: '日女'
                    },
                    {
                        id: 3,
                        name: '莫干娜'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>