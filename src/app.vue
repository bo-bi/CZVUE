<template>
    <!--你好 这是错误的，必须有且只能有一个根节点！-->
    <div>
        <ul>
            <li v-for="(hero,index) in heros" :key="index" :class="{'A':'red','B':'green','C':'blue','D':'pink'}[hero.score]">
                {{hero.name}},{{hero.score}}
                <button @click="del(index)">删除</button>
            </li>
        </ul>
        英雄姓名：<input type="text" v-model="name" />
        英雄成绩：<input type="text" v-model="score" />
        <button v-on:click="addHero">添加英雄</button>
    </div>
</template>
B
<script>
    export default {
        data() {
            return {
               name: '',
               score: '',
               heros: [
                   {
                       id: 1,
                       name: '波比',
                       score: 'A'
                   },
                   {
                       id: 2,
                       name: '日女',
                       score: 'B'
                   },
                   {
                       id: 3,
                       name: '莫干娜',
                       score: 'C'
                   },
                   {
                       id: 4,
                       name: '扎克',
                       score: 'D'
                   },
               ],
            }
        },
        methods: {
            addHero() {
                //获取页面输入的值的时候，你用什么？v-model
                this.heros.push({
                        name: this.name,
                        score: this.score
                });
                //添加完 清空input
                this.name = '';
                this.score = '';
            },
            del(index) {
                this.heros.splice(index,1);
            }
        }
    }
</script>

<style scoped>
    .red {
        background-color: red;
    }
    .green {
        background-color: yellowgreen;
    }
    .blue {
        background-color: skyblue;
    }
    .pink {
        background-color: hotpink;
    }
</style>